"use client"

import SearchBox from "@/components/SearchBox";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useUserData } from "@/lib/userData";


export default function Home() {

 const { name } = useUserData()
 

  return (
    <>
    <header className="w-11/12 mx-auto py-[32px] flex justify-between items-center">
      <h1 className="text-[26px]">
        Dev Finder
      </h1>
      <section className="h-full flex justify-between">
        {/* add a swtich that will change the text */}
        <span className="mr-1">Dark</span>
        <DarkModeIcon />
      </section>
    </header>
   <SearchBox />
   <div className="border w-11/12 mt-5 h-[600px] mx-auto rounded-lg shadow-xl p-2">
    <div className="flex">
      <section>image</section>
      <section>titles</section>
    </div>
   </div>

    </>
  );
}
