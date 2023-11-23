import { IServiceOption } from '@/utils/data/services'
import React from 'react'

interface Props {
  data: IServiceOption;
}

/**
 *  When a service option is expaned, there will be a list of this component on the expanded portion,
 *  purpose is to display Service Cost, Points earned, and provide a link to book a session
 * 
 * To do:
 * - Add the little tag for the disclaimer, when a user hovers over it there should be a message
 * 
 * @param props 
 * @returns 
 */
export default function ServiceOption(props: Props) {
  const { data } = props

  const points = data.costPoints !== undefined ? ` or ${data.costPoints}pts` : undefined

  const earnedPoints = data.pointsEarned !== undefined ? `, Earn ${data.pointsEarned}pts` : undefined

  return (
    <div className='flex py-3 flex-row w-full bg-fresh-black rounded-[5px] px-5 my-6 hover:cursor-pointer'>
      <div className='text-left max-w-[244px] md:max-w-[270px] xl:max-w-none'>
        <h3 className=''>{data.title}</h3>
        <h4>${data.costFiat}{points}{earnedPoints}</h4>
      </div>
      <div className='ml-auto mt-3'>
        <a href={data.link}>
          <h3 className='max-h-[42px] xl:max-h-none'>Book Now</h3>
        </a>
      </div>
    </div>
  )
}
