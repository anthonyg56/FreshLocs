
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Sections } from './nav'
import { faCircle, faCircleDot, } from '@fortawesome/free-regular-svg-icons';

interface Props {
  active: Sections | null;
}

export default function NavDots(props: Props) {
  const { active } = props

  return (
    <div className='hidden md:block right-[15px] fixed z-[1002] top-[45%] opacity-100 '>
      <ul className='m-0 p-0 list-none'>
        <li className='block w-[32px] h-[32px] relative'>
          <a href="#home" className='block w-[100%] h-[100%] relative z-1 cursor-pointer no-underline'>
            {
              active === Sections.Home
                ?
                <FontAwesomeIcon icon={faCircleDot} size="lg" style={{ color: "#FFFFFF" }} className='h-full w-full' />
                :
                <FontAwesomeIcon icon={faCircle} size="lg" style={{ color: "#FFFFFF" }} className='h-full w-full' />
            }
          </a>
        </li>
        <li className='block w-[32px] h-[32px] relative'>
          <a href="#about" className='block w-[100%] h-[100%] relative z-1 cursor-pointer no-underline'>
            {
              active === Sections.About
                ?
                <FontAwesomeIcon icon={faCircleDot} size="lg" style={{ color: "#FFFFFF" }} className='h-full w-full' />
                :
                <FontAwesomeIcon icon={faCircle} size="lg" style={{ color: "#FFFFFF" }} className='h-full w-full' />
            }
          </a>
        </li>
        <li className='block w-[32px] h-[32px] relative'>
          <a href="#services" className='block w-[100%] h-[100%] relative z-1 cursor-pointer no-underline'>
            {
              active === Sections.Services
                ?
                <FontAwesomeIcon icon={faCircleDot} size="lg" style={{ color: "#FFFFFF" }} className='h-full w-full' />
                :
                <FontAwesomeIcon icon={faCircle} size="lg" style={{ color: "#FFFFFF" }} className='h-full w-full' />
            }
          </a>
        </li>
      </ul>
    </div>
  )
}
