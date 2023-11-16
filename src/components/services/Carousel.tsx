"use client"

import services from '@/utils/data/services'
import React, { useContext, useEffect, useState } from 'react'
import ServiceTile from './ServiceTile'
import { LayoutContext, TLayoutContext } from '@/utils/contexts/layout'
import useScreenSize from '@/utils/hooks/useScreenSize'

export enum Tiles {
  StarterLocs,
  Retwists,
  Maintenace,
  More,
}

export default function Carousel() {
  const screenSize = useScreenSize()

  const { triggerHandle } = useContext(LayoutContext) as TLayoutContext

  /* Tracks what tile is active */
  const [expandedTile, setExpanded] = useState<Tiles | null>(null)

  /* numbers in the array indicate the index of the tiles that are visible, and since only 3 are visible at a time; initially set the first 3 as visible */
  const [visibleTiles, setVisible] = useState<Tiles[]>([0, 1, 2])

  useEffect(() => {

  }, [expandedTile, visibleTiles])

  const expandTile = (tile: Tiles | null) => {
    screenSize.width <= 768
      ?
    triggerHandle(false, tile)
      :
    setExpanded(tile)
  }

  const isVisible = (tile: Tiles) => visibleTiles.includes(tile)

  const shiftRight = () => {
    /* Check if there is an active index present, if so shift it first */
    if (expandedTile !== null && expandedTile < services.length - 1) {
      shiftActiveTileRight(expandedTile)
      return
    }

    /* Check if were at the end of the services array, if so end the function call */
    if (visibleTiles[2] >= services.length - 1) {
      return
    }


    const newVisibleTiles: number[] = [visibleTiles[0] + 1, visibleTiles[1] + 1, visibleTiles[2] + 1]
    setVisible(newVisibleTiles)
  }

  const shiftActiveTileRight = (index: number) => {
    /*Checks if the current expandedTile is equal to or greater than the furthest visible tile, and if were at the end of the array */
    if (index >= visibleTiles[2] && visibleTiles[2] < services.length - 1) {
      const newVisibleTiles: number[] = [visibleTiles[0] + 1, visibleTiles[1] + 1, visibleTiles[2] + 1]
      setVisible(newVisibleTiles)
      setExpanded(index + 1)

      return
    }

    setExpanded(index + 1)
  }

  const shiftLeft = () => {
    /* Check if there is an active index present, if so shift it first */
    if (expandedTile !== null && expandedTile > 0) {
      shiftActiveTileLeft(expandedTile)
      return
    }

    /* Check if were at the end of the services array, if so end the function call */
    if (visibleTiles[0] <= 0) {
      return
    }

    const newVisibleTiles: number[] = [visibleTiles[0] - 1, visibleTiles[1] - 1, visibleTiles[2] - 1]

    setVisible(newVisibleTiles)
  }

  const shiftActiveTileLeft = (index: number) => {
    if (index <= visibleTiles[0] && visibleTiles[0] > 0) {
      const newVisibleTiles: number[] = [visibleTiles[0] - 1, visibleTiles[1] - 1, visibleTiles[2] - 1]
      setVisible(newVisibleTiles)
      setExpanded(index - 1)

      return
    }

    setExpanded(index - 1)
  }

  const gridStyle = () => {
    if (expandedTile === null) {
      return ('grid-cols-[1fr_1fr_1fr]')
    } else if (expandedTile === visibleTiles[0]) {
      return ('grid-cols-[2fr_0.15fr_0.15fr]')
    } else if (expandedTile === visibleTiles[1]) {
      return ('grid-cols-[0.15fr_2fr_0.15fr]')
    } else if (expandedTile === visibleTiles[2]) {
      return ('grid-cols-[0.15fr_0.15fr_2fr]')
    }
  }

  return (
    <div>
      <div className={`grid ${gridStyle()} gap-x-[50px]`}>
        {services.map((item, index) => <ServiceTile
          expanded={expandedTile}
          data={item}
          isVisibile={(tile: Tiles) => isVisible(tile)}
          index={index}
          setExpanded={(tile: Tiles | null) => expandTile(tile)}
          key={index}
          screenSize={screenSize}
        />)}
      </div>


      <div>
        <div>
          {visibleTiles[0] !== 0 && <p onClick={(e) => shiftLeft()}>Go Left</p>}
        </div>

        {expandedTile && <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>}

        <div>
          {visibleTiles[2] < services.length - 1 && <p onClick={(e) => shiftRight()}>Go Right</p>}
        </div>
      </div>
    </div>
  )
}
