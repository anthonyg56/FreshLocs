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

  const points = data.costPoints !== null ? ` or ${data.costPoints}pts` : null

  const earnedPoints = data.pointsEarned !== null ? `, Earn ${data.pointsEarned}pts` : null

  return (
    <div className='flex py-5'>
      <div>
        <h4 className='text-[20px] font-semibold'>{data.title}</h4>
        <p>${data.costFiat}{points}{earnedPoints}</p>
      </div>
      <div className='ml-auto'>
        <a href={data.link}>
          <button className='red-btn'>Book Now</button>
        </a>
      </div>
    </div>
  )
}
