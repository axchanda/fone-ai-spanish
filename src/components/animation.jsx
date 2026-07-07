import { useEffect, useRef, useState } from "react";

export default function AIOnboardingSlots() {
  const TOTAL_SLOTS = 15;
  const OCCUPIED_SLOTS = 12;

  const [occupied, setOccupied] = useState(0);
  const [available, setAvailable] = useState(TOTAL_SLOTS);

  const containerRef = useRef(null);

  useEffect(() => {
    const slots = containerRef.current?.querySelectorAll(".ai-slot");
    if (!slots?.length) return;

    let played = false;

    const animateSlots = () => {
      if (played) return;
      played = true;

      slots.forEach((slot, index) => {
        if (index >= OCCUPIED_SLOTS) return;

        setTimeout(() => {
          slot.classList.add("filling");

          setTimeout(() => {
            slot.classList.remove("filling");
            slot.classList.remove(
              "from-emerald-400",
              "to-emerald-600"
            );

            slot.classList.add(
              "from-red-500",
              "to-pink-600"
            );

            setOccupied((prev) => prev + 1);
            setAvailable((prev) => prev - 1);
          }, 600);
        }, index * 250);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateSlots();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-2 text-center">
      {/* Heading */}
      

      {/* AI Slots */}
      <div className="mt-6 w-full">
        <div
          ref={containerRef}
          className="flex flex-wrap justify-center gap-2 w-full px-4"
        >
          {Array.from({ length: TOTAL_SLOTS }).map((_, i) => (
         <div
  key={i}
  className="
    ai-slot
    w-6 h-6
    rounded-md
    bg-gradient-to-br
    from-emerald-400
    to-emerald-600
    flex items-center justify-center
    shrink-0
    text-[10px]
  "
>
 <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-3 h-3 text-white"
>
  <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
</svg>
</div>
          ))}
        </div>
      </div>

      {/* Counter */}
      <div className="mt-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">
          <span className="text-cyan-400 font-bold text-sm">
            {available} Available
          </span>

          <span className="text-slate-500">•</span>

          <span className="text-red-400 font-semibold text-sm">
            {occupied} Occupied
          </span>
        </div>
      </div>

      

      <style>{`
        .filling {
          animation: aiFill .6s cubic-bezier(.34,1.56,.64,1) forwards;
        }

        @keyframes aiFill {
          0% {
            transform: scale(1);
          }
          50% {
            background: #f59e0b;
            transform: scale(1.15);
          }
          100% {
            background: #dc2626;
            transform: scale(1);
          }
        }

        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }

        .overflow-x-auto {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </section>
  );
}