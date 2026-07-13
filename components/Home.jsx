import React from 'react'
import HeroSection from './Hero'
import Subjects from './Subject'
import WhyChooseUs from './WhyChooseUs'
import EducationBoards from './EducationSystem'
import Grades from './Grades'
import StudyFramework from './Framework'
import Footer from './Footer'
import WelcomePopup from './WelcomePopup'



const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <WelcomePopup />
        <Subjects />
        <WhyChooseUs />
        <EducationBoards />
        <Grades />
        <StudyFramework />
        <Footer />
    </div>
  )
}

export default HomePage