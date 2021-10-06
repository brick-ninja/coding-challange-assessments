import React from 'react'

//Header Sticky Component 
export default function Header({name}) {
  return (
    <div id='header-container' className='bg-background sticky top-0 z-50'>
      <div className='max-w-1182px mx-auto font-semibold text-sm sm:text-28px px-17px sm:px-60px py-30px'>
        {name}
      </div>
    </div>
  )
}
