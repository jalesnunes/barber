import Image from "next/image"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon} from "lucide-react"
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar } from "./ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import Link from "next/link"

export default function Sidebar() {
    return (
          <SheetContent className="overflow-y-auto [&::-webkit-scrollbar]:hidden">
            <SheetHeader>
              <SheetTitle className="text-left text-sm">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex items-center py-5 border-b border-solid gap-3">
              <Avatar>
                <AvatarImage src="https://avatar.iran.liara.run/public/20" />
              </Avatar>

              <div>
                  <p className="font-bold">Jales Nunes</p>
                  <p className="text-xs">jales@jales.com</p>
                </div>
            </div>

            <div className="py-5 flex flex-col gap-2 border-b border-solid">
              <SheetClose asChild>
                 <Button className="gap-2 justify-start" asChild>
                   <Link href="/">
                     <HomeIcon size={18}/>
                      Home
                  </Link>
                 </Button>
              </SheetClose>
              
              <Button className="gap-2 justify-start" variant="ghost">
                <CalendarIcon size={18}/>
                Appointments
              </Button>
            </div>

            <div className="py-5 flex flex-col gap-2 border-b border-solid">
              {quickSearchOptions.map( (option) => (
                <Button key={option.title} className="gap-2 justify-start" variant="ghost">
                <Image src={option.imgUrl} height={18} width={18} alt={option.title}/>
                {option.title}
              </Button>
              ))}
            </div>

            <div className="py-5 flex flex-col gap-2">
              <Button className="justify-start gap-2 " variant="ghost">
                <LogOutIcon size={18}/>
                Log out
              </Button>
            </div>
          </SheetContent>
    )
}