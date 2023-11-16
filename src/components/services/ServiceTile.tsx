"use client"
import { IService } from '@/utils/data/services'
import React, { useState } from 'react'
import ServiceOptionList from './ServiceOptionList';
import { Tiles } from './Carousel';

interface Props {
  data: IService;
  index: Tiles;
  expanded: Tiles | null;
  screenSize: {
    width: number | null;
    height: number | null;
  };
  isVisibile: (tile: Tiles) => boolean;
  setExpanded: (tile: Tiles | null) => void;
}

/**
 * Component used on the home pages in the Service section. Tile is used to display a service
 * and can be triggered to show the expanded tile
 * 
 * properties to keep track of:
 * - Is the tile expanded
 * - Is it visible
 * - Is there another tile expanded but this one isnt
 * 
 */
export default function ServiceTile(props: Props) {
  const { data,  index, setExpanded, isVisibile, expanded } = props

  const isExpanded = index === expanded
  const isShrunk = !isExpanded && isVisibile(index) && expanded !== null
  const isDefault = !isExpanded && isVisibile(index) && expanded === null
  const isNotVisible = !isVisibile

  return (
    <div className={ !isVisibile(index) ? 'hidden' : isExpanded ? 'grid grid-cols-[1.5fr_2fr] w-full' : ''}>
      <div className='h-[750px] w-full hover:cursor-pointer group overflow-hidden relative flex justify-center items-center flex-col' onClick={(e) => isShrunk ? setExpanded(index) : null}>
        <img src={data.imageSrc} alt={data.imageAlt} className={`w-full h-full object-cover ${isExpanded ? "opacity-50" : "opacity-80 group-hover:opacity-50"} absolute`}/>
        <h2 className={`z-10 absolute ${isShrunk ? "text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" : "bottom-0"} left-0 pl-4 pb-1 ${isShrunk ? "-rotate-90" : ""}`}>{data.title}</h2>
        {<p className={`z-10 w-[50%] mb-5 ${isExpanded ? "opacity-100" : isShrunk ? "hidden" : "opacity-0 group-hover:opacity-100"}`}>{data.details}</p>}
        <button
          className={`red-btn z-10 ${isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"} ${isShrunk ? "hidden" : ""}`}
          onClick={(e) => isExpanded ? setExpanded(null) : setExpanded(index)}
        >{isExpanded ? "Minimize Option" : "View Options"}</button>
      </div>
      
      {isExpanded && <ServiceOptionList data={data.options} />}
    </div>
  )
}
