import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopCard from "./_components/barbershopCard"
import Footer from "./_components/footer"
import { quickSearchOptions } from "./_constants/search"
import BookinItem from "./_components/bookingItem"


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
          {quickSearchOptions.map((option) => (
            <Button className="flex gap-3" variant="secondary" key={option.title}>
              <Image src={option.imgUrl} alt={option.title} width={16} height={16} />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="relative mx-0 mt-6 h-[150px] w-full">
          <Image
            alt="book with the best barbers"
            src="/banner-01.png"
            fill
            className="rounded-lg object-cover"
          />
        </div>

       <BookinItem />

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
