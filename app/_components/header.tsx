import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

export default function Header() {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.png" width={120} height={18} alt="logo" />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}
