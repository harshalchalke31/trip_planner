import React from 'react'
import { Timeline } from "@/components/ui/timeline";

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
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );

  return (
    <div>
      Trip Data
    </div>
  )
}

export default Itinerary
