import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react"
import React from "react"

interface BarbershopItensProps {
    barbershop: Barbershop
}

const RecommendationCard = ( { barbershop }: BarbershopItensProps ) => {
    return(
        <Card className="min-w-[167px] rounded-2xl">
            <CardContent className="p-0 px-1 pt-1 pb-2">
                <div className="relative h-[159px] w-full">
                    <Image fill className="object-cover rounded-none" src={barbershop.imageUrl} alt={barbershop.name} />

                    <Badge className="absolute top-2 left-2 space-x-1" variant="secondary">
                        <StarIcon size={12} className="fill-primary text-primary"/>
                        <p className="text-xs font-semibold">5.0</p>
                    </Badge>
                </div>

                <div className="py-3 px-1">
                    <h3 className="font-semibold truncate">{barbershop.name}</h3>
                    <p className="text-sm text-gray-400 truncate">{barbershop.address}</p>
                    <Button variant="secondary" className="w-full mt-3" asChild>Reserve</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default RecommendationCard