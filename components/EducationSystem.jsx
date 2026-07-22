import { boards } from "@/data/allLinks";
import Image from "next/image";

const EducationBoards = () => {
  return (
    <section className="py-24" id="EducationBoards">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Education Boards
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            We Teach All Major Boards
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Our experienced teachers provide structured learning for students
            from CBSE, ICSE, and UP Board with personalized guidance and
            exam-oriented preparation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {boards.map((board) => {
            const Icon = board.icon;

            return (
              <div
                key={board.title}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`flex items-center justify-center rounded-t-2xl overflow-hidden`}
                >
                 <Image 
                 src={board?.icon}
                 alt={board.title}
                 width={600}
                 height={600}
                 />
                </div>

              <div className="p-5">
                <h3 className=" text-2xl font-semibold text-gray-900">
                  {board.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {board.description}
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

export default EducationBoards;