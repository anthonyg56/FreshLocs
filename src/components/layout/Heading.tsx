import React from 'react'

interface Props {
  title: string;
  subTitle?: string;
}

export default function Heading(props: Props) {
  return (
    <div className={`inline w-full ${props.subTitle ? 'py-7' : 'pt-7'} text-center`}>
      <div className='h-full flex flex-col justify-end'>
        <div className='flex items-center'>
          <span className='w-[6px] h-[30px] md:h-[40px] lg:h-[50px] lg:w-[8px] xl:h-[55px] bg-fresh-red block mr-[10px] md:ml-auto'></span>
          <h1 className='md:mr-auto'>{props.title}</h1>
        </div>

        <p>{props.subTitle}</p>
      </div>

    </div>
  )
}
