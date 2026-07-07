import { useState, useEffect } from "react";

const ENDPOINT = "https://getnos.io/fone-ai/index.php";
const CALENDLY_BASE = "https://calendly.com/foneai/30min";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

.fai-overlay{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,0.72);
  backdrop-filter:blur(6px);
  -webkit-backdrop-filter:blur(6px);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:9999;
  padding:20px;
  animation:fai-overlay-in .3s ease both;
}
@keyframes fai-overlay-in{
  from{opacity:0}
  to{opacity:1}
}

.fai{
  --orchid:#0ea5e9;
  --magenta:#22d3ee;
  --ice:#ffffff;
  --mute:rgba(255,255,255,0.74);
  --faint:rgba(255,255,255,0.54);
  --line:rgba(14,165,233,0.16);
  --sans:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;
  --mono:'JetBrains Mono',ui-monospace,monospace;
  font-family:var(--sans);
  color:var(--ice);
  width:100%;
  max-width:520px;
  -webkit-font-smoothing:antialiased;
}
.fai *{box-sizing:border-box;margin:0;padding:0}

.fai-card{
  position:relative;
  width:100%;
  background:linear-gradient(180deg, rgba(7,20,48,0.97), rgba(3,9,28,0.98));
  border:1px solid var(--line);
  border-radius:24px;
  padding:34px 34px 30px;
  box-shadow:
    0 0 0 1px rgba(14,165,233,0.06),
    0 30px 70px rgba(0,0,0,0.7),
    0 0 80px rgba(14,165,233,0.20);
  animation:fai-card-in .5s cubic-bezier(.34,1.56,.64,1) both;
  animation-delay:.08s;
}
@keyframes fai-card-in{
  from{opacity:0;transform:translateY(32px) scale(.93)}
  to{opacity:1;transform:translateY(0) scale(1)}
}

.fai-card::before{
  content:"";position:absolute;top:0;left:24px;right:24px;height:1px;
  background:linear-gradient(90deg, transparent, var(--orchid), var(--magenta), var(--orchid), transparent);
  background-size:200% 100%;
  opacity:.85;
  border-radius:1px;
  animation:fai-hairline 5s linear infinite;
}
@keyframes fai-hairline{0%{background-position:150% 0}100%{background-position:-50% 0}}

.fai-eyebrow{
  display:inline-flex;align-items:center;gap:10px;
  font-family:var(--mono);
  font-size:10.5px;letter-spacing:0.22em;text-transform:uppercase;
  color:#fff;font-weight:600;
  padding:7px 12px;border-radius:40px;
  background:rgba(14,165,233,0.10);
  border:1px solid rgba(14,165,233,0.32);
  animation:fai-rise .5s ease both;
  animation-delay:.18s;
}
.fai-wave{display:inline-flex;align-items:flex-end;gap:2.5px;height:13px}
.fai-wave i{
  width:2.5px;border-radius:2px;
  background:linear-gradient(180deg,var(--magenta),var(--orchid));
  animation:fai-eq 1.1s ease-in-out infinite;
}
.fai-wave i:nth-child(1){height:5px; animation-delay:0s}
.fai-wave i:nth-child(2){height:11px;animation-delay:.15s}
.fai-wave i:nth-child(3){height:8px; animation-delay:.3s}
.fai-wave i:nth-child(4){height:13px;animation-delay:.45s}
.fai-wave i:nth-child(5){height:6px; animation-delay:.6s}
@keyframes fai-eq{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}

.fai-title{
  font-size:28px;font-weight:700;letter-spacing:-0.02em;line-height:1.1;
  margin:16px 0 8px;
  animation:fai-rise .5s ease both;
  animation-delay:.22s;
}
.fai-sub{
  font-size:14px;line-height:1.55;color:var(--mute);max-width:42ch;
  animation:fai-rise .5s ease both;
  animation-delay:.26s;
}

