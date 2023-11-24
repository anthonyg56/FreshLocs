"use client"
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, useRef, useState } from 'react'

export default function ContactForm() {
  const [formState, setState] = useState({
    name: "",
    email: "",
    description: ""
  })
  const [disabledBtn, setBtn] = useState(false)
  const [submitted, setSubmit] = useState(false)

  const btnRef = useRef<any>();

  const saveInput = (
    prop: "email" | "description" | "name",
    e: any
  ) => {
    e.preventDefault();

    let target;

    target = e.currentTarget.value;

    setState({
      ...formState,
      [prop]: target,
    });
  };

  const submitForm = async () => {
    // btnRef.current.setAttribute("disabled", "disabled");

    // const formData = new FormData();

    // formData.append("name", formState.name);
    // formData.append("description", formState.description);
    // formData.append("email", formState.email);

    // Run an API Request const { data, status } = await createTribe(formData);

    /* if (status === 404) {
      alert("There was an error creating the tribe");
      return;
    } */

    // props.setSubmit ? props.setSubmit(true) : undefined
    setSubmit(true)
  };

  const SubmittedView = () => {
    return (
      <div className='text-center'>
        <FontAwesomeIcon icon={faEnvelopeCircleCheck} className='h-[60px] w-[60px] text-fresh-red'/>
        <h2>Thank You!</h2>
        <h4>Your message has been sent, we will get back to  you as soon as possible.</h4>
      </div>
    )
  }
  
  return (
    <div className='bg-fresh-black px-7 py-7 rounded-[5px] md:px-14 md:w-[75%] md:mx-auto lg:w-auto lg:mx-0 lg:col-span-6 lg:col-start-1 xl:col-span-4 xl:col-start-2 xl:flex xl:items-center'>
      {submitted ? <SubmittedView /> : <form className="xl:w-full" onSubmit={(e) => {
        e.preventDefault();

        submitForm();
      }}>
        <div className='text-center pb-[7px]'>
          <h2 className=''>Send Us a Message</h2>
        </div>

        <div className='py-[14px]'>
          <label htmlFor="name" className='block'>Name</label>
          <input
            className='block w-full'
            type="text"
            name="name"
            id="name"
            placeholder='John Doe'
            value={formState.name}
            onChange={(e) => saveInput("name", e)}
            required
            />
        </div>

        <div className='py-[14px]'>
          <label htmlFor="email" className='block'>Email</label>
          <input 
            className='block w-full'
            type="email" 
            name="email" 
            id="email" 
            placeholder='JohnDoe@email.com' 
            value={formState.email} 
            onChange={(e) => saveInput("email", e)}
            required
          />
        </div>

        <div className='pt-[14px] pb-7'>
          <label htmlFor="message"  className='block'>Message</label>
          <textarea 
            className='block w-full'
            name="message"
            id="message" 
            rows={3} 
            value={formState.description}
            onChange={(e) => saveInput("description", e)} 
            required
          />
        </div>

        <div className='text-center'>
          <button className='red-btn py-1 font-semibold text-[24px] tracking-[0.095em]' disabled={disabledBtn}>Send</button>
        </div>
      </form>}
    </div>
  )
}
