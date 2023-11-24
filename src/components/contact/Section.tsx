import React from 'react'
import Heading from '../layout/Heading'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import GoogleMap from './GoogleMap'

export default function ContactSection() {
  return (
    <div className='sect'>
      <Heading title='CONTACT US'/>

      <div className='lg:grid lg:grid-cols-12 lg:gap-[0px] pt-[25px]'>
        <ContactForm />
        <GoogleMap />
      </div>

      <ContactInfo />
    </div>
  )
}
