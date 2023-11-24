import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ContactInfo() {
  return (
    <div className='w-full flex justify-center mt-[35px] pb-10'>
      <div className='flex flex-col lg:flex-row gap-[25px] xl:gap-[50px] mx-auto'>
        <div className='flex flex-col justify-center items-center md:flex-row md:items-start lg:flex-row lg:justify-start'>
          <div className='bg-fresh-black h-[50px] w-[50px] rounded-[50%] flex'>
            <FontAwesomeIcon icon={faLocationDot} style={{ color: "#FF0205" }} className='h-[30px] w-[30px] m-auto' />
          </div>

          <div className='flex ml-0 md:ml-[15px] text-center lg:text-start md:text-start my-auto'>
            <h3 className='text-white my-auto inline-block md:block'>5438 N. Keystone Ave, Indianapolis, IN 46220</h3>
          </div>
        </div>

        <div className='flex flex-col justify-center md:flex-row items-center md:items-start lg:flex-row lg:justify-start'>
          <div className='bg-fresh-black h-[50px] w-[50px] rounded-[50%] flex'>
            <FontAwesomeIcon icon={faPhone} style={{ color: "#FF0205" }} className='h-[30px] w-[30px] m-auto' />
          </div>

          <div className='flex ml-0 md:ml-[15px] my-auto'>
            <h3 className='text-white my-auto inline-block md:block'>317 - 654 - 6855</h3>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center md:flex-row md:items-start lg:flex-row lg:justify-start'>
          <div className='bg-fresh-black h-[50px] w-[50px] rounded-[50%] flex'>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#FF0205" }} className='h-[30px] w-[30px] m-auto' />
          </div>
          
          <div className='flex ml-0 md:ml-[15px] my-auto'>
            <h3 className='text-white my-auto inline-block md:block'><a href="mail:Freshlocs@yahoo.com">Freshlocs@yahoo.com</a></h3>
          </div>
        </div>
      </div>
    </div>
  )
}
