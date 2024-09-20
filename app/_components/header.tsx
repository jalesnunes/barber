import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

/**
 * This function represents the header component of a Next.js application.
 * It displays a logo image and a menu button that opens a sheet component.
 *
 * @returns {JSX.Element} - A JSX element representing the header component.
 */
export default function Header() {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.png" width={120} height={18} alt="logo" />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="flex items-center text-sm">Menu</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}
