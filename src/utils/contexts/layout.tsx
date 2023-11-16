"use client"

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Footer, { FooterComponent } from "@/components/layout/footer";
import Nav, { Sections } from "@/components/layout/nav";
import { Tiles } from "@/components/services/Carousel";
import DragHandle from "@/components/layout/DragHandle";
import NavDots from "@/components/layout/NavDots";

export type TLayoutContext = {
  footer: FooterComponent | null;
  triggerHandle: (nav?: Boolean, tile?: Tiles | null) => void;
  setNav: (section: Sections) => void;
  setFooter: (comp: FooterComponent | null) => void;
  handleState: IHandleState;
  disableScrolling: boolean;
  setScrolling: (value: boolean) => void
}

interface IHandleState {
  isOpen: Boolean,
  tile: Tiles | null,
  nav: Boolean,
}

export const LayoutContext = createContext<Partial<TLayoutContext>>({})

export const LayoutProvider = ({ children }: {children: React.ReactNode}) => {
  const [footer, setFooter] = useState<FooterComponent | null>(null)
  const [activeNav, setNav] = useState<Sections | null>(null)
  const [disableScrolling, setScrolling] = useState(false)
  const [handleState, setHandle] = useState<IHandleState>({
    isOpen: false,
    tile: null,
    nav: false,
  })

  useEffect(() => {

  }, [footer, activeNav, handleState, disableScrolling])

  const triggerHandle = (nav?: Boolean, tile?: Tiles | null) => {
    // console.log(`isOpen: ${handleState.isOpen}`)
    // console.log(`Scrolling: ${disableScrolling}`)
    setHandle ({
      isOpen: !handleState.isOpen,
      nav: nav ? nav : false,
      tile: tile ? tile : null
    })
    setScrolling(!handleState.isOpen ? true : false)
  }

  return (
    <LayoutContext.Provider
      value={{
        footer,
        setFooter,
        setNav,
        triggerHandle,
        handleState,
        disableScrolling,
        setScrolling
      }}
    >
      <Nav active={activeNav} trigger={() => triggerHandle(true)}/>
        {children}
        {/* <NavDots active={activeNav} /> */}
      <Footer component={footer}/>
      <DragHandle
        section={activeNav}
        close={() => triggerHandle()}
        isOpen={handleState.isOpen}
        nav={handleState.nav}
        tile={handleState.tile}
      />
    </LayoutContext.Provider>
  )
}