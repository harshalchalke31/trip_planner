import React from 'react'
import { Timeline } from "@/components/ui/timeline";
import { Clock, ExternalLink, Star, Ticket, Wallet } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import HotelCardItem from './HotelCardItem';
import PlaceCardItem from './PlaceCardItem';

const Trip_Data = {
        "destination": "Goa",
        "duration": "5 Days",
        "origin": "Mumbai",
        "budget": "15000",
        "group_size": "2",
        "hotels": [
            {
                "hotel_name": "The Park Hyatt Goa Resort and Spa",
                "hotel_address": "Goa, India",
                "price_per_night": "8000",
                "hotel_image_url": "https://www.hyatt.com/content/dam/hyatt/hotels/goa/park-hyatt-goa-resort-and-spa/lobby.jpg",
                "geo_coordinates": {
                    "latitude": 15.384,
                    "longitude": 73.833
                },
                "rating": 4.5,
                "description": "Luxury resort with private beach and spa"
            },
            {
                "hotel_name": "The Leela Goa",
                "hotel_address": "Goa, India",
                "price_per_night": "7000",
                "hotel_image_url": "https://www.theleela.com/goa/images/lobby.jpg",
                "geo_coordinates": {
                    "latitude": 15.384,
                    "longitude": 73.833
                },
                "rating": 4.5,
                "description": "Luxury resort with private beach and spa"
            }
        ],
        "itinerary": [
            {
                "day": 1,
                "day_plan": "Arrival and Relaxation",
                "best_time_to_visit_day": "Morning",
                "activities": [
                    {
                        "place_name": "Baga Beach",
                        "place_details": "Popular beach with water sports and nightlife",
                        "place_image_url": "https://www.goa-tourism.com/images/baga-beach.jpg",
                        "geo_coordinates": {
                            "latitude": 15.555,
                            "longitude": 73.833
                        },
                        "place_address": "Baga, Goa, India",
                        "ticket_pricing": "Free",
                        "time_travel_each_location": "9:00 AM - 12:00 PM",
                        "best_time_to_visit": "Morning"
                    }
                ]
            },
            {
                "day": 2,
                "day_plan": "Water Sports and Adventure",
                "best_time_to_visit_day": "Afternoon",
                "activities": [
                    {
                        "place_name": "Dudhsagar Waterfalls",
                        "place_details": "Tallest waterfall in India with trekking and swimming",
                        "place_image_url": "https://www.goa-tourism.com/images/dudhsagar-waterfalls.jpg",
                        "geo_coordinates": {
                            "latitude": 15.333,
                            "longitude": 74.333
                        },
                        "place_address": "Dudhsagar, Goa, India",
                        "ticket_pricing": "500",
                        "time_travel_each_location": "2:00 PM - 5:00 PM",
                        "best_time_to_visit": "Afternoon"
                    }
                ]
            },
            {
                "day": 3,
                "day_plan": "Cultural Experience",
                "best_time_to_visit_day": "Evening",
                "activities": [
                    {
                        "place_name": "Fort Aguada",
                        "place_details": "Historical fort with stunning views and cultural significance",
                        "place_image_url": "https://www.goa-tourism.com/images/fort-aguada.jpg",
                        "geo_coordinates": {
                            "latitude": 15.533,
                            "longitude": 73.833
                        },
                        "place_address": "Fort Aguada, Goa, India",
                        "ticket_pricing": "200",
                        "time_travel_each_location": "6:00 PM - 9:00 PM",
                        "best_time_to_visit": "Evening"
                    }
                ]
            },
            {
                "day": 4,
                "day_plan": "Relaxation and Leisure",
                "best_time_to_visit_day": "Morning",
                "activities": [
                    {
                        "place_name": "Palolem Beach",
                        "place_details": "Quiet and secluded beach with swimming and relaxation",
                        "place_image_url": "https://www.goa-tourism.com/images/palolem-beach.jpg",
                        "geo_coordinates": {
                            "latitude": 15.333,
                            "longitude": 73.833
                        },
                        "place_address": "Palolem, Goa, India",
                        "ticket_pricing": "Free",
                        "time_travel_each_location": "9:00 AM - 12:00 PM",
                        "best_time_to_visit": "Morning"
                    }
                ]
            },
            {
                "day": 5,
                "day_plan": "Departure",
                "best_time_to_visit_day": "Morning",
                "activities": [
                    {
                        "place_name": "Goa International Airport",
                        "place_details": "International airport with flights to major cities",
                        "place_image_url": "https://www.goa-airport.com/images/goa-airport.jpg",
                        "geo_coordinates": {
                            "latitude": 15.333,
                            "longitude": 73.833
                        },
                        "place_address": "Goa International Airport, Goa, India",
                        "ticket_pricing": "Free",
                        "time_travel_each_location": "9:00 AM - 12:00 PM",
                        "best_time_to_visit": "Morning"
                    }
                ]
            }
        ]
    }


function Itinerary() {
  const data = [
    {
      title: "Recommended Hotels",
      content: (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {Trip_Data?.hotels.map((hotel, index)=>(
            <HotelCardItem hotel={hotel} key={index}/>
          ))}
        </div>
      ),
    },
    ...Trip_Data?.itinerary.map((Itinerary, index)=>({
      title: `Day ${Itinerary?.day}`,
      content: (
        <div key={index}>
          <p>Best Time: {Itinerary.best_time_to_visit_day}</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {Itinerary?.activities.map((activity, index)=>(
              <PlaceCardItem activity={activity} key={index}/>
            ))}
          </div>
        </div>
      )
    }))
]
  return (
    <div className="relative w-full h-[76vh] overflow-auto">
      <Timeline data={data} tripData={Trip_Data}/>
    </div>
  );
}

export default Itinerary
