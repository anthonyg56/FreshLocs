import { IServiceOption } from '@/utils/data/services'
import React from 'react'
import ServiceOption from './ServiceOption';

interface Props {
  data: IServiceOption[];
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
  const { data } = props

  const list = data.map((item, index) => <ServiceOption data={item} key={index} />)

  return (
    <div className='h-[750px] w-full bg-white text-black px-10 pt-7 overflow-hidden'>
      <div className='inline-block'>
        <h2 className='inline-block'>Service Options</h2>
        <span className='w-full h-[10px] bg-primary-red block'></span>
      </div>

      <div className='h-full overflow-y-auto'>
        {list}
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  )
}
