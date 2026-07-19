"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap, PhoneCall, Phone, PhoneOff } from "lucide-react";
import { navLinks } from "@/data/allLinks";
import { FaPhoneAlt } from "react-icons/fa";



 const Navbar = () => {
  const [open, setOpen] = useState('0%');
  const [calling, setCalling] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200/40 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-xl bg-blue-600 p-2 text-white">
            <GraduationCap size={24} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Learn<span className="text-blue-600">axo</span>
            </h2>
            <p className="text-xs text-gray-500">
              Learn Without Limits
            </p>
          </div>
        </Link>


        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        
        <div className="hidden md:block lg:flex justify-center items-center gap-3 ">
          <button
            onClick={() => setCalling(!calling)}
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 cursor-pointer"
          >
            {
              calling ? <X size={15} /> : 
              <FaPhoneAlt />
            }
          </button>
          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Enroll Now
          </Link>
        </div>


        <button
          className="md:hidden text-indigo-500 shadow-indigo-300 hover:scale-105 transition-all duration-300 active:scale-100 cursor-pointer"
        >
          {<Menu size={28}  onClick={() => setOpen("100%")} />}
        </button>

            {
              calling && (
            <div className="absolute md:top-70 top-55 left-30 md:left-150 bg-white shadow p-3 rounded-2xl">
              <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <PhoneCall
                    className="h-6 w-6 text-green-600" />
                  </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Free Consultation</h3>
                  <p className="text-sm text-gray-500">Talk to our expert</p>
                </div>
              </div>

              <Link  href="tel:+918738022232" className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2 font-medium text-white transition hover:bg-[#1DA851] cursor-pointer">
                <Phone size={18} />
                Call Now
              </Link>
              <button onClick={() => setCalling(false)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 py-2 font-medium text-white transition hover:bg-red-400 cursor-pointer">
                <PhoneOff size={18}/>
                Cancel
              </button>
            </div>

              )
            }
          </div>

      
          {/* for mobile */}
        <div className={`border-t absolute top-0 transition-all duration-300 left-0 h-screen overflow-hidden bg-white md:hidden`} style={{width: open}}>
          <nav className="flex flex-col p-4 gap-4">

           <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="rounded-xl bg-blue-600 p-2 text-white">
                    <GraduationCap size={24} />
                </div>

                <div>
                    <h2 className="text-xl font-bold text-gray-900">
                    Rising<span className="text-blue-600">Stars</span>
                    </h2>
                    <p className="text-xs text-gray-500">
                    Learn Without Limits
                    </p>
                 </div>
           </div >
            <X onClick={() => setOpen("0%")} className=" text-indigo-500 shadow-indigo-300 hover:scale-105 transition-all duration-300 active:scale-100 cursor-pointer" />
            </div>

            {navLinks?.map((item) => (
              <Link
                key={item?.name}
                href={item?.href}
                onClick={() => setOpen("0%")}
                className="rounded-lg px-4 py-3 text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {item?.name}
              </Link>
            ))}

            <div className="flex flex-col justify-center gap-5">
               <button
            onClick={() =>{ setCalling(!calling) , setOpen("0%")}}
            className="rounded-full bg-blue-600 w-fit px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            {
              calling ? <X size={15} /> : 
              <FaPhoneAlt onClick={() => setOpen("0%")} />
            }
          </button>
          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Enroll Now
          </Link>
            </div>
          </nav>
        </div>
    </header>
  );
}

export default Navbar