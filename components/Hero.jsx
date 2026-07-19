import Image from "next/image";
import Link from "next/link";
import { ArrowRight, NotebookTabs } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io5";

const HeroSection = () => {
  return (
    <section className="bg-linear-to-br from-blue-50 to-white mt-8">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-12 px-6 py-20 lg:flex-row">
        
        <div className="flex-1 text-center lg:text-left">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
              🎓 Learn Without Limits
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
                Empower Your Child with
                <span className="block text-blue-600">
                Quality Online Education
                </span>
            </h1> 

          <p className="mt-5 max-w-lg text-gray-600">
            Learn from expert teachers through interactive online classes designed to help students succeed academically.
          </p>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          > 
          <NotebookTabs />
          <span>
            Book a free trial
          </span>
            <ArrowRight size={18} />
          </Link>

          <Link
            href="https://wa.me/+918738022232"
            target="_blank"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#209653] px-6 py-3 font-semibold text-white transition hover:bg-green-600 justify-center "
          >
            <IoLogoWhatsapp size={25} />
            <span>
            Chat with our advisor
            </span>
            <ArrowRight size={18} />
          </Link>
        </div>

          <div className="mt-14 grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">10+</h3>
              <p className="text-gray-600">Courses</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">1K+</h3>
              <p className="text-gray-600">Students</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">10+</h3>
              <p className="text-gray-600">Experts</p>
            </div>
          </div>
        </div>

        <div className="flex-1 hover:-translate-y-8 transition-all duration-300 shadow rounded-2xl">
          <Image
            src="/hero.png"
            alt="Online Education"
            width={700}
            height={700}
            priority
            className="mx-auto rounded-3xl"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;