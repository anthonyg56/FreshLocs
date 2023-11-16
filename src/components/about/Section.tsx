import React, { useContext } from 'react'
import Heading from '../layout/Heading'
import { LayoutContext, TLayoutContext } from '@/utils/contexts/layout'

export default function MiniAbout() {
  const { triggerHandle } = useContext(LayoutContext) as TLayoutContext

  return (
    <div className="slide">
      <div className='h-screen lg:grid lg:grid-cols-[2fr_1.5fr] '>
        <div className='bg-about-bg bg-cover bg-[50%_0%] h-[50%] lg:h-full w-full opacity-70'>

        </div>

        <AboutContent />
      </div>
    </div>
  )
}

export const AboutContent = () => {
  return (
    <div className='pt-12 pb-24 md:pt-16 md:mb-20 lg:pt-0 flex flex-col lg:justify-center items-center lg:px-11 2k:px-0 2k:mx-auto'>
      <Heading title='ABOUT US' />

      <div className='w-[80%] md:w-[50%] lg:w-full 2k:w-[65%]'>
        <p>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.” As Cicero would put it, “Um, not so fast.”</p>
        <p>The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.</p>
        <p>Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”).</p>
      </div>

      <div>

      </div>
    </div>
  )
}