import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-600 p-2 text-white">
              <GraduationCap size={24} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">
                Bright Future Academy
              </h2>
              <p className="text-sm text-gray-400">
                Learn • Grow • Succeed
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-gray-400">
            We provide quality online education with expert teachers,
            personalized guidance, and interactive classes for students from
            Primary to High School.
          </p>
        </div>

    
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li><Link href="/">Home</Link></li>
            {/* <li><Link href="/about">About</Link></li> */}
            {/* <li><Link href="/courses">Courses</Link></li> */}
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Courses
          </h3>

          <ul className="space-y-3">
            <li>Mathematics</li>
            <li>Science</li>
            <li>Physics</li>
            <li>English</li>
            <li>Chemistry</li>
          </ul>
        </div>

        
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Contact Us
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-blue-400" />
              <span>+91 87380 22232</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400" />
              <span>arman252412@gmail.com</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-blue-400" />
              <span>Ghazipur, Uttar Pradesh, India</span>
            </div>

    
            <div className="mt-6 flex gap-4">
              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-pink-600"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-red-600"
              >
                <FaYoutube />
              </Link>

              <Link
                href="https://wa.me/918738022232"
                target="_blank"
                className="rounded-full bg-[#25D366] p-3 text-white transition hover:bg-[#1DA851]"
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} Bright Future Academy. All rights
            reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;