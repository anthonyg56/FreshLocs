import React from 'react'
import ActiveMark from './ActiveMark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export enum Sections {
  Home,
  About,
  Services,
  Contact,
}
  
interface Props {
  active: Sections | undefined;
  trigger: (nav: true) => void; // For mobile
}

export default function Nav(props: Props) {
  const { active, trigger } = props

  return (
    <div className='fixed z-50 w-full flex pt-5 px-7 lg:pt-7 xl:px-14'>
      {/* Website Logo */}
      <div className='my-auto'>
        <a href="#home"><h4 className=' tracking-[0.095em] text-white'><span className='text-fresh-red'>FRESH</span> LOCS</h4></a>
      </div>

      {/* Nav Menu */}
      <div className='ml-auto md:hidden h-[32px] w-[32px]'>
        <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} onClick={() => trigger(true)} width={32} height={32} className='!h-full w-full hover:cursor-pointer'/>
      </div>

      <div id="menu" className='ml-auto gap-x-5 hidden md:flex '>
        <a href="#home" className='relative tracking-wide'><h4 data-menuanchor="#home" className='my-auto tracking-[0.095em] text-white'>Home<ActiveMark active={active} section={Sections.Home} /></h4></a>
        <a href="#about" className='relative tracking-wide'><h4 data-menuanchor="#about" className='my-auto tracking-[0.095em] text-white'>About<ActiveMark active={active} section={Sections.About} /></h4></a>
        <a href="#services" className='relative tracking-wide'><h4 data-menuanchor="#services" className='my-auto tracking-[0.095em] text-white'>Services<ActiveMark active={active} section={Sections.Services} /></h4></a>
        {/* <h4 href="/shop">Shop</h4> */}
        <a href="#contact"><h4 className='red-btn !py-[2px] tracking-[0.095em]'>Contact</h4></a>
      </div>
    </div>
  )
}