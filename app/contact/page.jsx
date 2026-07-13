import ContactPage from '@/components/Contact'
import React from 'react'

export const metadata = {
  title: "Contact Us | Online learning platform",
  description:
    "Get in touch with RisingStars Online learning platform. Have questions about our courses, admissions, or services? Contact us via our form, email, or phone—we're here to help.",
  keywords: [
    "RisingStars Online learning platform",
    "Contact RisingStars",
    "Education Contact",
    "Online Learning",
    "Admissions",
    "Student Support",
    "Contact Form",
    "Education Website",
  ],
  authors: [{ name: "RisingStars Online learning platform" }],
  creator: "RisingStars Online learning platform",
  publisher: "RisingStars Online learning platform",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Us | RisingStars Online learning platform",
    description:
      "Reach out to RisingStars Online learning platform for course inquiries, admissions, student support, and more.",
    url: "https://your-domain.com/contact",
    siteName: "RisingStars Education",
    images: [
      {
        url: "/contact.png", // Replace with your Open Graph image
        width: 1200,
        height: 630,
        alt: "RisingStars Online learning platform Contact",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const Contact = () => {
  return (
    <div>
        <ContactPage />
    </div>
  )
}

export default Contact