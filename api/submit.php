<?php
/**
 * Fone AI — Demo Request Form Handler
 *
 * Receives POST submissions from the React frontend, validates input,
 * and sends an email notification to the sales inbox.
 *
 * FROM: hello@getnos.io
 * TO:   sriethiraj@getnos.io
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// ---------------------------------------------------------------------------
// CONFIGURATION
// ---------------------------------------------------------------------------
$MAIL_FROM       = 'hello@getnos.io';
$MAIL_FROM_NAME  = 'Fone AI Website';
$MAIL_TO         = 'sriethiraj@getnos.io';
$MAIL_TO_NAME    = 'Fone AI Sales';
$MAIL_REPLY_TO   = null; // will be set to the lead's email

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------
function clean($value, $maxLength = 500) {
    if (!is_string($value)) return '';
    $value = trim($value);
    $value = strip_tags($value);
    $value = str_replace(["\r", "\n", "%0a", "%0d"], '', $value);
    return mb_substr($value, 0, $maxLength);
}

function respond($success, $message, $code = 200) {
    http_response_code($code);
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

// ---------------------------------------------------------------------------
// INPUT COLLECTION & VALIDATION
// ---------------------------------------------------------------------------
$fullName        = clean($_POST['full_name']        ?? '', 120);
$companyName     = clean($_POST['company_name']     ?? '', 200);
$workEmail       = clean($_POST['work_email']       ?? '', 200);
$phone           = clean($_POST['phone']            ?? '', 50);
$currentPlatform = clean($_POST['current_platform'] ?? '', 200);
$timeline        = clean($_POST['timeline']         ?? '', 50);

// Honeypot (optional anti-spam)
if (!empty($_POST['website'])) {
    respond(true, 'OK'); // silently accept bots
}

// Required field validation
if ($fullName === '' || $companyName === '' || $workEmail === '' || $timeline === '') {
    respond(false, 'Please fill in all required fields.', 422);
}

if (!filter_var($workEmail, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Please provide a valid work email address.', 422);
}

$MAIL_REPLY_TO = $workEmail;

// ---------------------------------------------------------------------------
// EMAIL BODY
// ---------------------------------------------------------------------------
$submittedAt = date('Y-m-d H:i:s');
$ip          = $_SERVER['REMOTE_ADDR']      ?? 'unknown';
$userAgent   = $_SERVER['HTTP_USER_AGENT']  ?? 'unknown';

$subject = "New Fone AI Demo Request — {$companyName}";

$plainBody = <<<TXT
New demo request received from the Fone AI landing page.

────────────────────────────────────────
LEAD DETAILS
────────────────────────────────────────
Full Name        : {$fullName}
Company Name     : {$companyName}
Work Email       : {$workEmail}
Phone Number     : {$phone}
Current Platform : {$currentPlatform}
Implementation   : {$timeline}

────────────────────────────────────────
META
────────────────────────────────────────
Submitted At     : {$submittedAt}
IP Address       : {$ip}
User Agent       : {$userAgent}
TXT;

$htmlBody = '
<!DOCTYPE html>
<html><body style="font-family:Inter,Arial,sans-serif;background:#f6f8fb;padding:24px;color:#0a0a0f;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.05);">
    <div style="background:linear-gradient(135deg,#2563eb,#1e40af);padding:24px 28px;color:white;">
      <h1 style="margin:0;font-size:20px;font-weight:800;">New Fone AI Demo Request</h1>
      <p style="margin:6px 0 0;font-size:13px;opacity:0.9;">Submitted ' . htmlspecialchars($submittedAt) . '</p>
    </div>
    <div style="padding:28px;">
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:8px 0;color:#6b7280;width:40%;">Full Name</td><td style="padding:8px 0;font-weight:600;">' . htmlspecialchars($fullName) . '</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;">Company</td><td style="padding:8px 0;font-weight:600;">' . htmlspecialchars($companyName) . '</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;">Work Email</td><td style="padding:8px 0;font-weight:600;"><a href="mailto:' . htmlspecialchars($workEmail) . '" style="color:#2563eb;text-decoration:none;">' . htmlspecialchars($workEmail) . '</a></td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;">Phone</td><td style="padding:8px 0;font-weight:600;">' . htmlspecialchars($phone ?: '—') . '</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;">Current Platform</td><td style="padding:8px 0;font-weight:600;">' . htmlspecialchars($currentPlatform ?: '—') . '</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;">Implementation Timeline</td><td style="padding:8px 0;font-weight:600;">' . htmlspecialchars($timeline) . '</td></tr>
      </table>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">
      <p style="font-size:12px;color:#9ca3af;margin:0;">IP: ' . htmlspecialchars($ip) . '<br>UA: ' . htmlspecialchars($userAgent) . '</p>
    </div>
  </div>
</body></html>';

// ---------------------------------------------------------------------------
// SEND EMAIL (multipart/alternative: text + html)
// ---------------------------------------------------------------------------
$boundary = '==FONEAI_' . md5(uniqid('', true)) . '==';

$headers   = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: multipart/alternative; boundary="' . $boundary . '"';
$headers[] = 'From: ' . $MAIL_FROM_NAME . ' <' . $MAIL_FROM . '>';
$headers[] = 'Reply-To: ' . $fullName . ' <' . $MAIL_REPLY_TO . '>';
$headers[] = 'X-Mailer: FoneAI-Website/1.0';
$headers[] = 'X-Priority: 3';

$message  = "--{$boundary}\r\n";
$message .= "Content-Type: text/plain; charset=UTF-8\r\n";
$message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$message .= $plainBody . "\r\n\r\n";
$message .= "--{$boundary}\r\n";
$message .= "Content-Type: text/html; charset=UTF-8\r\n";
$message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$message .= $htmlBody . "\r\n\r\n";
$message .= "--{$boundary}--";

$envelope = '-f' . $MAIL_FROM; // helps with Return-Path

$sent = @mail(
    $MAIL_TO,
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    $message,
    implode("\r\n", $headers),
    $envelope
);

// ---------------------------------------------------------------------------
// OPTIONAL: log every submission to a file for backup
// ---------------------------------------------------------------------------
$logDir  = __DIR__ . '/logs';
if (!is_dir($logDir)) { @mkdir($logDir, 0755, true); }
$logLine = sprintf(
    "[%s] %s | %s | %s | %s | %s | %s | sent=%s\n",
    $submittedAt, $fullName, $companyName, $workEmail, $phone, $currentPlatform, $timeline,
    $sent ? 'yes' : 'no'
);
@file_put_contents($logDir . '/submissions.log', $logLine, FILE_APPEND | LOCK_EX);

// ---------------------------------------------------------------------------
// RESPOND
// ---------------------------------------------------------------------------
if ($sent) {
    respond(true, 'Demo request received. We will be in touch within 24 hours.');
} else {
    // Even if mail() fails, the submission is logged. Return success to user
    // (they shouldn't be penalised for server mail issues) but include a hint.
    respond(true, 'Demo request received.');
}
