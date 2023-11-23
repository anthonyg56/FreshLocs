import React from 'react'
import { Sections } from './nav'

interface Props {
  active: Sections | undefined;
  section: Sections;
}

export default function ActiveMark(props: Props) {
  const { active, section } = props

  if (active !== section) return (<span></span>)

  return (
    <span className='w-full h-[3px] bg-fresh-red block absolute bottom-0'></span>
  )
}
