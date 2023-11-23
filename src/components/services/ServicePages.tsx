import React from 'react'
import ServiceOptionList from './ServiceOptionList'
import { IService, IServiceOption } from '@/utils/data/services';

interface Props {
  data: IService | undefined;
}

export default function ServicePages(props: Props) {
  const { data } = props

  if (!data) return (
    <div className='slide'>
      <div>
        No Data
      </div>
    </div>
  )

  return (
    <div className='slide'>
      <div className='lg:grid lg:grid-cols-[1fr_0.75fr] h-screen overflow-y-scroll lg:overflow-hidden'>
        <div className='w-full h-[500px] lg:h-full overflow-hidden relative'>
          <img src={data.imageSrc} alt={data.imageAlt} className='w-full h-full object-cover opacity-60' />
        </div>

        <ServiceOptionList data={data.options} serviceDetails={data.details} title={data.title} />
      </div>
    </div>
  )
}
