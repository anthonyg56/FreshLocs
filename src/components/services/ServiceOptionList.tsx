import { IServiceOption } from '@/utils/data/services'
import React from 'react'
import ServiceOption from './ServiceOption';

interface Props {
  data: IServiceOption[];
  serviceDetails: string;
  title: string;
}

/**
 * When a service tile is expanded on the homepage, this will be shown to the right of it
 * 
 * To do:
 * -
 * 
 * @param props 
 * @returns 
 */
export default function ServiceOptionList(props: Props) {
  const { data, serviceDetails, title } = props

  const list = data.map((item, index) => <ServiceOption data={item} key={index} />)

  return (
    <div className='w-full px-7 pt-[35px] xl:px-14 lg:pt-24 overflow-y-scroll pb-14' id="serivce-page">
      <div className='text-center'>
        <div className='inline-block'>
          <h1 className='inline-block'>{title}</h1>
          <span className='w-full h-[3px] bg-primary-red block -translate-y-4'></span>
        </div>
      </div>

      <div className='pt-2 text-left pb-10'>
        <p className='leading-relaxed'>{serviceDetails}</p>
      </div>

      <div className='h-auto overflow-y-auto'>
        {list}
      </div>
    </div>
  )
}
