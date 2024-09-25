import PhoneItem from "@/app/_components/phoneItem"
import ServiceItemCard from "@/app/_components/serviceItemCard"
import Sidebar from "@/app/_components/sidebar"
import { Button } from "@/app/_components/ui/button"
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet"
import { db } from "@/app/_lib/prisma"
import { Barbershop } from "@prisma/client"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: Barbershop
}

/**
 * This is the main page component for displaying a barbershop's details.
 * It fetches the barbershop data from the database and renders its information.
 *
 * @param params - An object containing the barbershop's unique identifier.
 * @returns A React component that displays the barbershop's details.
 */
const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  // Fetch the barbershop data from the database, including its services.
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
      //   reviews: true,
    },
  })

  // If the barbershop data is not found, redirect to the 404 page.
  if (!barbershop) {
    return notFound()
  }

  // Render the barbershop details.
  return (
    <div>
      {/* Render the barbershop's cover image */}
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop?.name}
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
        />

        {/* Render the back button */}
        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        {/* Render the menu button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="absolute right-4 top-4"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <Sidebar />
        </Sheet>
      </div>

      {/* Render the barbershop's name, address, and rating */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop?.name}</h1>
        <div className="itens-center mb-2 flex gap-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="itens-center flex gap-2">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">5.0 (833 evaluations)</p>
        </div>
      </div>

      {/* Render the barbershop's description */}
      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="tet-xs font-bold text-gray-400">ABOUT US</h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>

      {/* Render the barbershop's services */}
      <div className="border-b border-solid p-5">
        <h2 className="tet-xs mb-3 font-bold text-gray-400">SERVICES</h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItemCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Render the barbershop's phone numbers */}
      <div className="space-y-3 p-5">
        {barbershop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopPage
