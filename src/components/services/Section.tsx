"use client"

import React, { useState } from 'react'
import Carousel from './Carousel'
import Heading from '../layout/Heading'
import ServiceOption from './ServiceOption'
import services from '@/utils/data/services'
import ServiceOptionList from './ServiceOptionList'


export default function MiniServices() {

  return (
    <div className='px-14 h-screen flex flex-col justify-center'>
      <Heading title="OUR SERVICES" position='justify-normal' extraCss=''/>
      <Carousel />
    </div>
  )
}
