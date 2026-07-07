import {
  Headphones,
  CalendarDays,
  BadgeHelp,
  Users,
  Radio,
} from "lucide-react";
import BarPropress from "./animation";
export default function RevenueCardsSection({ onCtaClick }) {
  const services = [
    {
      icon: Headphones,
      title: "AI Receptionist",
      description: "24/7 AI call handling for SMBs.",
      price: "$180–350",
    },
    {
      icon: CalendarDays,
      title: "AI Appointment Booking",
      description: "Automated booking for clinics & service businesses.",
      price: "$220–480",
    },
    {
      icon: BadgeHelp,
      title: "AI Customer Support",
      description: "Deflect repetitive support calls automatically.",
      price: "$300–700",
    },
    {
      icon: Users,
      title: "AI Lead Qualification",
      description: "Qualify inbound leads using AI voice agents.",
      price: "$400–900",
    },
    {
      icon: Radio,
      title: "AI Voice Campaigns",
      description: "Outbound reminders, follow-ups & reactivation calls.",
      price: "$500–1,200",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black">
            Your Existing PBX Clients
            <br />
            <span className="text-[#1565F7]">
              Could Already Be Paying
            </span>{" "}
            You More.
          </h2>

          <p className="mt-6 text-gray-500 text-sm md:text-base">
            Traditional PBX margins are shrinking. AI voice services are where
            telecom providers are adding new recurring revenue fast.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 min-h-[220px] transition-all duration-300 hover:shadow-lg"
              >
                <Icon
                  size={28}
                  className="text-black mb-5"
                  strokeWidth={1.5}
                />

                <h3 className="font-semibold text-black text-sm">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed mt-3">
                  {service.description}
                </p>

                <div className="mt-6">
                  <div className="text-[#1565F7] text-xl font-bold">
                    {service.price}
                  </div>

                  <div className="text-[10px] text-gray-500 uppercase mt-1">
                    MRR / Client
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            type="button"
            onClick={onCtaClick}
            className="bg-[#1565F7] hover:bg-blue-700 transition-all duration-300 text-white font-semibold text-xl px-12 py-5 rounded-xl shadow-[0_0_40px_rgba(21,101,247,0.45)]"
          >
            Start Monetizing AI Voice Show Me
          </button>

          <div className="mt-6 flex justify-center items-center gap-2 text-xs font-medium uppercase">
            <span className="text-[#1565F7] text-lg">•</span>
            <span className="text-gray-700">
              AI-First Competitors Are Already Targeting Your Accounts
            </span>
          </div>

          {/* Availability Indicator */}
         <BarPropress/>
        </div>
      </div>
    </section>
  );
}
