import React, { useEffect, useRef, useState } from "react";

export default function ProgressLoad({ desktopAlign = "start" }) {
  const TOTAL = 20;

  // Animation moves from right to left
  const ANIMATE_INDEXES = [4,5,6];

  // Completed boxes on the left side
  const STATIC_COMPLETED_END = 5;

  const [activeStep, setActiveStep] = useState(-1);
  const containerRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;

          let step = 0;

          const interval = setInterval(() => {
            setActiveStep(step);
            step++;

            if (step === ANIMATE_INDEXES.length) {
              clearInterval(interval);
            }
          }, 350);
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex w-full justify-center bg-transparent py-4 ${
        desktopAlign === "center"
          ? "md:justify-center"
          : "md:justify-center"
      }`}
    >
      <div className="flex gap-[4px] sm:gap-[6px] md:gap-2">
        {Array.from({ length: TOTAL }).map((_, i) => {
          const animatedIndex = ANIMATE_INDEXES[activeStep];

          const isAnimatedActive = i === animatedIndex;
          const isStaticCompleted = i <= STATIC_COMPLETED_END;

          const bgClass =
            isAnimatedActive || isStaticCompleted
              ? "bg-green-500"
              : "bg-[#4A4A4A]";

          const showTick = isAnimatedActive || isStaticCompleted;

          return (
            <div
              key={i}
              className={`
                h-4 w-2 sm:h-6 sm:w-3
                rounded-sm
                flex items-center justify-center
                transition-all duration-300
                ${bgClass}
              `}
            >
              {showTick && (
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}