import dashboardImage from "../images/hero.jpg";

export default function DashboardPreview() {
  return (
    <section className="relative z-10 -mt-20 md:-mt-28 lg:-mt-14 pb-10 lg:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="overflow-hidden rounded-[24px] md:rounded-[32px]  border-gray-200">
          <img
            src={dashboardImage}
            alt="Dashboard Preview"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
}