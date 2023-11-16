import { ModalContext, TModalContext } from '@/utils/contexts/modal';
import React, { useContext } from 'react'
import Disclaimer from '../services/Disclaimer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faSquareFacebook, faSquareInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowPointer, faArrowRight } from '@fortawesome/free-solid-svg-icons';


export enum FooterComponent {
  MeetTheTeam,
  Back,
  Disclaimer
}

interface Props {
  component: FooterComponent | null;
  
}

export default function Footer(props: Props) {
  const { component } = props
  const { handleModal, modal } = useContext(ModalContext) as TModalContext
  
  const ReadBeforeBooking = (
    <button onClick={(e) => handleModal(modal ? null : <Disclaimer />, modal!!)}>
      <h3>{modal ? "Close" : "Read Before Booking"}</h3>
    </button>
  )

  const MeetTheTeamBtn = (
    <a href="#about/1" className='flex'>
      <h3 className='mr-3'>Meet The Team</h3>
      <FontAwesomeIcon icon={faArrowRight} className='my-auto'/>
    </a>
  )

  const BackBtn = (
    <a href="#about" className='flex'>
      <FontAwesomeIcon icon={faArrowLeft} className='my-auto mr-3'/>
      <h3>Go back</h3>
    </a>
  )

  const footers = [MeetTheTeamBtn, BackBtn, ReadBeforeBooking,]

  return (
    <div className='fixed z-[1000] bottom-0 w-full flex py-5 px-7 lg:py-7 xl:px-14'>
      <div className='md:flex md:gap-x-6 hidden md:items-center'>
        <a href="">
          <FontAwesomeIcon icon={faFacebook} className='w-[20px] !h-[20px] lg:w-[24px] lg:!h-[24px] hover:text-primary-red'/>
        </a>
        <a href="">
          <FontAwesomeIcon icon={faInstagram} className='w-[20px] !h-[20px] lg:w-[24px] lg:!h-[24px] hover:text-primary-red'/>
        </a>
        <a href="">
          <FontAwesomeIcon icon={faTiktok} className='w-[20px] !h-[20px] lg:w-[24px] lg:!h-[24px] hover:text-primary-red' />
        </a>
      </div>
      
      <div className='hidden md:flex my-auto md:ml-8'>
        <p className='text-[14px] lg:text-[16px]'>Copyright &copy; 2023 Freshlocs | ALL RIGHTS RESERVED.</p>
      </div>

      <div className=' md:hidden'>
        <FontAwesomeIcon icon={faArrowPointer} />
      </div>

      <div className='ml-auto my-auto'>
        { component === null ? null : footers[component]}
      </div>
    </div>
  )
}
