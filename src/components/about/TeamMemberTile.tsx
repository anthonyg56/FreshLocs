import { TeamMember } from '@/utils/data/team'
import { faSquareFacebook, faSquareInstagram, faTiktok, faSquareTwitter, faSquareYoutube, faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

interface Props {
  data: TeamMember;
}

export default function TeamMemberTile(props: Props) {
  const { name, picture, bookingLink, position, socials, about } = props.data

  return (
    <div className=''>
      <div className='h-[300px] lg:h-[400px] 2k:h-[737.688px] relative flex items-center justify-center overflow-hidden flex-col'>
        <img src={picture} alt={`Picture of ${name}`} className='object-cover w-full h-full absolute object-top' />
      </div>

      <div className='flex w-full justify-center pt-4'>
        <p>{name.toUpperCase()}</p>
      </div>

      <div className='flex w-full justify-center pt-4'>
        <p>{position}</p>
      </div>

      <div className='flex flex-row w-full justify-center gap-x-[20px] pt-4'>
        {socials.facebook && <a href={socials.facebook}>
          <FontAwesomeIcon icon={faFacebook} width={32} height={32} className='w-[24px] h-[24px]' />
        </a>}
        {socials.instagram && <a href={socials.instagram}>
          <FontAwesomeIcon icon={faInstagram} width={32} height={32} className='w-[24px] h-[24px]' />
        </a>}
        {socials.tiktok && <a href={socials.tiktok}>
          <FontAwesomeIcon icon={faTiktok} width={32} height={32} className='w-[24px] h-[24px]' />
        </a>}
        {socials.twitter && <a href={socials.twitter}>
          <FontAwesomeIcon icon={faTwitter} width={32} height={32} className='w-[24px] h-[24px]' />
        </a>}
        {socials.youtube && <a href={socials.youtube}>
          <FontAwesomeIcon icon={faYoutube} width={32} height={32} className='w-[24px] h-[24px]' />
        </a>}
      </div>

      <div className='flex w-full justify-center pt-6 pb-12'>
        <button className='z-10 red-btn '>
          <a href={bookingLink} >Book Now</a>
        </button>
      </div>
    </div>
  )
}
