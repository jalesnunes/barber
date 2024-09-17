"use client"

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
    phone: string
}

const PhoneItem = ({phone}: PhoneItemProps) => {
    const handleCopyPhoneToClipBoard = ( phone: string ) => {
        navigator.clipboard.writeText(phone)

        toast.success("Copied successfully")
      }

    return(
        <div className="flex justify-between" key={phone}>
                    <div className="flex items-center gap-2">
                        <SmartphoneIcon />
                        <p className="text-sm">{phone}</p>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => handleCopyPhoneToClipBoard(phone)}>Copy</Button>
                </div>
    )
}

export default PhoneItem