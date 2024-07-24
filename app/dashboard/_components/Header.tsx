import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 border-b-2 shadow-sm flex items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg'>
            <Search />
            <input type="text" placeholder='Search...' className='outline-none'/>
        </div>
    </div>
  )
}

export default Header