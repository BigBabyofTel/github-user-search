import Image from "next/image"
import { Button, TextField } from "@mui/material"
import {InputAdornment} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"


// search icon is together with the input 
export default function SearchBox() {

     const search = "/icon-search.svg"
  return (
    <section className="w-11/12 p-2 border rounded-lg shadow-xl flex justify-between h-fit mx-auto">
    <section className=" w-1/2 flex items-center">
    <SearchIcon />
      <input
        type="text"
        placeholder="Search GitHub profiles..."
        className="border-none outline-none ml-1" />
    </section>

    <Button variant="contained">Search</Button>
    
  </section>
  )
}