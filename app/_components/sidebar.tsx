"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

import googleIconImg from "../../public/googleIcon.svg"
import { signIn, useSession } from "next-auth/react"

export default function Sidebar() {
  const { data } = useSession()
  const handleLoginWithGoogle = async () => {
    await signIn("google")
  }
  return (
    <SheetContent className="overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <SheetHeader>
        <SheetTitle className="text-left text-sm">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        

        {data?.user ? (
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={data?.user?.image ?? ""} />
            </Avatar>

            <div >
             <p className="font-bold">{data.user.name}</p>
             <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
          <h2 className="font-bold">Hey, login</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <LogInIcon size="icon" />
            </Button>
          </DialogTrigger>

          <DialogContent className="w-[90%]">
            <DialogHeader>
              <DialogTitle>Sign in</DialogTitle>
              <DialogDescription>
                Sign in using your Google account
              </DialogDescription>
            </DialogHeader>

            <Button variant="outline" className="gap-2 font-bold" onClick={handleLoginWithGoogle}>
              <Image src={googleIconImg} alt="sign in with google" width={18} height={18}/>
              Google
            </Button>
          </DialogContent>
        </Dialog>
          </>
        )}
       
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Home
            </Link>
          </Button>
        </SheetClose>

        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Appointments
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              src={option.imgUrl}
              height={18}
              width={18}
              alt={option.title}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2 py-5">
        <Button className="gap-2  justify-start" variant="ghost">
          <LogOutIcon size={18} />
          Log out
        </Button>
      </div>
    </SheetContent>
  )
}
