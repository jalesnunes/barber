"use client"

import { BarbershopService } from "@prisma/client"
import Image from "next/image"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Calendar } from "./ui/calendar"
import {enUS} from "date-fns/locale"
import { useState } from "react"

interface ServiceItemCardProps {
  service: BarbershopService
}

const TIME_LIST = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
]

/**
 * A functional component that renders a card displaying details about a barbershop service.
 *
 * @param service - The service object containing information about the barbershop service.
 * @returns A JSX element representing the service item card.
 */
const ServiceItemCard = ({ service }: ServiceItemCardProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined)

  const handleSeletedDate = (date: Date | undefined) => {
    setSelectedDate(date)
  }

  const handleSelectedTime = (time: string) => {
    setSelectedTime(time)
  }
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        <div className="relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px]">
          <Image
            alt={service.name}
            src={service.imageUrl}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold">{service.name}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>

          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-primary">
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
              }).format(Number(service.price))}
            </p>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="secondary" size="sm">
                  RESERVE
                 </Button>
              </SheetTrigger>
              <SheetContent className="px-0">
                <SheetHeader>
                  <SheetTitle>Reserve</SheetTitle>
                </SheetHeader>
                <div className="py-5 border-b border-solid">
                  <Calendar 
                    mode="single" 
                    locale={enUS}
                    selected={selectedDate}
                    onSelect={handleSeletedDate}
                    styles={{
                      head_cell: {
                        width: "100%",
                        textTransform: "capitalize",
                      },
                      cell: {
                        width: "100%"
                      },
                      button: {
                        width: "100%"
                      },
                      nav_button_previous: {
                        width: "32px",
                        height: "32px",
                      },
                      nav_button_next: {
                        width: "32px",
                        height: "32px",
                      },
                      caption: {
                        textTransform: "capitalize",
                      },
                    }}
                  />
                </div>

                {selectedDate && <div className="p-5 flex overflow-x-auto gap-3 [&::-webkit-scrollbar]:hidden">
                    {TIME_LIST.map(time => <Button key={time} onClick={() => handleSelectedTime(time)} className="rounded-full" variant={selectedTime == time ? "default" : "outline"}>{time}</Button>)}
                </div>}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceItemCard
