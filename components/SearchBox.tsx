"use client"

import { Button } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { useState } from "react"
import { SearchBoxProps } from "@/app/types"

// search icon is together with the input 
export default function SearchBox({ onSearch}: SearchBoxProps) {

  const [username, setUsername] = useState<string>("")
  

  function handleSearch() {
    onSearch(username)
  }



console.log(username)

console.log()


  return (
    <section className="w-11/12 p-2 border rounded-lg shadow-xl flex justify-between h-fit mx-auto">
    <section className=" w-1/2 flex items-center">
    <SearchIcon />
      <input
        type="text"
        placeholder="Search GitHub profiles..."
        className="border-none outline-none ml-1" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
    </section>

    <Button variant="contained"
    onClick={handleSearch}
    disabled={!username.trim()}
    >Search</Button>
    
  </section>
  )
}