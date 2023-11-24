"use client"
import { IService } from '@/utils/data/services'
import React, { useContext } from 'react'
import { LayoutContext, TLayoutContext, Tiles } from '@/utils/contexts/layout';

interface Props {
  data: IService;
  index: Tiles;
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
  const { data, index } = props
  const { setPage } = useContext(LayoutContext) as TLayoutContext

  return (
    <a href='#services/1' className={`w-full grid grid-rows-[65%_35%] [&:nth-child(2)]:pb-24 md:[&:nth-child(2)]:pb-0 group`}>
        <div className='h-full rounded-[5px] overflow-hidden lg:group-hover:cursor-pointer lg:group-hover:scale-105' onClick={(e) => setPage(index)}>
          <img src={data.imageSrc} alt={data.imageAlt} className={`w-full h-full object-cover`} />
        </div>

        <div className='h-[fit-content] lg:group-hover:cursor-pointer lg:group-hover:scale-105' onClick={(e) => setPage(index)}>
          <div className='text-center mt-5 mb-3'>
            <h3 className={`font-medium`}>{data.title}</h3>
            <h4>{data.subTitle}</h4>
          </div>

          {/* <div className='w-full text-center'>
          <button className='red-btn' onClick={(e) => {
            
            setPage(index)
          }}><a href="#services/1">View Services</a></button>
        </div> */}
        </div>
    </a>
  )
}
