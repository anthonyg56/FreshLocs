import { ModalContext, TModalContext } from '@/utils/contexts/modal';
import React, { useContext } from 'react'
import Disclaimer from '../services/Disclaimer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faSquareFacebook, faSquareInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowPointer, faArrowRight } from '@fortawesome/free-solid-svg-icons';


export enum FooterComponent {
  MeetTheTeam,
  GoBackAbout,
  Disclaimer,
  GoBackServices,
}

interface Props {
  component: FooterComponent | undefined;
  openModal: (value: boolean) => void;
}

export default function Footer(props: Props) {
  const { component, openModal } = props
  
  const ReadBeforeBooking = (
    <button onClick={(e) => openModal(true)}>
      <h4 className='tracking-[0.095em] text-white'>Read Before Booking</h4>
    </button>
  )

  const MeetTheTeamBtn = (
    <a href="#about/1" className='flex hover:text-fresh-red'>
      <h4 className='mr-[6px] tracking-[0.095em] text-white'>Meet The Team</h4>
      <FontAwesomeIcon icon={faArrowRight} className='my-auto translate-y-[1px]'/>
    </a>
  )

  const BackBtn = (
    <a href="#about" className='flex'>
      <FontAwesomeIcon icon={faArrowLeft} className='my-auto mr-3'/>
      <h4 className='tracking-[0.095em] text-white'>Go back</h4>
    </a>
  )

  const ServiceBtn = (
    <a href="#services" className='flex'>
      <FontAwesomeIcon icon={faArrowLeft} className='my-auto mr-3'/>
      <h4 className='tracking-[0.095em] text-white'>Go back</h4>
    </a>
  )

  const footers = [MeetTheTeamBtn, BackBtn, ReadBeforeBooking, ServiceBtn]

  return (
    <div className='fixed z-[1000] bottom-0 w-full flex py-5 px-7 lg:py-7 xl:px-14'>
      <div className='md:flex md:gap-x-6 hidden md:items-center'>
        <a href="https://www.facebook.com/Freshlocs/">
          <FontAwesomeIcon icon={faFacebook} className='w-[20px] !h-[20px] hover:text-fresh-red'/>
        </a>
        <a href="https://www.instagram.com/freshloc/">
          <FontAwesomeIcon icon={faInstagram} className='w-[20px] !h-[20px] hover:text-fresh-red'/>
        </a>
        <a href="https://www.tiktok.com/@antoniofreshlocs">
          <FontAwesomeIcon icon={faTiktok} className='w-[20px] !h-[20px] hover:text-fresh-red' />
        </a>
      </div>
      
      <div className='hidden md:flex my-auto md:ml-8'>
        <p className=''>Copyright &copy; 2023 Freshlocs <span className='text-fresh-red'>|</span> ALL RIGHTS RESERVED.</p>
      </div>

      <div className='ml-auto my-auto'>
        { component === undefined ? undefined : footers[component]}
      </div>
    </div>
  )
}
