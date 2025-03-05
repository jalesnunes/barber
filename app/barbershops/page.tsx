import BarbershopCard from "../_components/barbershopCard"
import Header from "../_components/header"
import SearchBar from "../_components/searchBar"
import { db } from "../_lib/prisma"

interface BarbershopsPageProps {
  searchParams: Promise<{
    title?: string
    service?: string
  }>
}

const BarbershopsPage = async (props: BarbershopsPageProps) => {
  const searchParams = await props.searchParams;
  const barbershops = await db.barbershop.findMany({
    where: {
      OR: [
        searchParams?.title ? {
          name: {
            contains: searchParams?.title,
            mode: "insensitive",
          }
        }: {},
        searchParams?.service? {
          services: {
            some: {
              name: {
                contains: searchParams?.service,
                mode: "insensitive",
              }
            }
          }
        }: {},
      ],
    },
  })
  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <SearchBar />
      </div>

      <div className="px-5">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Results for &quot;{searchParams.title || searchParams.service}&quot;
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {barbershops.map((barbershop) => (
            <BarbershopCard key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarbershopsPage
