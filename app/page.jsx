import HomePage from "@/components/Home";
import MainLayout from "@/components/MainLayout";

export const metadata = {
  title: "Learnaxo | Online Learning Platform",
  description:
    "Learnaxo is a modern online education platform offering interactive courses, live classes, expert instructors, and hands-on learning to help students achieve their goals.",

  keywords: [
    "Learnaxo online education",
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

  authors: [{ name: "Learnaxo" }],
  creator: "Learnaxo",
  publisher: "Learnaxo",

  metadataBase: new URL("https://www.Learnaxo.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Learnaxo | Online Learning Platform",
    description:
      "Master new skills with expert-led courses, live classes, and interactive learning experiences.",
    url: "https://wwww.Learnaxo.com",
    siteName: "Rising Stars",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Learnaxo - Online Learning Platform",
      },
    ],
    locale: "en_US",
    type: "website",
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
