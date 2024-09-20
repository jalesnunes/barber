"use client"

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

/**
 * A functional component that renders a phone number item with a copy button.
 *
 * @param phone - The phone number to be displayed and copied.
 * @returns A React element representing the phone number item.
 */
interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  /**
   * Handles copying the phone number to the clipboard.
   *
   * @param phone - The phone number to be copied.
   */
  const handleCopyPhoneToClipBoard = (phone: string) => {
    navigator.clipboard.writeText(phone)

    toast.success("Copied successfully")
  }

  return (
    <div className="flex justify-between" key={phone}>
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleCopyPhoneToClipBoard(phone)}
      >
        Copy
      </Button>
    </div>
  )
}

export default PhoneItem
