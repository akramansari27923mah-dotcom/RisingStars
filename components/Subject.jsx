
import { subjects } from "@/data/allLinks";
import Image from "next/image";

const Subjects = () => {
  return (
    <section className="py-24" id="subject">
      <div className="mx-auto max-w-7xl px-6">
    
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Our Subjects
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Explore Popular Subjects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover expert-led courses designed to help students build
            knowledge and confidence across a variety of subjects.
          </p>
        </div>

    
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => {
            const Icon = subject.icon;

            return (
              <div
                key={subject.title}
                className="group rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={` flex  items-center justify-center rounded-t-xl overflow-hidden`}
                >
                  <Image 
                  src={subject?.icon}
                  width={600}
                  height={600}
                  alt={subject.title}
                  loading="lazy"
                  />
                </div>

                <div className="p-5">

                <h3 className="text-xl font-semibold text-gray-900">
                  {subject.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {subject.description}
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

export default Subjects;