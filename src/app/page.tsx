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
import ServicePages from '@/components/services/ServicePages';
import services from '@/utils/data/services';
import ContactSection from '@/components/contact/Section';
import { useRouter } from 'next/navigation';
import useHash from '@/utils/hooks/usehas';

export default function Home(props: any) {
  const { setFooter, setNav, disableScrolling, servicePage, modalOpen } = useContext(LayoutContext) as TLayoutContext

  const hash = useHash()

  return (
    <ReactFullpage
      navigation
      continuousVertical={false}
      loopHorizontal={false}
      controlArrows={false}
      normalScrollElements={'#serivce-page, #modal'}
      afterSlideLoad={(section, origin, destination, direction, trigger) => {
        const switchAbout = (index: number) => {
          switch(index) {
            case (0):
              setFooter(FooterComponent.MeetTheTeam)
              break;
            case (1):
              setFooter(FooterComponent.GoBackAbout)
              break;
          }
        }

        const switchServices = (index: number) => {
          switch(index) {
            case (0):
              setFooter(FooterComponent.Disclaimer)
              break;
            case (1):
              setFooter(FooterComponent.GoBackServices)
              break;
          }
        }

        section.anchor === "about" ? switchAbout(destination.index) : section.anchor === "services" ? switchServices(destination.index) : undefined
      }}
      afterLoad={(origin, destination, direction, trigger) => {
        switch(destination.index) {
          case (0):
            setFooter(undefined)
            setNav(Sections.Home)
            break;
          case (1):
            hash === "about" ? setFooter(FooterComponent.MeetTheTeam) : hash === "about/1" ? setFooter(FooterComponent.GoBackAbout) : undefined
            setNav(Sections.About)
            break;
          case (2):
            hash === "services" ? setFooter(FooterComponent.Disclaimer) : hash === "services/1" ? setFooter(FooterComponent.GoBackServices) : undefined
            setNav(Sections.Services)
            break;
          case (3):
            setFooter(undefined)
            setNav(Sections.Contact)
            break;
          }
      }}
      credits={{enabled: false, label: ""}}
      anchors={['home', 'about', 'services', 'contact']}
      menu='#menu'
      render={({ state, fullpageApi }) => {
        if (disableScrolling) {
          fullpageApi.setAllowScrolling(false, "all")
          fullpageApi.setKeyboardScrolling(false, "all")
        } else if (!disableScrolling && state.initialized) {
          fullpageApi.setAllowScrolling(true, "all")
          fullpageApi.setKeyboardScrolling(true, "all")
        }
        
        /* When a user loads the page initially and lands on the Services Page, we push the slide back to the home sevices page because the page is undefined */
        if (hash === "services/1" && servicePage === undefined && state.initialized){
          fullpageApi.moveSlideLeft()
        }

        
        if (hash === "services" && state.initialized) {
          fullpageApi.setAllowScrolling(false, "right")
          fullpageApi.setKeyboardScrolling(false, "right")
        } else if (hash !== "services" && state.initialized) {
          fullpageApi.setAllowScrolling(true, "right")
          fullpageApi.setKeyboardScrolling(true, "right")
        }

        if (modalOpen && state.initialized) {
          fullpageApi.setAllowScrolling(false, "all")
          fullpageApi.setKeyboardScrolling(false, "all")
        } else if (!modalOpen && state.initialized) {
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
              <MiniServices />
              <ServicePages data={servicePage !== undefined ? services[servicePage] : undefined} />
            </div>

            <div className='section'>
              <ContactSection />
            </div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}
