import React from 'react'

import TeamMemberTile from '@/components/about/TeamMemberTile'
import { teamMembers } from '@/utils/data/team'
import Heading from '../layout/Heading'

export default function MeetTheTeam() {
  
  return (
    <div className='slide'>
      <div className='sect overflow-hidden'>
        <div className='lg:grid lg:grid-rows-[25%_75%] h-full'>
          <Heading title='MEET THE TEAM' subTitle='Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text.' />

          <div className='md:grid md:grid-cols-[1fr_1fr_1fr] md:gap-x-[20px]'>
            {teamMembers.map((items, index) => <TeamMemberTile data={items} key={index} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