.fai-status{
  margin:18px 0 0;font-size:13px;font-weight:500;text-align:center;
  padding:11px 14px;border-radius:10px;
}
.fai-status.ok {color:#7dffd0;background:rgba(45,212,160,0.10);border:1px solid rgba(45,212,160,0.30)}
.fai-status.bad{color:#ff9db5;background:rgba(255,90,120,0.10);border:1px solid rgba(255,90,120,0.30)}

.fai-form{display:flex;flex-direction:column;gap:16px;margin-top:26px}

.fai-field{display:flex;flex-direction:column;gap:7px;animation:fai-rise .5s ease both}
.fai-field:nth-child(1){animation-delay:.30s}
.fai-field:nth-child(2){animation-delay:.36s}
.fai-field:nth-child(3){animation-delay:.42s}
@keyframes fai-rise{
  from{opacity:0;transform:translateY(14px)}
  to{opacity:1;transform:translateY(0)}
}

.fai-label{
  font-family:var(--mono);
  font-size:10px;letter-spacing:0.16em;text-transform:uppercase;
  color:var(--faint);font-weight:500;
}
.fai-control{
  width:100%;height:50px;
  background:rgba(255,255,255,0.035);
  border:1px solid var(--line);
  border-radius:12px;
  padding:0 15px;
  color:var(--ice);font-family:var(--sans);font-size:15px;
  transition:border-color .18s ease, box-shadow .18s ease, background .18s ease;
}
.fai-control::placeholder{color:rgba(244,236,255,0.28)}
.fai-control:focus{
  outline:none;
  border-color:var(--orchid);
  background:rgba(14,165,233,0.06);
  box-shadow:0 0 0 4px rgba(14,165,233,0.14);
}
.fai-control.bad{border-color:#ff5a78;box-shadow:0 0 0 4px rgba(255,90,120,0.14)}
.fai-field:focus-within .fai-label{color:var(--orchid)}

.fai-err{font-size:12px;color:#ff9db5;font-weight:500}

.fai-btn{
  position:relative;overflow:hidden;
  margin-top:6px;width:100%;height:56px;
  border:none;border-radius:13px;cursor:pointer;
  font-family:var(--mono);
  font-size:13px;font-weight:600;letter-spacing:0.10em;text-transform:uppercase;
  color:#fff;
  background:linear-gradient(100deg,var(--orchid),var(--magenta));
  box-shadow:0 12px 34px rgba(14,165,233,0.40);
  transition:transform .14s ease, filter .18s ease, box-shadow .18s ease;
  animation:fai-rise .5s ease both;
  animation-delay:.48s;
}
.fai-btn::after{
  content:"";position:absolute;top:0;left:-130%;width:55%;height:100%;
  background:linear-gradient(100deg,transparent,rgba(255,255,255,0.30),transparent);
  transform:skewX(-18deg);
  animation:fai-sheen 4.5s ease-in-out infinite;
  animation-delay:1s;
}
.fai-btn:hover{transform:translateY(-2px);filter:brightness(1.08);box-shadow:0 16px 46px rgba(34,211,238,0.55)}
.fai-btn:active{transform:translateY(0)}
.fai-btn:disabled{opacity:.6;cursor:not-allowed;transform:none}
.fai-btn:disabled::after{animation:none}
@keyframes fai-sheen{0%,55%{left:-130%}80%,100%{left:140%}}

.fai-arrow{display:inline-block;transition:transform .18s ease}
.fai-btn:hover .fai-arrow{transform:translateX(5px)}

.fai-fine{
  margin-top:14px;text-align:center;
  font-size:11.5px;color:var(--faint);
  display:flex;gap:8px;justify-content:center;flex-wrap:wrap;
  animation:fai-rise .5s ease both;
  animation-delay:.52s;
}
.fai-fine span{display:inline-flex;align-items:center;gap:7px}
.fai-fine span::before{content:"";width:5px;height:5px;border-radius:50%;background:var(--orchid)}

@media (max-width:560px){
  .fai-card{padding:26px 20px 24px;border-radius:18px}
  .fai-title{font-size:24px}
}

@media (prefers-reduced-motion:reduce){
  .fai-overlay,.fai-card,.fai-card::before,.fai-eyebrow,.fai-title,.fai-sub,
  .fai-field,.fai-btn,.fai-btn::after,.fai-wave i,.fai-fine,.fai-close{animation:none!important}
}
`;

export default function FoneAiDemoForm({ onClose }) {
  const [form, setForm] = useState({ fullName: "", email: "", whatsapp: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const PLACEHOLDERS = {
  "+52": "998 765 4321",
  "+91": "98765 43210",
  "+1":  "212 555 0100",
  "+44": "7911 123456",
  "+34": "612 345 678",
  "+57": "312 345 6789",
  "+54": "11 2345 6789",
  "+56": "9 1234 5678",
  "+51": "912 345 678",
  "+58": "412 345 6789",
  "+55": "11 91234 5678",
  "+49": "151 23456789",
  "+33": "6 12 34 56 78",
  "+39": "312 345 6789",
  "+61": "412 345 678",
  "+81": "90 1234 5678",
  "+86": "131 2345 6789",
  "+971":"50 123 4567",
  "+966":"51 234 5678",
  "+65": "8123 4567",
};

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("foneLead") || "null");
      if (saved && typeof saved === "object") {
        setForm((f) => ({ ...f, ...saved }));
      }
    } catch (_) {}
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape" && onClose) onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const setField = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (form.fullName.trim().length < 2) e.fullName = "Ingresa tu nombre completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Ingresa un correo valido.";
    const digits = form.whatsapp.replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 15) e.whatsapp = "Ingresa un numero de WhatsApp valido.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (loading) return;
    setStatus(null);
    if (!validate()) return;
    setLoading(true);

    const cleanWhatsapp = form.whatsapp.replace(/\D/g, "");

    // Fire-and-forget lead capture
    fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        source: "fone_ai_demo",
        ...form,
        whatsapp: cleanWhatsapp,
        ts: new Date().toISOString(),
      }),
    }).catch(() => {});

    try {
      localStorage.setItem("foneLead", JSON.stringify(form));
    } catch (_) {}

    // Calendly prefill params: name, email, a1 (custom phone field)
    const params = new URLSearchParams({
      name:  form.fullName.trim(),
      email: form.email.trim(),
      a1:    cleanWhatsapp,
    });

    window.location.href = `${CALENDLY_BASE}?${params.toString()}`;
  };

  const ctrl = (name) => `fai-control${errors[name] ? " bad" : ""}`;

  return (
    <div
      className="fai-overlay"
      onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
    >
      <style>{CSS}</style>
      <div className="fai">
        <div className="fai-card">

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar formulario"
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,.2)",
                background: "rgba(0,0,0,.8)",
                color: "#fff",
                cursor: "pointer",
                zIndex: 999999,
                fontSize: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              x
            </button>
          )}

          <span className="fai-eyebrow">
            <span className="fai-wave">
              <i /><i /><i /><i /><i />
            </span>
            Demo en vivo · 30 min
          </span>

          <h3 className="fai-title">
            Ve Fone AI en tu plataforma
          </h3>
          <p className="fai-sub">
            Un recorrido de 30 minutos adaptado a tu configuracion de PBX o UCaaS. Sin diapositivas, lo ejecutamos contra tu plataforma.
          </p>

          {status && (
            <p className={`fai-status ${status.type}`}>{status.msg}</p>
          )}

          <form className="fai-form" onSubmit={handleSubmit} noValidate>

            <div className="fai-field">
              <label className="fai-label" htmlFor="fai-name">Nombre completo</label>
              <input
                id="fai-name"
                className={ctrl("fullName")}
                type="text"
                placeholder="Maria Rodriguez"
                value={form.fullName}
                autoComplete="name"
                onChange={(e) => setField("fullName", e.target.value)}
              />
              {errors.fullName && <span className="fai-err">{errors.fullName}</span>}
            </div>

            <div className="fai-field">
              <label className="fai-label" htmlFor="fai-email">Correo electronico</label>
              <input
                id="fai-email"
                className={ctrl("email")}
                type="email"
                placeholder="tu@empresa.com"
                value={form.email}
                autoComplete="email"
                onChange={(e) => setField("email", e.target.value)}
              />
              {errors.email && <span className="fai-err">{errors.email}</span>}
            </div>

            <div className="fai-field">
  <label className="fai-label" htmlFor="fai-whatsapp">Numero de WhatsApp</label>
  <div style={{display:'flex',gap:'8px',alignItems:'stretch'}}>
    <select
      value={form.countryCode}
      onChange={(e) => setField("countryCode", e.target.value)}
      style={{
        height:'50px',
        padding:'0 10px',
        background:'rgba(255,255,255,0.035)',
        border:'1px solid rgba(14,165,233,0.16)',
        borderRadius:'12px',
        color:'#fff',
        fontSize:'14px',
        cursor:'pointer',
        flexShrink:0,
        outline:'none',
        fontFamily:'Inter,sans-serif',
      }}
    >
      <option style={{background:'#071430',color:'#fff'}} value="+52">🇲🇽 +34</option>
      <option style={{background:'#071430',color:'#fff'}} value="+91">🇮🇳 +91</option>
      <option style={{background:'#071430',color:'#fff'}} value="+1">🇺🇸 +1</option>
      <option style={{background:'#071430',color:'#fff'}} value="+44">🇬🇧 +44</option>
      <option style={{background:'#071430',color:'#fff'}} value="+34">🇪🇸 +34</option>
      <option style={{background:'#071430',color:'#fff'}} value="+57">🇨🇴 +57</option>
      <option style={{background:'#071430',color:'#fff'}} value="+54">🇦🇷 +54</option>
      <option style={{background:'#071430',color:'#fff'}} value="+56">🇨🇱 +56</option>
      <option style={{background:'#071430',color:'#fff'}} value="+51">🇵🇪 +51</option>
      <option style={{background:'#071430',color:'#fff'}} value="+58">🇻🇪 +58</option>
      <option style={{background:'#071430',color:'#fff'}} value="+55">🇧🇷 +55</option>
      <option style={{background:'#071430',color:'#fff'}} value="+593">🇪🇨 +593</option>
      <option style={{background:'#071430',color:'#fff'}} value="+502">🇬🇹 +502</option>
      <option style={{background:'#071430',color:'#fff'}} value="+503">🇸🇻 +503</option>
      <option style={{background:'#071430',color:'#fff'}} value="+504">🇭🇳 +504</option>
      <option style={{background:'#071430',color:'#fff'}} value="+505">🇳🇮 +505</option>
      <option style={{background:'#071430',color:'#fff'}} value="+506">🇨🇷 +506</option>
      <option style={{background:'#071430',color:'#fff'}} value="+507">🇵🇦 +507</option>
      <option style={{background:'#071430',color:'#fff'}} value="+591">🇧🇴 +591</option>
      <option style={{background:'#071430',color:'#fff'}} value="+595">🇵🇾 +595</option>
      <option style={{background:'#071430',color:'#fff'}} value="+598">🇺🇾 +598</option>
      <option style={{background:'#071430',color:'#fff'}} value="+49">🇩🇪 +49</option>
      <option style={{background:'#071430',color:'#fff'}} value="+33">🇫🇷 +33</option>
      <option style={{background:'#071430',color:'#fff'}} value="+39">🇮🇹 +39</option>
      <option style={{background:'#071430',color:'#fff'}} value="+61">🇦🇺 +61</option>
      <option style={{background:'#071430',color:'#fff'}} value="+81">🇯🇵 +81</option>
      <option style={{background:'#071430',color:'#fff'}} value="+86">🇨🇳 +86</option>
      <option style={{background:'#071430',color:'#fff'}} value="+971">🇦🇪 +971</option>
      <option style={{background:'#071430',color:'#fff'}} value="+966">🇸🇦 +966</option>
      <option style={{background:'#071430',color:'#fff'}} value="+65">🇸🇬 +65</option>
    </select>
    <input
      id="fai-whatsapp"
      className={ctrl("whatsapp")}
      type="tel"
      inputMode="numeric"
       placeholder={PLACEHOLDERS[form.countryCode] || "123 456 7890"}
      value={form.whatsapp}
      autoComplete="tel"
      onChange={(e) => setField("whatsapp", e.target.value)}
      style={{flex:1}}
    />
  </div>
  {errors.whatsapp && <span className="fai-err">{errors.whatsapp}</span>}
</div>

            <button type="submit" className="fai-btn" disabled={loading}>
              {loading
                ? "Enviando..."
                : <>Agendar mi demo <span className="fai-arrow">-&gt;</span></>
              }
            </button>

            <div className="fai-fine">
              <span>Sin compromiso</span>
              <span>Llamada de 30 minutos</span>
              <span>Hecho para operadores</span>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
