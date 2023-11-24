"use client"
import useScreenSize from '@/utils/hooks/useScreenSize'
import React from 'react'


export default function Header() {
  const screenSize = useScreenSize()

  return (
    <div className={`bg-home-bg h-[100svh] lg:h-screen bg-[80%_0%] bg-no-repeat bg-cover`}>
        <div className='md:pl-7 lg:pl-14 tracking-wider z-[1000] text-center flex flex-col items-center justify-center h-full w-full bg-[rgba(0,0,0,0.35)]'>
          <h1 className='tracking-[0.25em] md:tracking-[0.35em] text-[40px] md:text-[60px] lg:text-[75px] xl:text-[96px] lg:!font-extrabold lg:tracking-[0.55em]'><span className='text-fresh-red'>FRESH</span> LOCS</h1>
          <h3 className='tracking-[0.095em] md:tracking-[0.15em] xl:tracking-[0.25em]'>A Full Service Salon <span className='text-fresh-red'>Specialized</span> in Grooming Locs</h3>
          {/* <a href="https://www.vagaro.com/freshlocslocshopllc" ><button className='button-standard mt-5'>Schedule An Appointment</button></a> */}
        </div>
    </div>
  )
}
