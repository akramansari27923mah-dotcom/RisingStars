import { grades } from "@/data/allLinks";


const Grades = () => {
  return (
    <section className="bg-slate-50 py-24" id="GradesWeTeach">
      <div className="mx-auto max-w-7xl px-6">
    
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Grades We Teach
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Learning for Every Stage
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We provide quality education for students from Primary School to
            High School with experienced teachers and personalized guidance.
          </p>
        </div>

        
        <div className="grid gap-8 md:grid-cols-3">
          {grades.map((grade) => {
            const Icon = grade.icon;

            return (
              <div
                key={grade.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${grade.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                  {grade.title}
                </h3>

                <span className="mt-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                  {grade.classes}
                </span>

                <p className="mt-4 text-gray-600">
                  {grade.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Grades;