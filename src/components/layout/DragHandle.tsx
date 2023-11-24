"use client"
import React from 'react'
import { Sections } from './nav';
import MobileNav from './MobileNav';
import useScreenSize from '@/utils/hooks/useScreenSize';

interface Props {
  isOpen: Boolean;
  section: Sections | undefined;
  close: () => void;
}

export default function DragHandle(props: Props) {
  const {
    isOpen,
    section,
    close,
  } = props
  const screenSize = useScreenSize()
  const calcHeight = () => {
    if (screenSize && screenSize.width >= 1024) {
      return 'h-screen'
    }

    return 'h-[' + screenSize?.height + 'px]'
  }
  return (
    <div className={`h-[svh] ${isOpen ? "fixed" : "hidden"} top-0 lg:hidden w-full z-[1001] bg-[rgba(0,0,0,0.7)]`} onClick={() => close()} >
      <div className='max-h-[80%] bg-white h-auto absolute bottom-0 text-black w-full text-center rounded-[16px_16px_0px_0px] px-5 pb-5 overflow-y-scroll'>
        <div className='flex justify-center pt-5 pb-7'>
          <span className='h-[5px] w-[32px] block bg-gray-600 rounded-full' onClick={() => close()}></span>
        </div>

        <div className='z-[1010]'>
          <MobileNav active={section} />
        </div>
      </div>
    </div>
  )
}

