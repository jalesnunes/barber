import { BarbershopService } from "@prisma/client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ServiceItemCardProps {
    service: BarbershopService
}

const ServiceItemCard = ( { service }: ServiceItemCardProps ) => {
    return(
        <Card>
            <CardContent className="flex gap-3 items-center p-3">
            
            <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
                <Image alt={service.name} src={service.imageUrl} fill className="object-cover rounded-lg"/>
            </div>

            <div className="space-y-2">
                <h3 className="font-semibold text-sm">{service.name}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>

                <div className="flex items-center justify-between">
                    <p className="text-primary font-bold text-sm">{Intl.NumberFormat("en-US", {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2
                    }).format(Number(service.price))}</p>

                    <Button variant="secondary" size="sm">RESERVE</Button>
                </div>
            </div>
            </CardContent>
        </Card>
    )
}

export default ServiceItemCard;