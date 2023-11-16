import React from 'react'
import ActiveMark from './ActiveMark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export enum Sections {
  Home,
  About,
  Services,
}
  
interface Props {
  active: Sections | null;
  trigger: (nav: true) => void; // For mobile
}

export default function Nav(props: Props) {
  const { active, trigger } = props

  return (
    <div className='fixed z-50 w-full flex pt-7 px-7 lg:py-7 xl:px-14'>
      {/* Website Logo */}
      <div className='my-auto'>
        <h3><a href="#home"><span className='text-primary-red'>FRESH</span> LOCS</a></h3>
      </div>

      {/* Nav Menu */}
      <div className='ml-auto md:hidden h-[32px] w-[32px]'>
        <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} onClick={() => trigger(true)} width={32} height={32} className='!h-full w-full hover:cursor-pointer'/>
      </div>

      <div id="menu" className='ml-auto gap-x-5 hidden md:flex'>
        <h3 data-menuanchor="#home" className='font-normal my-auto'><a href="#home" className='relative tracking-wide'>Home<ActiveMark active={active} section={Sections.Home} /></a></h3>
        <h3 data-menuanchor="#about" className='font-normal my-auto'><a href="#about" className='relative tracking-wide'>About<ActiveMark active={active} section={Sections.About} /></a></h3>
        <h3 data-menuanchor="#services" className='font-normal my-auto'><a href="#services" className='relative tracking-wide'>Services<ActiveMark active={active} section={Sections.Services} /></a></h3>
        {/* <h3 href="/shop">Shop</h3> */}
        <h3 className='font-normal red-btn bg-red tracking-wide'>Contact</h3>
      </div>
    </div>
  )
}