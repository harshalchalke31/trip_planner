import React, { act, useEffect, useRef } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import { Activity, Itinerary } from './ChatBox'
import { useTripDetail } from '@/app/Provider'
import { itinerary } from '@/app/api/aimodel/prompts'

function GlobalMap() {

    const mapContainerRef = useRef<HTMLDivElement | null>(null)
    const mapRef = useRef<mapboxgl.Map | null>(null)
    //@ts-ignore
    const { tripDetailInfo } = useTripDetail()

    useEffect(() => {
        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY as string || ""

        // initialize map only once
        if (!mapRef.current) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef?.current!, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: [-74.5, 40], // starting position [lng, lat]
                zoom: 1.7, // starting zoom
                projection: 'globe'
            })

        }


        // Remove existing markers before adding new
        const markers: mapboxgl.Marker[] = []

        if (tripDetailInfo?.itinerary) {
            tripDetailInfo.itinerary.forEach((itinerary: Itinerary) => {
                itinerary.activities.forEach((activity: Activity) => {
                    if (activity?.geo_coordinates?.longitude && activity?.geo_coordinates?.latitude) {
                        const marker = new mapboxgl.Marker({ color: 'red' })
                            .setLngLat([activity.geo_coordinates.longitude,
                            activity.geo_coordinates.latitude
                            ])
                            .setPopup(
                                new mapboxgl.Popup({ offset: 25 }).setText(activity.place_name)
                            )
                            .addTo(mapRef.current!)
                            markers.push(marker)
                            const coordinates = [activity?.geo_coordinates?.longitude, activity?.geo_coordinates?.latitude] as [number,number]
                            mapRef.current!.flyTo({
                                center:coordinates,
                                zoom:10,
                                essential:true,
                            })
                    }
                })
            });
        }
        return () => {
            // remove markers when data changes
            markers.forEach(marker => marker.remove())
        }
    }, [tripDetailInfo])
    return (
        <div ref={mapContainerRef}
            style={{
                widows: '95%',
                height: '76vh',
                borderRadius: 20,
            }}
        />
    )
}

export default GlobalMap
