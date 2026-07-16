"use client"
import { CircleChevronLeft, LoaderCircle, Mail, Send } from 'lucide-react'
import React, { useState } from 'react'
import { allApis } from '@/lib/handelApis'
import { BsBack } from 'react-icons/bs'
import Link from 'next/link'

const ContactPage = () => {

  const model = {
    fullname: "",
    email: "",
    phone: "",
    subject: "",
    message: ""

  }

  const [formData, setFormData] = useState(model)
  const [loader, setLoader] = useState(false)
  const {handelForm} = allApis()

  const handelInput = (e) => {
    const {value, name} = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handelSubmit = (e) => {
    e.preventDefault()
     handelForm(formData, setFormData,model, setLoader)  
  }

  return (
   <div className='flex justify-center items-center h-screen bg-gray-100'>

    <Link href={'/'} className='absolute top-5 left-5 flex justify-center items-center gap-2 cursor-pointer hover:scale-105 transition-all duration-300 border border-gray-200 bg-white text-black px-4 py-2 rounded-2xl shadow  hover:bg-white/80'>
      <CircleChevronLeft size={18} />
        <span>
        Back
        </span>
      </Link>

    <div className='shadow p-5 rounded-2xl text-black bg-white w-full max-w-2xl flex flex-col justify-center items-center gap-5'>
      
      <div className='flex  justify-center items-center gap-3'>
        <div className='w-15 h-15 bg-gray-100 rounded-full text-blue-500 flex justify-center items-center'>
          
          <Mail size={30} />
        </div>
          <div>
            <h1 className='text-2xl font-bold'>Contact Us</h1>
            <p className='text-xs text-gray-600'>we`d like to here you! send us a message</p>
          </div>
      </div>
      
      <form className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5 w-full text-sm' onSubmit={handelSubmit}>

        <div className='flex flex-col justify-center gap-1'>
          <label className='text-sm font-semibold'>Full Name</label>
          <input onChange={handelInput} value={formData.fullname} name='fullname' type="text" className='px-4 py-2 focus:border-gray-500  outline-none rounded-sm w-full border border-gray-300 ' placeholder='Enter your full name ' />
        </div>

        <div className='flex flex-col justify-center gap-1'>
          <label className='text-sm font-semibold'>Email Address</label>
          <input onChange={handelInput} value={formData.email} name='email' type="text" className='px-4 py-2 focus:border-gray-500  placeholder:text-sm outline-none rounded-sm w-full border border-gray-300 ' placeholder='Enter your full name ' />
        </div>

        <div className='flex flex-col justify-center gap-1'>
          <label className='text-sm font-semibold'>Phone Number(Optional)</label>
          <input onChange={handelInput} value={formData.phone} name='phone' type="number" className='px-4 py-2 focus:border-gray-500 placeholder:text-sm  outline-none rounded-sm w-full border border-gray-300 ' placeholder='Enter your Number ' />
        </div>

        <div className='flex flex-col justify-center gap-1'>
          <label className='text-sm font-semibold'>Subject</label>
          <input onChange={handelInput} name='subject'  value={formData.subject} type="text" className='px-4 py-2 focus:border-gray-500 placeholder:text-sm  outline-none rounded-sm w-full border border-gray-300 ' placeholder='Enter your subject' />
        </div>

        <div className='flex flex-col justify-center md:col-span-2 gap-1'>
          <label className='text-sm font-semibold'>Message</label>
          <textarea onChange={handelInput} name='message' value={formData.message} rows={4} className='px-4 py-2 focus:border-gray-500 placeholder:text-sm  outline-none rounded-sm w-full border border-gray-300 ' placeholder='Write your message here... ' />
        </div>

        <button className='flex justify-center items-center cursor-pointer gap-3 bg-blue-500 md:col-span-2 py-2 rounded-sm text-white hover:scale-105 active:scale-100 transition-all duration-300'>
          {
            !loader ? (
              <>
          <Send size={18} />
          <span>
            Send
          </span>
              </>
            ) : 
            (
              <>
          <LoaderCircle className='animate-spin' size={18} />
          <span className='tracking-wider'>
            Sending...
          </span>
              </>
            )
          }
        </button>
      </form>

      {/* <div>
        support
      </div> */}
    </div> 
   </div>
  )
}

export default ContactPage