"use client"
import dynamic from 'next/dynamic'
import { CircleChevronLeft, LoaderCircle, Mail, Send } from 'lucide-react'
import React, { useState } from 'react'
import { allApis } from '@/lib/handelApis'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CountrySelect } from 'react-country-state-city'
import "react-country-state-city/dist/react-country-state-city.css";
import "react-phone-number-input/style.css";
import PhoneInput from 'react-phone-number-input'
import { validation } from '@/lib/validation'
import { showError } from '@/lib/toaster'
const TimezoneSelect = dynamic(
  () => import("react-timezone-select"),
  {
    ssr: false,
  }
);


const ContactPage = () => {

  const model = {
    fullname: "",
    age: "",
    country: "",
    school: "",
    grade: "",
    timezone: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    whatsapp : ""
  }

  const [formData, setFormData] = useState(model)
  const [loader, setLoader] = useState(false)
  const {handelForm} = allApis()
  const route = useRouter()

  const handelInput = (e) => {
    const {value, name} = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handelSubmit = (e) => {
    e.preventDefault()
   const err = validation(formData)
      if(err){
        return showError(err)
      }
   
     handelForm(formData, setFormData,model, setLoader)  
     setTimeout(() => {
       route.push('/verification')
     }, 1000)
  }

  return (
   <div className='flex justify-center items-center min-h-screen bg-gray-100'>

    <Link href={'/'} className='fixed top-5 left-5 flex justify-center items-center gap-2 cursor-pointer hover:scale-105 transition-all duration-300 border border-gray-200 bg-white text-black px-4 py-2 rounded-2xl shadow  hover:bg-white/80'>
      <CircleChevronLeft size={18} />
        <span>
        Back
        </span>
      </Link>

   <div className="max-w-7xl mx-auto px-4 sm:px-6 bg-white text-black lg:px-8 py-10 shadow-md m-10 rounded-2xl">

  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-center sm:text-left mb-8">
    <div className="w-16 h-16 bg-gray-100 rounded-full flex justify-center items-center text-blue-500">
      <Mail size={30} />
    </div>

    <div>
      <h1 className="text-2xl md:text-3xl font-bold">
        Contact Us
      </h1>

      <p className="text-sm text-gray-600 mt-1">
        We&apos;d love to hear from you! Send us a message.
      </p>
    </div>
  </div>

  <form
    onSubmit={handelSubmit}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
  >

    
    <div className="flex flex-col gap-1">
      <label className="font-semibold">Full Name</label>

      <input
        type="text"
        name="fullname"
        value={formData.fullname}
        onChange={handelInput}
        placeholder="Enter your full name"
        className="w-full rounded-md border placeholder:text-sm border-gray-400 px-4 py-2 outline-none focus:border-blue-500"
      />
    </div>

  
    <div className="flex flex-col gap-1">
      <label className="font-semibold">Age</label>

      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handelInput}
        placeholder="Enter your age"
        className="w-full rounded-md border placeholder:text-sm border-gray-400 px-4 py-2 outline-none focus:border-blue-500"
      />
    </div>

    <div>
      <label className="block mb-2 font-medium">
        {
          formData.country ? (
            <div>
              <p className='text-sm'>Selected Country :
                {" "} 
                <span className='text-md font-semibold'>
                {formData.country}
                </span>
                </p>
            </div>
          )
          :
        'Select Country'
        }
      </label>

      <CountrySelect
        placeHolder="Choose Country"
        onChange={(country) => setFormData((prev) => ({
          ...prev,
          country: country.name
        }))}
        name='country'
        value={formData.country}
      />
    </div>

  
    <div className="flex flex-col gap-1">
       <label className="font-semibold">Time Zone</label>

    
      <TimezoneSelect
      value={formData.timezone}
      name='timezone'
      onChange={(time) => setFormData((prev) => ({
        ...prev,
        timezone: time || ""
      }))}
      />
    </div>

    
    <div className="flex flex-col gap-1">
      <label className="font-semibold">School</label>

      <input
        type="text"
        name="school"
        value={formData.school}
        onChange={handelInput}
        placeholder="Enter your school"
        className="w-full rounded-md border placeholder:text-sm border-gray-400 px-4 py-2 outline-none focus:border-blue-500"
      />
    </div>

  
    <div className="flex flex-col gap-1">
      <label className="font-semibold">Grade</label>

      <input
        type="text"
        name="grade"
        value={formData.grade}
        onChange={handelInput}
        placeholder="Enter your grade"
        className="w-full rounded-md border placeholder:text-sm border-gray-400 px-4 py-2 outline-none focus:border-blue-500"
      />
    </div>

    
    <div className="flex flex-col gap-1">

  <label>Enter Whatsapp Number</label>

<div className='border border-gray-400 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500'>
     <PhoneInput
      international
      defaultCountry="IN"
      name="whatsapp"
      value={formData.whatsapp}
      onChange={(phone) => setFormData((prev) => ({
      ...prev,
      whatsapp: phone|| ""
      }))}
      placeholder="Enter phone number"
      />
      </div>
    </div>

  
    <div className="flex flex-col gap-1">
      <label className="font-semibold">Email Address</label>

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handelInput}
        placeholder="Enter your email"
        className="w-full rounded-md border placeholder:text-sm border-gray-400 px-4 py-2 outline-none focus:border-blue-500"
      />
    </div>

    
    <div className="flex flex-col gap-1">
      <label>Phone Number (Optional)</label>

      <div className='border border-gray-400 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500'>

     <PhoneInput
      international
      defaultCountry="IN"
      name="phone"
      value={formData.phone}
      onChange={(phones) => setFormData((prev) => ({
      ...prev,
      phone: phones|| ""
      }))}
      placeholder="Enter phone number"
      />
      </div>
    </div>

    
    <div className="flex flex-col gap-1 lg:col-span-3">
      <label className="font-semibold">Subject</label>

      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handelInput}
        placeholder="Enter your subject"
        className="w-full rounded-md border placeholder:text-sm border-gray-400 px-4 py-2 outline-none focus:border-blue-500"
      />
    </div>

    {/* Message */}
    <div className="flex flex-col gap-1 lg:col-span-3">
      <label className="font-semibold">Message</label>

      <textarea
        rows={5}
        name="message"
        value={formData.message}
        onChange={handelInput}
        placeholder="Write your message here..."
        className="w-full rounded-md border placeholder:text-sm border-gray-400 px-4 py-2 outline-none resize-none focus:border-blue-500"
      />
    </div>

    <button
      className="lg:col-span-3 w-full py-3 rounded-md bg-blue-600 text-white flex justify-center items-center gap-2 hover:bg-blue-700 transition cursor-pointer"
    >
      {!loader ? (
        <>
          <Send size={18} />
          <span>Send Message</span>
        </>
      ) : (
        <>
          <LoaderCircle className="animate-spin" size={18} />
          <span>Sending...</span>
        </>
      )}
    </button>

  </form>
</div>
   </div>
  )
}

export default ContactPage