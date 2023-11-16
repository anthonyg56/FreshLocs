'use client'

import Header from '@/components/home/Section'
import MiniAbout from '@/components/about/Section'
import MiniServices from '@/components/services/Section'
import ReactFullpage from '@fullpage/react-fullpage';
import { useContext } from 'react';
import { LayoutContext, TLayoutContext } from '@/utils/contexts/layout';
import { FooterComponent } from '@/components/layout/footer';
import MeetTheTeam from '@/components/about/MeetTheTeam';
import { Sections } from '@/components/layout/nav';


export default function Home() {
  const { setFooter, setNav, disableScrolling} = useContext(LayoutContext) as TLayoutContext

  return (
    <ReactFullpage
      continuousVertical={false}
      loopHorizontal={false}
      controlArrows={false}
      afterSlideLoad={(section, origin, destination, direction, trigger) => {
        switch(destination.index) {
          case (0):
            setFooter(FooterComponent.MeetTheTeam)
            break;
          case (1):
            setFooter(FooterComponent.Back)
            break;
        }
      }}
      afterLoad={(origin, destination, direction, trigger) => {
        switch(destination.index) {
          case (0):
            setFooter(null)
            setNav(Sections.Home)
            break;
          case (1):
            setFooter(FooterComponent.MeetTheTeam)
            setNav(Sections.About)
            break;
          case (2):
            setFooter(FooterComponent.Disclaimer)
            setNav(Sections.Services)
            break;
        }
      }}
      credits={{}}
      anchors={['home', 'about', 'services']}
      menu='#menu'
      render={({ state, fullpageApi }) => {
        console.log(state)
        if (disableScrolling) {
          fullpageApi.setAllowScrolling(false, "all")
          fullpageApi.setKeyboardScrolling(false, "all")
        } else if (!disableScrolling && state.initialized) {
          fullpageApi.setAllowScrolling(true, "all")
          fullpageApi.setKeyboardScrolling(true, "all")
        }
        
        return (
          <ReactFullpage.Wrapper>
            <div className='section'>
              <Header />
            </div>

            <div className='section'>
              <MiniAbout />
              <MeetTheTeam />
            </div>

            <div className='section'>
              {/* <MiniServices /> */}
              <h1>hi</h1>
            </div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}
