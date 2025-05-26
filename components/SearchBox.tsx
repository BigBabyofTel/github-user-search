import Image from "next/image"
import { Button } from "@/components/ui/button";

// search icon is together with the input 
export default function SearchBox() {

     const search = "/icon-search.svg"
  return (
    <section className="w-11/12 p-2 border rounded-lg shadow-xl flex justify-around h-fit mx-auto">
    <Image src={search} alt="search" width={20} height={20} className="flex-shrink-0"/>
    <input type="text" placeholder="Search GitHub username..." className="">
    </input>
    <Button className="bg-blue-500 text-white">Search</Button>
  </section>
  )
}