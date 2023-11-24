import React from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

interface Props {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

export default function Modal(props: Props) {
  return (
    <div>
      <Dialog open={props.isOpen} handler={props.setOpen} className='mx-auto bg-fresh-black max-h-[90%] md:max-h-[80%] md:max-w-[75%] h-full my-auto overflow-y-auto'>
        <div className='flex flex-col justify-center h-auto py-14'>
          <FontAwesomeIcon icon={faTriangleExclamation} className='text-fresh-red h-[60px] w-[60px] mx-auto' />
          <DialogHeader className='text-[35px] md:text-[45px] lg:text-[70px] font-bold tracking-[0.095em] mx-auto'>DISCLAIMER</DialogHeader>
          <DialogBody className='text-[16px] font-medium px-7 md:w-[75%] lg:w-[45%] mx-auto'>
            To book an Appointment you must confirm a deposit for locs and/or color (both deposits if color is requested), and then contact Freshlocs via CLICK to lock in your appointment date/time after the deposit is paid. NEW Appts & Color Inquires require a Consultation so do not pay a deposit until you receive pricing. For Starter Locs, Loc Extensions or any Crochet Inquires please send photos of your natural hair to the phone number provided to receive an estimate or consultation appt than you will confirm the deposit. The deposit will be greater for Loc Extensions and Crochet Method Appts.
            <br />
            <br />
            ***No CHILDREN under 13 years of age will be serviced by Freshlocs but Staff is available that service children - Please Call or Text but do not pay a deposit through Freshlocs.
            Please Note: Approx up to 14 days is needed for Regular Retwist & Color Appts, and up to 45-60 Days is needed for Loc Extension Appts.
            <br />
            <br />
            Book in advance so we can confirm your requested date.
            <br />
            <br />
            Your deposit will be deducted from the total cost of service.
            <br />
            <br />
            *Sunday & Monday appointments are an additional fee of $100+ and Holidays are more.
            <br />
            <br />
            Please Note: The deposit is Non-refundable. The earliest available date will be provided.
            <br />
            <br />
            If you do not have a Credit/Debit Card then arrange a time to drop off a cash deposit to set your appointment.
          </DialogBody>
          <DialogFooter className='w-full flex justify-center'>
            <Button className='red-btn mt-10 text-[16px] font-medium' variant="gradient" color="green" onClick={() => props.setOpen(false)}>
              <span>I Agree</span>
            </Button>
          </DialogFooter>
        </div>

      </Dialog>
    </div>
  )
}
