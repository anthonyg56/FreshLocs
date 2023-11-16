import React from 'react'

interface Props {
  title: string;
  position?: string;
  extraCss?: string;
}

export default function Heading(props: Props) {
  return (
    <div className={`flex w-full ${props.position ? props.position : 'justify-center'} mb-[15px] ${props.extraCss}`}>
      <span className='w-[6px] h-[30px] md:h-[40px] lg:h-[50px] lg:w-[8px] xl:h-[70px] bg-primary-red block mr-[10px] my-auto'></span>
      <h1>{props.title}</h1>
    </div>
  )
}
