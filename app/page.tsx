import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopCard from "./_components/barbershopCard"
import { quickSearchOptions } from "./_constants/search"
import BookinItem from "./_components/bookingItem"
import SearchBar from "./_components/searchBar"
import Link from "next/link"

/**
 * The Home component is the main landing page of the application.
 * It displays various sections such as search, quick search options,
 * bookings, recommendations, and popular barbershops.
 *
 * @returns {JSX.Element} - The Home component.
 */
const Home = async () => {
  // Fetch all barbershops from the database
  const babershops = await db.barbershop.findMany({})

   // Fetch popular barbershops from the database, ordered by name in descending order
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

        <div className="mt-6">
          <SearchBar />
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="flex gap-3"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}> 
                <Image
                  src={option.imgUrl}
                  alt={option.title}
                  width={16}
                  height={16}
                />
                {option.title}
              </Link>
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
    </div>
  )
}

export default Home
