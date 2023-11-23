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
    <div className='col-span-6 rounded-[5px] overflow-hidden'>
      <APIProvider apiKey={APIKEY}>
        <div className='h-full'>
          <Map zoom={18} center={position} >
            <Marker position={position} />
          </Map>
        </div>
      </APIProvider>
    </div>
  )
}
