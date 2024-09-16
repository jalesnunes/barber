import { db } from "@/app/_lib/prisma"
import { Barbershop } from "@prisma/client"

interface BarbershopPageProps {
    params: Barbershop
}

const BarbershopPage = async ( { params } : BarbershopPageProps ) => {
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        }
    })
    return(
        <h1>{barbershop?.name}</h1>
    )
}

export default BarbershopPage