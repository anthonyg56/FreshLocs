import React from 'react'

import TeamMemberTile from '@/components/about/TeamMemberTile'
import { teamMembers } from '@/utils/data/team'
import Heading from '../layout/Heading'

export default function MeetTheTeam() {
  
  return (
    <div className='slide'>
      <div className='sect h-screen'>
        <Heading title='MEET THE TEAM' position='justify-normal'/>

        <div className='md:grid md:grid-cols-[1fr_1fr_1fr] md:gap-x-[50px] xl:gap-x-[100px]'>
          {teamMembers.map((items, index) => <TeamMemberTile data={items} key={index} />)}
        </div>
      </div>
    </div>
  )
}
