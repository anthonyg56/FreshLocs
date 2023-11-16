import React from 'react'
import { Sections } from './nav'

interface Props {
  active: Sections | null;
  section: Sections;
}

export default function ActiveMark(props: Props) {
  const { active, section } = props

  if (active !== section) return (<span></span>)

  return (
    <span className='w-full h-1 bg-primary-red block absolute bottom-0 translate-y-[7px]'></span>
  )
}
