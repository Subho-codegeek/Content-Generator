import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchEvent}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white'>
        <h2 className='text-3xl font-bold'>Browse All Templates</h2>
        <p>What would you like to create today?</p>
        <div className='w-full flex justify-center items-center'>
            <div className='flex gap-2 items-center p-2 border rounded bg-white my-5 w-[50%]'>
                <Search className='text-primary'/>
                <input type="text" placeholder='Search' className='w-full outline-none bg-transparent text-black' onChange={(event)=>onSearchEvent(event.target.value)}/>
            </div>
        </div>
    </div>
  )
}

export default SearchSection