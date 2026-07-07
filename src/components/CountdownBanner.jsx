import { useEffect, useState } from "react";

export default function CountdownBanner({ onCtaClick }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 10,
    minutes: 28,
    seconds: 28,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-14 rounded-xl bg-[#1c2230] border border-[#2d3648] flex items-center justify-center text-white text-3xl font-bold">
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-[10px] text-gray-400 mt-1 tracking-wider uppercase">
        {label}
      </span>
    </div>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-black border-b border-[#10233c]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
        {/* Texto Izquierdo */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <div className="relative">
            <span className="block w-5 h-5 rounded-full bg-red-600"></span>
            <span className="absolute top-0 left-0 w-5 h-5 rounded-full bg-red-500 animate-ping"></span>
          </div>

          <span className="text-gray-400 font-semibold uppercase tracking-wider text-lg">
            Cupos de Demo Cerrando En:
          </span>
        </div>

        {/* Temporizador */}
        <div className="flex items-start gap-2">
          <TimeBox value={timeLeft.hours} label="HRS" />

          <div className="text-white text-3xl font-bold mt-2">:</div>

          <TimeBox value={timeLeft.minutes} label="MIN" />

          <div className="text-white text-3xl font-bold mt-2">:</div>

          <TimeBox value={timeLeft.seconds} label="SEG" />
        </div>

        {/* Texto de Cupos */}
        <div className="text-white text-lg whitespace-nowrap">
          Solo{" "}
          <span className="text-orange-500 font-bold">3 cupos</span>{" "}
          disponibles este mes
        </div>

        {/* Botón */}
        <button
          type="button"
          onClick={onCtaClick}
          className="bg-blue-600 hover:bg-blue-700 transition-all px-8 py-3 rounded-xl text-white font-semibold whitespace-nowrap"
        >
          Reservar Mi Cupo →
        </button>
      </div>
    </div>
  );
}