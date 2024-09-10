import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopCard from "./_components/barbershopCard"
import Footer from "./_components/footer"
import hairImg from "../public/hair.svg"
import beardImg from "../public/beard.svg"
import finishImg from "../public/finish.svg"

const Home = async () => {
  const babershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Hi, Jales!</h2>
        <p>Friday, August 8</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Search" className="" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="flex gap-3" variant="secondary">
            <Image src={hairImg} alt="bair" width={16} height={16}/>
            Hair
          </Button>

          <Button className="flex gap-3" variant="secondary">
            <Image src={beardImg} alt="beard" width={16} height={16}/>
            Beard
          </Button>

          <Button className="flex gap-3" variant="secondary">
            <Image src={finishImg} alt="finish" width={16} height={16}/>
            Finish
          </Button>

          <Button className="flex gap-3" variant="secondary">
            <Image src={finishImg} alt="finish" width={16} height={16}/>
            Finish
          </Button>

          <Button className="flex gap-3" variant="secondary">
            <Image src={finishImg} alt="finish" width={16} height={16}/>
            Finish
          </Button>
        </div>

        <div className="relative mx-0 mt-6 h-[150px] w-full">
          <Image
            alt="book with the best barbers"
            src="/banner-01.png"
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <h3 className="text-bold mt-6 text-xs text-gray-400">SCHEDULED</h3>

        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmed</Badge>
              <h3 className="font-bold">Hair Cut</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Vintage Barber</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">August</p>
              <p className="text-2xl">07</p>
              <p className="text-sm">9:45pm</p>
            </div>
          </CardContent>
        </Card>

        <h3 className="text-bold mt-6 text-xs text-gray-400">RECOMENDATIONS</h3>
        <div className="mt-6 flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {babershops.map((babershop) => (
            <BarbershopCard key={babershop.id} barbershop={babershop} />
          ))}
        </div>

        <h3 className="text-bold mt-6 text-xs text-gray-400">POPULAR</h3>
        <div className="mt-6 flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((babershop) => (
            <BarbershopCard key={babershop.id} barbershop={babershop} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
