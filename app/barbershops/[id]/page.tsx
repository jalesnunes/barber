import Footer from "@/app/_components/footer"
import PhoneItem from "@/app/_components/phoneItem"
import ServiceItemCard from "@/app/_components/serviceItemCard"
import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { Barbershop } from "@prisma/client"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: Barbershop
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    //   reviews: true,
    },
  })

  if (!barbershop) {
    return notFound()
  }

 

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop?.name}
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
        />

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

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
      </div>

      <div className="p-5 border-b border-solid">
        <h1 className="font-bold text-xl mb-3">{barbershop?.name}</h1>
        <div className="flex itens-center gap-2 mb-2">
            <MapPinIcon className="text-primary" size={18}/>
            <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="flex itens-center gap-2">
            <StarIcon className="text-primary fill-primary" size={18}/>
            <p className="text-sm">5.0 (833 evaluations)</p>
        </div>
      </div>  
      
      <div className="p-5 border-b border-solid space-y-2" >
        <h2 className="font-bold text-gray-400 tet-xs">ABOUT US</h2>
        <p className="text-sm text-justify">{barbershop?.description}</p>
      </div>

      <div className="p-5 border-b border-solid" >
         <h2 className="font-bold text-gray-400 tet-xs mb-3">SERVICES</h2>
         <div className="space-y-3">
            {barbershop.services.map(service => <ServiceItemCard key={service.id} service={service} />)}
         </div>
      </div>

      <div className="p-5 space-y-3">
            {barbershop.phones.map( (phone)=> (
                <PhoneItem key={phone} phone={phone} />
            ))}
      </div>

      <Footer />
    </div>
  )
}

export default BarbershopPage
