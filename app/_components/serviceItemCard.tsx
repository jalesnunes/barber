import { BarbershopService } from "@prisma/client"
import Image from "next/image"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

interface ServiceItemCardProps {
  service: BarbershopService
}

/**
 * A functional component that renders a card displaying details about a barbershop service.
 *
 * @param service - The service object containing information about the barbershop service.
 * @returns A JSX element representing the service item card.
 */
const ServiceItemCard = ({ service }: ServiceItemCardProps) => {
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

            <Button variant="secondary" size="sm">
              RESERVE
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceItemCard
