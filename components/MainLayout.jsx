import React from 'react'
import Navbar from './Navbar'

const MainLayout = ({children}) => {
  return (
    <div className='bg-white'>
        <Navbar />
        {children}
    </div>
  )
}

export default MainLayout