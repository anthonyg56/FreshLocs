import React from 'react'
import ActiveMark from './ActiveMark'
import { Sections } from './nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faSquareFacebook, faSquareInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

interface Props {
  active: Sections | undefined;
}

export default function MobileNav(props: Props) {
  const { active } = props;

  return (
    <div>
      <div id="menu" className='flex flex-col items-start'>
        <h3 data-menuanchor="#home" className='pb-1 inline-block'><a href="#home">HOME<ActiveMark active={active} section={Sections.Home} /></a></h3>
        <h3 data-menuanchor="#about" className='pb-1 inline-block'><a href="#about">ABOUT<ActiveMark active={active} section={Sections.About} /></a></h3>
        <h3 data-menuanchor="#services" className='pb-1 inline-block'><a href="#services">SERVICES<ActiveMark active={active} section={Sections.Services} /></a></h3>
        {/* <h3 href="/shop">Shop</h3> */}
        <h3>CONTACT</h3>
      </div>

      <div className='pt-5 pb-2'>
        <p className='text-xs'>Copyright &copy; 2023 Freshlocs | ALL RIGHTS RESERVED.</p>
      </div>

      <div className='flex gap-x-6 justify-center'>
        <a href="">
          <FontAwesomeIcon icon={faFacebook} width={16} height={16} className='w-[16px] !h-[16px]' />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faInstagram} width={16} height={16} className='w-[16px] !h-[16px]' />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faTiktok} width={16} height={16} className='w-[16px] !h-[16px]' />
        </a>
      </div>
    </div>
  )
}
