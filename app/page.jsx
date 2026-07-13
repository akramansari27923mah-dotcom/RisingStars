import HomePage from "@/components/Home";
import MainLayout from "@/components/MainLayout";

export const metadata = {
  title: "Rising Stars | Online Learning Platform",
  description:
    "Rising Stars is a modern online education platform offering interactive courses, live classes, expert instructors, and hands-on learning to help students achieve their goals.",

  keywords: [
    "online education",
    "online learning",
    "e-learning",
    "live classes",
    "online courses",
    "education platform",
    "learn online",
    "student learning",
    "video courses",
    "skill development",
    "certification courses",
    "virtual classroom",
    "LearnHub"
  ],

  authors: [{ name: "Rising Stars" }],
  creator: "Rising Stars",
  publisher: "Rising Stars",

  metadataBase: new URL("https://yourdomain.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Rising Stars | Online Learning Platform",
    description:
      "Master new skills with expert-led courses, live classes, and interactive learning experiences.",
    url: "https://yourdomain.com",
    siteName: "Rising Stars",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rising Stars - Online Learning Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rising Stars | Online Learning Platform",
    description:
      "Learn anytime, anywhere with expert instructors and interactive online courses.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Education",
};

export default function Home() {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
}
