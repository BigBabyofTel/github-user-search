import Image from "next/image"
import { Button, TextField } from "@mui/material"
import {InputAdornment} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"


// search icon is together with the input 
export default function SearchBox() {

     const search = "/icon-search.svg"
  return (
    <section className="w-11/12 p-2 border rounded-lg shadow-xl flex justify-around h-fit mx-auto">
      <TextField id="input-with-icon-textfield"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
       placeholder="Search GitHub profiles..."
        variant="standard"
        
        />
    <Button variant="contained">Search</Button>
    
  </section>
  )
}