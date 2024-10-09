"use client"

import { SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useRouter } from "next/navigation"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"

const formSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, {
      message: "Search must be at least 1 characters long",
    })
    .max(50, {
      message: "Search cannot be more than 50 characters long",
    }),
})

const SearchBar = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  })

  const router = useRouter()

  const handleSearch = (data: z.infer<typeof formSchema>) => {
    router.push(`/barbershops?title=${data.title}`)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSearch)}
        className="flex gap-2"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Search" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}

        />
        <Button type="submit">
          <SearchIcon />
        </Button>
      </form>
    </Form>
  )
}

export default SearchBar
