"use client";

import { useState, useRef } from "react";
import { LoaderCircle, ShieldCheck } from "lucide-react";
import { api } from "@/lib/axios";
import { showError, showSuccess } from "@/lib/toaster";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function VerifyOTP() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const route = useRouter()

  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pasted = e.clipboardData.getData("text").slice(0, 6);

    if (!/^\d+$/.test(pasted)) return;

    const values = pasted.split("");

    const newOtp = [...otp];

    values.forEach((digit, index) => {
      newOtp[index] = digit;
    });

    setOtp(newOtp);
  };

  const handleSubmit = async () => {
    const code = otp.join("");

    if (code.length !== 6) {
      alert("Please enter all 6 digits.");
      return;
    }

    try {
      setLoading(true);
      const {data} = await api.post('/emailVerification', {code})
        if(data.success){
            showSuccess('Form Registered Successfully')
            route.push('/')
        }
    } 
    catch(err){
        console.log(err.response.data.success);
        if(!err?.response?.data?.success){
            showError('Invalid Opt')
        }
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">

        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <ShieldCheck className="text-blue-600" size={32} />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mt-5 text-black">
          Verify OTP
        </h2>

        <p className="text-center text-gray-500 mt-2 text-sm">
          Enter the 6-digit verification code sent to your email.
        </p>

        <div
          className="flex justify-center gap-3 mt-8"
          onPaste={handlePaste}
        >
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-14 border rounded-lg text-gray-600 text-center text-xl font-bold outline-none focus:border-blue-500"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex justify-center items-center gap-2 transition"
        >
          {loading ? (
            <>
              <LoaderCircle className="animate-spin" size={20} />
              Verifying...
            </>
          ) : (
            "Verify OTP"
          )}
        </button>

        <p className="text-center text-gray-500 text-sm mt-6">
          Didn&apos;t receive the code?
        </p>

        <Link
        href={'/resendotp'}
          className="w-full mt-2 flex justify-center items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          Resend OTP
        </Link>

      </div>

    </div>
  );
}