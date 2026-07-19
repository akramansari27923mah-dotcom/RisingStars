import ContactPage from '@/components/Contact'
import React from 'react'

export const metadata = {
  title: "Contact Us | Learnaxo learning platform",
  description:
    "Get in touch with Learnaxo Online learning platform. Have questions about our courses, admissions, or services? Contact us via our form, email, or phone—we're here to help.",
  keywords: [
    "Learnaxo Online learning platform",
    "Contact Learnaxo",
    "Education Contact",
    "Online Learning",
    "Admissions",
    "Student Support",
    "Contact Form",
    "Education Website",
  ],
  authors: [{ name: "Learnaxo Online learning platform" }],
  creator: "Learnaxo Online learning platform",
  publisher: "Learnaxo Online learning platform",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Us | Learnaxo Online learning platform",
    description:
      "Reach out to Learnaxo Online learning platform for course inquiries, admissions, student support, and more.",
    url: "https://www.Learnaxo.com/contact",
    siteName: "Learnaxo Education",
    images: [
      {
        url: "/contact.png", // Replace with your Open Graph image
        width: 1200,
        height: 630,
        alt: "Learnaxo Online learning platform Contact",
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