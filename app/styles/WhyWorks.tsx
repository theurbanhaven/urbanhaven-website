export default function WhyWorks() {
  const benefits = [
    {
      title: "Your Dedicated Style Advisor",
      description: "+ 3D renders to visualize your space before we begin"
    },
    {
      title: "Transparent Quote",
      description: "Before you commit, know exactly what you're getting"
    },
    {
      title: "In-House Team Control",
      description: "Every stage managed by our expert craftspeople"
    },
    {
      title: "10-Year Warranty",
      description: "Quality workmanship backed by our commitment"
    },
    {
      title: "Curated Materials",
      description: "Suited to your budget and your style"
    },
    {
      title: "Expert Execution",
      description: "From concept to completion with precision"
    }
  ];

  return (
    <section className="w-full py-8 sm:py-8 md:py-12 lg:py-16 px-6 flex justify-center">
      <div className="max-w-[1100px] w-full text-center">
        <h2 className="heading2-style">Why Our Style Guidance Works</h2>
        <div className="justify-center text-[#495057] text-sm md:text-sm lg:text-lg font-normal font-['Poppins'] leading-[29.25px] mt-6">
          At UrbanHaven we don't just apply styles — we help you find your
          style, then execute it with
          <br />
          precision. With in-house craftsmanship, transparent pricing and a
          commitment to quality, your
          <br />
          home gets the design it deserves.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 mt-12">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="p-[26px] bg-white rounded-xl shadow-md border border-gray-200 text-left hover:scale-105"
            >
              <h3 className="text-xl font-semibold font-['Poppins'] leading-7 text-[#0f0f0f] mb-2">
                {item.title}
              </h3>
              <p className="text-[#666666] text-base font-normal font-['Poppins'] leading-[26px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="self-stretch text-center justify-center py-6 sm:py-6 md:py-12 lg:py-16">
          {/* SAME FIX APPLIED HERE TOO */}
          <p className="text-[#495057] text-sm sm:text-sm md:text-sm lg:text-xl font-normal font-['Poppins'] leading-7 max-w-full text-center">
            At UrbanHaven, we believe your home's style should reflect
            <span className="font-bold"> you</span>. Whether you lean
            minimalist, rustic, modern or eclectic — our in-house design team
            will bring it to life. Browse the styles below, discover what
            resonates, and find the one that fits your home, your taste and your
            budget.
          </p>
        </div>
      </div>
    </section>
  );
}
