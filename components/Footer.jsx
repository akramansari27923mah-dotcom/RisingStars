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
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        <div>
          <div className="flex items-center gap-3">

            <div>
               <Link href="/" className="flex items-center gap-2">
         <div className="group relative overflow-hidden rounded-xl">
             <Image
  src="/logo.png"
  width={48}
  height={48}
  alt="Learnaxo Logo"
  priority
  className="
    rounded-xl
    border border-blue-400/30
    bg-white
    p-1
    shadow-lg shadow-blue-500/20
    transition-all duration-300 ease-in-out
    hover:scale-110
    hover:rotate-3
    hover:shadow-xl hover:shadow-blue-500/40
    hover:border-blue-500
  "
/>

            <span
              className="
                absolute 
                inset-0
                -translate-x-full
                bg-linear-to-r
                from-transparent
                via-white/50
                to-transparent
                group-hover:translate-x-full
                transition-transform
                duration-800
              "
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-100">
              Learn<span className="text-blue-600">axo</span>
              
            </h2>
            <p className="text-xs text-gray-500">
              Learn Without Limits
            </p>
          </div>
        </Link>
              <p className="text-sm text-gray-400 mt-2">
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
              <span>officiallearnaxo@gmail.com</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-blue-400" />
              <span>Ghazipur, Uttar Pradesh, India</span>
            </div>

    
            <div className="mt-6 flex gap-4">
              {/* <Link
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
              </Link> */}

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
            © {new Date().getFullYear()}  <h2 className="text-xl font-bold inline text-gray-100">
              Learn<span className="text-blue-600">axo</span>
              
            </h2> . All rights
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