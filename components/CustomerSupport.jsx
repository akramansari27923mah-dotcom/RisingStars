'use client'

import { Bot, CircleChevronRight, GraduationCap, LoaderCircle, Send } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { allApis } from '@/lib/handelApis'
import ChatMarkdownSupport from './MarkDownSupport'

const CustomerSupport = () => {

    const [open, setOpen] = useState('0px')
    const {handelGroqApi} = allApis()
    const [message, setMessage] = useState([])
    const [prompt, setPrompt] = useState('')
    const [loading, setLoading] = useState(false)
    const messageEndRef = useRef(null)


    const sendMessage = async() => {
        if(!prompt.trim()) return
        setLoading(true)
        setPrompt('')
        setMessage((prev) => [
            ...prev,
            {
                role: "user",
                content: prompt
            }
            ])
        try{
            const res = await handelGroqApi(prompt)
              setMessage((prev) => [
            ...prev,
            {
                role: "ai",
                content: res
            }
            ])
        }
        catch(err){
            console.error(err.message)
              setMessage((prev) => [
            ...prev,
            {
                role: "ai",
                content: err.message
             }
            ])
        }
        finally{
            setPrompt('')
            setLoading(false)
        }
    }

    useEffect(() => {
        messageEndRef?.current?.scrollIntoView({
            behavior: "smooth"
        })
    }, [message])

    const handelKeyDown = (e) => {
        if(e.key === "Enter" && !e.shiftkey){
            e.preventDefault()
            sendMessage()
        }
    }

  return (
    <>
        {
            open === '448px' && (
        <div className='w-full fixed top-0 right-0 h-screen bg-black/10 backdrop-blur-md transition-all duration-300 z-50'>
        </div>
            )
        }

        <div className='fixed top-0 right-0 w-full  h-screen bg-white shadow z-90 transition-all duration-300' style={{maxWidth: open }}>

            <div className='h-18 border-b flex justify-between items-center p-4'>
                 <div href="/" className="flex items-center gap-2">
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
                </div>

                 <button onClick={() => setOpen('0px')} className='w-8 h-8 bg-gray-400 border border-gray-200 cursor-pointer flex justify-center items-center rounded-md'>
                <CircleChevronRight />
            </button>

            </div>

            <div className='w-full md:h-125 h-152 overflow-scroll hide-scroll border-b p-2'>
                <div className="flex flex-col gap-4 p-5 overflow-y-auto">
                    {message.map((msg, ind) => (
                        <div
                        key={ind}
                        className={`flex items-end gap-2 ${
                            msg?.role === "user" ? "justify-end" : "justify-start"
                        }`}
                        >
                        
                        {msg?.role !== "user" && (
                            <div className="w-10 h-10 rounded-full bg-linear-to-r from-violet-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-md">
                            AI
                            </div>
                        )}

      
                    <div
                        className={`max-w-[75%] rounded-2xl px-4 py-2
                             shadow-lg transition-all duration-300 hover:scale-[1.02] 
                        ${
                        msg?.role === "user"
                            ? "bg-blue-600 text-white rounded-br-md "
                            : "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 rounded-bl-md"
                        }`}
                    >
                        <p className="leading-7 whitespace-pre-wrap"><ChatMarkdownSupport content={msg?.content} />
                            <div ref={messageEndRef}></div>
                        </p>

                        <span
                        className={`mt-2 block text-[11px] ${
                            msg?.role === "user"
                            ? "text-blue-100"
                            : "text-zinc-400"
                        }`}
                        >
                        {new Date().toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                        </span>
                    </div>

    
                    {msg?.role === "user" && (
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                        U
                        </div>
                    )}
        </div>
             ))}

                {
                    loading && (
                        <div className='flex items-center gap-1 text-gray-400 animate-pulse'>
                            <LoaderCircle size={18} className='animate-spin' />
                            <span className='italic tracking-wide'>Loading...</span>
                        </div>
                    )
                }
            </div>

            </div>

            <div className='flex justify-between items-center h-18 p-3'>
                <input onKeyDown={handelKeyDown} onChange={(e) => setPrompt(e?.target?.value)} value={prompt} type="text" className='p-4 rounded-full pr-12 w-full relative bg-white placeholder:text-gray-400 outline-none border border-gray-300 focus:border-gray-400 text-black text-sm' placeholder='Ask anything about us...' />

                {
                    open === '448px' && (    
                        <button disabled={loading || !prompt.trim()} onClick={sendMessage} className='w-9 h-9 bg-blue-500 text-white fixed right-5 rounded-full flex justify-center items-center cursor-pointer disabled:cursor-not-allowed'>
                            <Send size={18} />
                        </button>
                    )
                }
            </div>

        </div>

        <div onClick={() => setOpen('448px')} className='w-15 h-15 rounded-full bg-black/50 backdrop-blur-md flex justify-center items-center fixed bottom-3 right-3 hover:cursor-pointer'>
            <Bot size={30} />
        </div>
    </>
  )
}

export default CustomerSupport