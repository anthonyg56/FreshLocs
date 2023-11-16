import useScreenSize from '@/utils/hooks/useScreenSize'
import React from 'react'

export default function Header() {
  const screenSize = useScreenSize()

  console.log(screenSize.height)
  const calcHeight = () => {
    if (screenSize.width && screenSize.width >= 1024) {
      return 'h-screen'
    }

    return 'h-[' + screenSize.height + 'px]'
  }
  return (
    <div className={`bg-home-bg ${calcHeight()} bg-[80%_0%] bg-no-repeat bg-cover bg-opacity-40 flex items-center justify-center lg:justify-start`}>
        <div className='md:pl-7 lg:pl-14 tracking-wider z-[1000] text-center md:text-start'>
          <h1 className='font-extrabold '>A Full Service Salon</h1>
          <h1 className='font-extrabold'><span className='text-primary-red'>Specialized</span></h1>
          <h1 className='ont-extrabold'>in Grooming Locs</h1>
          <a href="https://www.vagaro.com/freshlocslocshopllc" ><button className='button-standard mt-5'>Schedule An Appointment</button></a>
        </div>
    </div>
  )
}
