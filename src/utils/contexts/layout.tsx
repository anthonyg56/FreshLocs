"use client"

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Footer, { FooterComponent } from "@/components/layout/footer";
import Nav, { Sections } from "@/components/layout/nav";
import { Tiles } from "@/components/services/Carousel";
import DragHandle from "@/components/layout/DragHandle";
import NavDots from "@/components/layout/NavDots";
import { useRouter } from "next/navigation";

export type TLayoutContext = {
  footer: FooterComponent | undefined;
  triggerHandle: (nav?: Boolean, tile?: Tiles | undefined) => void;
  setNav: (section: Sections) => void;
  setFooter: (comp: FooterComponent | undefined) => void;
  handleOpen: boolean;
  disableScrolling: boolean;
  setScrolling: (value: boolean) => void;
  servicePage: Tiles | undefined;
  setPage: React.Dispatch<React.SetStateAction<Tiles | undefined>>;
}

export const LayoutContext = createContext<Partial<TLayoutContext>>({})

export const LayoutProvider = ({ children }: {children: React.ReactNode}) => {
  const [footer, setFooter] = useState<FooterComponent |undefined>(undefined)
  const [activeNav, setNav] = useState<Sections | undefined>(undefined)
  const [disableScrolling, setScrolling] = useState(false)
  const [handleOpen, setHandle] = useState(false)
  const [servicePage, setPage] = useState<Tiles | undefined>(undefined)

  const router = useRouter()

  useEffect(() => {

  }, [footer, activeNav, handleOpen, disableScrolling])

  const triggerHandle = (nav?: Boolean, tile?: Tiles | undefined) => {
    setHandle (!handleOpen)
    setScrolling(!handleOpen ? true : false)
  }

  const handlePageChange = (page: Tiles | undefined) => {
    router.push("#services/1")
    setPage(page)
  }

  return (
    <LayoutContext.Provider
      value={{
        footer,
        setFooter,
        setNav,
        triggerHandle,
        handleOpen,
        disableScrolling,
        setScrolling,
        servicePage,
        setPage,
      }}
    >
      <Nav active={activeNav} trigger={() => triggerHandle(true)}/>
        {children}
        {/* <NavDots active={activeNav} /> */}
      <Footer component={footer}/>
      <DragHandle
        section={activeNav}
        close={() => triggerHandle()}
        isOpen={handleOpen}
      />
    </LayoutContext.Provider>
  )
}