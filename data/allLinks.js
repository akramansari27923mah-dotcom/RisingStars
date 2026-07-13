import {
  Calculator,
  Atom,
  BookOpen,
  FlaskConical,
  Globe,
  Laptop,
  GraduationCap,
  Users,
  Award,
  Clock,
  Headphones,
  School,
  Library,
  Landmark
} from "lucide-react";


export const grades = [
  {
    title: "Primary School",
    classes: "Classes 1 to 5",
    description:
      "Build a strong academic foundation with engaging lessons and personalized attention.",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Middle School",
    classes: "Classes 6 to 8",
    description:
      "Strengthen concepts and develop problem-solving skills through interactive learning.",
    icon: Library,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "High School",
    classes: "Classes 9 to 12",
    description:
      "Prepare for board exams with expert guidance, regular tests, and comprehensive study materials.",
    icon: GraduationCap,
    color: "bg-orange-100 text-orange-600",
  },
];

export const boards = [
  {
    title: "CBSE",
    description:
      "Comprehensive learning for CBSE students with expert guidance and exam-focused preparation.",
    icon: School,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "ICSE",
    description:
      "Concept-based learning with in-depth explanations and personalized support for ICSE students.",
    icon: GraduationCap,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "UP Board",
    description:
      "Complete syllabus coverage with regular practice, mock tests, and revision sessions.",
    icon: BookOpen,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "IGCSE",
    description:
      "International curriculum with inquiry-based learning, critical thinking, and global academic standards.",
    icon: Globe,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "IB",
    description:
      "Holistic education focused on conceptual understanding, research skills, and international perspectives.",
    icon: Award,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "State Board",
    description:
      "Dedicated coaching for various state boards with syllabus-specific lessons, practice tests, and exam preparation.",
    icon: Landmark,
    color: "bg-teal-100 text-teal-600",
  },
];

export const features = [
  {
    title: "Expert Teachers",
    description:
      "Learn from experienced educators dedicated to helping you succeed.",
    icon: GraduationCap,
  },
  {
    title: "Quality Courses",
    description:
      "Well-structured lessons designed for effective and enjoyable learning.",
    icon: BookOpen,
  },
  {
    title: "Interactive Learning",
    description:
      "Engaging lessons, activities, and practical examples to improve understanding.",
    icon: Users,
  },
  {
    title: "Certified Programs",
    description:
      "Receive certificates after successfully completing your courses.",
    icon: Award,
  },
  {
    title: "Flexible Schedule",
    description: "Study at your own pace, anytime and from anywhere.",
    icon: Clock,
  },
  {
    title: "Student Support",
    description:
      "Our support team is always ready to help with your learning journey.",
    icon: Headphones,
  },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Subject", href: "#subject" },
  { name: "Why Choose Us", href: "#WhyChooseUs" },
  { name: "Education Boards", href: "#EducationBoards" },
  { name: "Grades We Teach", href: "#GradesWeTeach" },
  { name: "Our Study Framework", href: "#OurStudyFramework" },
  // { name: "Courses", href: "/courses" },
  // { name: "About", href: "/about" },
  // { name: "Teachers", href: "/teachers" },
  // { name: "Contact", href: "/contact" },
];

export const subjects = [
  {
    title: "Mathematics",
    description: "Master algebra, geometry, calculus, and problem-solving.",
    icon: Calculator,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Physics",
    description: "Understand motion, energy, electricity, and mechanics.",
    icon: Atom,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "English",
    description: "Improve grammar, vocabulary, reading, and speaking skills.",
    icon: BookOpen,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Science",
    description: "Explore biology, chemistry, and environmental science.",
    icon: FlaskConical,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Geography",
    description: "Learn about our planet, maps, climate, and cultures.",
    icon: Globe,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Computer",
    description: "Programming, coding, web development, and technology.",
    icon: Laptop,
    color: "bg-pink-100 text-pink-600",
  },
];
