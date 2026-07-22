import Image from "next/image";
import { framework } from "@/data/allLinks";


const StudyFramework = () => {
  return (
    <section className="py-24" id="OurStudyFramework">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Our Study Framework
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            A Simple Path to Academic Success
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Our structured learning approach helps students understand concepts,
            practice consistently, evaluate progress, and achieve excellent
            results.
          </p>
        </div>

        
        <div className="grid gap-8 md:grid-cols-4">
          {framework.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="relative rounded-2xl border bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className=" flex items-center justify-center overflow-hidden  rounded-t-2xl bg-blue-100 text-blue-600">
                  <Image 
                  src={item.icon}
                  alt={item.title}
                  width={600}
                  height={600}
                  loading="lazy"
                  />
                </div>

              <div className="p-5">

                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.description}
                </p>

            
                {item.title !== "Achieve Success" && (
                  <span className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-4xl text-blue-300 lg:block">
                    →
                  </span>
                )}
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudyFramework;