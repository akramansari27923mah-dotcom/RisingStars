"use client";

import { api } from "@/lib/axios";
import { information, showError } from "@/lib/toaster";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResendOtp() {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false)
  const route = useRouter()

  const handleResendOtp = async (e) => {
    e.preventDefault();

    try{
        setLoader(true)
        const {data} = await api.post("/resendotp", {email})
        if(data.success){
            information('Check your email')
            route.push('/verification')
        }
    }
    catch(err){
        console.log(err.message)
        if(!err.response.data.success){
            showError('Email is not found!')
        }
    }
    finally{
        setLoader(false)
    }

  };

  return (
    <div className="flex min-h-screen items-center justify-center text-black bg-gray-100 px-4">
      <form
        onSubmit={handleResendOtp}
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg"
      >
        <h1 className="mb-2 text-center text-2xl font-bold">
          Resend OTP
        </h1>

        <p className="mb-6 text-center text-sm text-gray-500">
          Enter your registered email to receive a new verification code.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          {
            !loader ? "Resend OTP" : "Resending..."
          }
        </button>
      </form>
    </div>
  );
}