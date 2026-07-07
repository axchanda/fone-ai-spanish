import { useState, useEffect, useRef } from "react";

const EVENTS = [
  { name: "Alejandro G.", city: "Madrid, ES",    lat: 40.4168, lng: -3.7038,  action: "reservó una demo",          ago: "hace 5 días" },
  { name: "Carlos R.",    city: "Valencia, ES",  lat: 39.4699, lng: -0.3763,  action: "inició una prueba gratuita", ago: "hace 2 días" },
  { name: "Diego H.",     city: "Sevilla, ES",   lat: 37.3891, lng: -5.9845,  action: "se registró",               ago: "hace 4 días" },
  { name: "Laura C.",     city: "Bilbao, ES",    lat: 43.2630, lng: -2.9350,  action: "completó el onboarding",    ago: "hace 5 días" },
  { name: "Sergio G.",    city: "Murcia, ES",    lat: 37.9922, lng: -1.1307,  action: "reservó una demo",          ago: "hace 8 días" },
  { name: "Carmen D.",    city: "Palma, ES",     lat: 39.5696, lng:  2.6502,  action: "inició una prueba gratuita", ago: "hace 11 días" },
  { name: "Alejandro R.", city: "Zaragoza, ES",  lat: 41.6488, lng: -0.8891,  action: "se registró",               ago: "hace 13 días" },
  { name: "Lucia T.",     city: "Alicante, ES",  lat: 38.3452, lng: -0.4810,  action: "completó el onboarding",    ago: "hace 17 días" },
];

// Timings
const SLIDE_IN_MS  = 400;
const VISIBLE_MS   = 58000;
const SLIDE_OUT_MS = 400;
const TOTAL_MS     = SLIDE_IN_MS + VISIBLE_MS + SLIDE_OUT_MS;
const NEXT_DELAY   = 60000;

const FONT = "'Inter', 'DM Sans', 'Helvetica Neue', Arial, sans-serif";

function mapUrl(lat, lng) {
  const zoom = 11;
  const tileX = Math.floor((lng + 180) / 360 * Math.pow(2, zoom));
  const tileY = Math.floor(
    (1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI)
    / 2 * Math.pow(2, zoom)
  );
  return `https://tile.openstreetmap.org/${zoom}/${tileX}/${tileY}.png`;
}

function useFontInject() {
  useEffect(() => {
    if (document.getElementById("proof-inter-font")) return;
    const link = document.createElement("link");
    link.id   = "proof-inter-font";
    link.rel  = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);
}

function VerifiedIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#3b82f6"/>
      <path d="M7.5 12l3 3 6-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PinOverlay() {
  return (
    <div style={{
      position: "absolute",
      top: "50%", left: "50%",
      transform: "translate(-50%, -60%)",
      filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.4))",
    }}>
      <svg width="18" height="22" viewBox="0 0 24 30">
        <path d="M12 0C7.16 0 3.2 3.96 3.2 8.8c0 7.7 8.8 16.2 8.8 16.2s8.8-8.5 8.8-16.2C20.8 3.96 16.84 0 12 0z" fill="#3b82f6"/>
        <circle cx="12" cy="9" r="3.5" fill="white"/>
      </svg>
    </div>
  );
}

function MapAvatar({ lat, lng }) {
  return (
    <div style={{
      width: 46, height: 46,
      borderRadius: "50%",
      overflow: "hidden",
      flexShrink: 0,
      position: "relative",
      border: "1.5px solid #e2e8f0",
    }}>
      <img
        src={mapUrl(lat, lng)}
        alt="mapa"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        crossOrigin="anonymous"
      />
      <PinOverlay />
    </div>
  );
}

function ProofPill({ ev }) {
  const [phase, setPhase] = useState("enter");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("visible"), SLIDE_IN_MS);
    const t2 = setTimeout(() => setPhase("exit"), SLIDE_IN_MS + VISIBLE_MS);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const opacity   = phase === "visible" ? 1 : 0;
  const transform = phase === "enter"
    ? "translateX(-120px)"
    : phase === "exit"
    ? "translateX(-120px)"
    : "translateX(0)";

  return (
    <div style={{
      opacity,
      transform,
      transition: `opacity ${SLIDE_IN_MS}ms ease, transform ${SLIDE_IN_MS}ms ease`,
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "#ffffff",
      borderRadius: 999,
      padding: "8px 20px 8px 8px",
      boxShadow: "0 2px 20px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.06)",
      whiteSpace: "nowrap",
      pointerEvents: "none",
      userSelect: "none",
      fontFamily: FONT,
    }}>
      <MapAvatar lat={ev.lat} lng={ev.lng} />
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <div style={{ fontSize: 14, lineHeight: "1.4", color: "#0f0f0f" }}>
          <span style={{ fontWeight: 700 }}>{ev.name}</span>
          <span style={{ fontWeight: 400, color: "#555" }}> de </span>
          <span style={{ fontWeight: 700 }}>{ev.city}</span>
        </div>
        <div style={{ fontSize: 13, fontWeight: 400, color: "#6b7280", lineHeight: "1.35" }}>
          {ev.action}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 1 }}>
          <span style={{ fontSize: 12, color: "#9ca3af", fontWeight: 400 }}>{ev.ago}</span>
          <VerifiedIcon />
          <span style={{ fontSize: 12, color: "#3b82f6", fontWeight: 600 }}>Verificado por Proof</span>
        </div>
      </div>
    </div>
  );
}

export default function ProofTicker() {
  useFontInject();

  const [pill, setPill] = useState(null);
  const idxRef = useRef(0);
  const keyRef = useRef(0);

  const spawn = () => {
    const ev  = EVENTS[idxRef.current % EVENTS.length];
    const key = keyRef.current++;
    idxRef.current++;
    setPill({ ev, key });
    setTimeout(() => setPill(null), TOTAL_MS);
  };

  useEffect(() => {
    spawn();
    const id = setInterval(spawn, NEXT_DELAY);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{
      position: "fixed",
      bottom: 24,
      left: 24,
      zIndex: 9999,
      pointerEvents: "none",
      overflow: "hidden",
    }}>
      {pill && <ProofPill key={pill.key} ev={pill.ev} />}
    </div>
  );
}
