import React from 'react'
import { Sections } from './nav';
import { Tiles } from '../services/Carousel';
import MobileNav from './MobileNav';
import { AboutContent } from '../about/Section';
import ServiceOptionList from '../services/ServiceOptionList';
import services from '@/utils/data/services';
import useScreenSize from '@/utils/hooks/useScreenSize';

interface Props {
  nav: Boolean;
  isOpen: Boolean;
  tile: Tiles | null;
  section: Sections | null;
  close: () => void;
}

export default function DragHandle(props: Props) {
  const {
    nav,
    isOpen,
    section,
    close,
    tile
  } = props
  const screenSize = useScreenSize()
  const calcHeight = () => {
    if (screenSize.width && screenSize.width >= 1024) {
      return 'h-screen'
    }

    return 'h-[' + screenSize.height + 'px]'
  }
  return (
    <div className={`${calcHeight()} ${isOpen ? "fixed" : "hidden"} top-0 md:hidden w-full z-[1001] bg-[rgba(0,0,0,0.7)]`} onClick={() => close()} >
      <div className='max-h-[80%] bg-white h-auto absolute bottom-0 text-black w-full text-center rounded-[16px_16px_0px_0px] px-5 pb-5 overflow-y-scroll'>
        <div className='flex justify-center pt-5 pb-7'>
          <span className='h-[5px] w-[32px] block bg-gray-600 rounded-full' onClick={() => close()}></span>
        </div>

        <div className='z-[1010]'>
          { nav && <MobileNav active={section} /> }
          { section === Sections.About && !nav && <AboutContent /> }
          { section === Sections.Services && !nav && tile && <ServiceOptionList data={services[tile].options}/> }
        </div>
      </div>
    </div>
  )
}

