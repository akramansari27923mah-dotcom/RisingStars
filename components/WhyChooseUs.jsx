import { features } from "@/data/allLinks";
import Image from "next/image";

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

            return (
              <div
                             key={feature.title}
                             className="group rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                           >
                             <div
                               className={` flex  items-center justify-center rounded-t-xl overflow-hidden`}
                             >
                               <Image 
                               src={feature?.icon}
                               width={600}
                               height={600}
                               alt={feature.title}
                               />
                             </div>
             
                             <div className="p-5">
             
                             <h3 className="text-xl font-semibold text-gray-900">
                               {feature.title}
                             </h3>
             
                             <p className="mt-3 text-gray-600">
                               {feature.description}
                             </p>
                             </div>
                             
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;