import { features } from "@/data/allLinks";

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-50 py-24" id="WhyChooseUs">
      <div className="mx-auto max-w-7xl px-6">
    
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Everything You Need to Learn & Grow
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We provide high-quality education with experienced teachers,
            flexible learning, and dedicated support to help every student
            achieve success.
          </p>
        </div>

        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features?.map((feature) => {
            const Icon = feature?.icon;

            return (
              <div
                key={feature?.title}
                className="rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-gray-900">
                  {feature?.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {feature?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;