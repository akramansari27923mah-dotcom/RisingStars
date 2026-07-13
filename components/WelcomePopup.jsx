"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("risingstars-visited");

    if (!hasVisited) {
      setTimeout(() => {
        setOpen(true);
      }, 1000);

      sessionStorage.setItem("risingstars-visited", "true");
    }
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center text-black bg-black/60 backdrop-blur-sm p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl flex flex-col justify-center items-center"
            initial={{ scale: 0.7, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.7 }}
            transition={{ duration: 0.35 }}
          >
            <h2 className="md:text-3xl text-xl font-bold">
              🎉 Welcome to RisingStars
            </h2>

            <p className="mt-4 text-gray-600 text-center tracking-widest">
              Start your learning journey with expert teachers, interactive
              courses, and personalized guidance.
            </p>

            <div className="mt-8 flex gap-3">
              <Link
                href="/contact"
                className="rounded-lg bg-blue-600 px-5 py-3 cursor-pointer text-white hover:bg-blue-700"
              >
                Contact Us
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="rounded-lg border px-5 py-3 cursor-pointer hover:bg-gray-100"
              >
                Maybe Later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}