"use client"

import React, { useState } from 'react'
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  Marker,
} from "@vis.gl/react-google-maps"

const APIKEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ""

export default function GoogleMap() {
  const position = { lat: 39.85205146924294, lng: -86.12268932422003}
  return (
    <div className='col-span-6 rounded-[5px] overflow-hidden pt-10 md:mx-auto md:w-[75%] lg:w-full lg:pt-0 lg:mx-0 lg:col-start-7'>
      <APIProvider apiKey={APIKEY}>
        <div className='h-[350px] w-full lg:w-auto lg:h-full'>
          <Map zoom={18} center={position} >
            <Marker position={position} />
          </Map>
        </div>
      </APIProvider>
    </div>
  )
}
