import React, { useState } from 'react'

const dropdown_menu = ({childern, href, DropContent}) => {

  const [open, setOpen] = useState(false);
  const showDrop = open && DropContent

  return (
    <div 
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}
    className='group relative h-fit w-fit'>
      <a className='relative text-white' href={href}>
        {childern}
         {/* TODO : Render Animation Unoderline  */}
         <span 
         style={{
          transform: open ? "scaleX(1)" : "scaleX(0)",
         }} 
         className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-black transition-transform duration-300 ease-out'></span>
      </a>
      {/* Render DropDown and Content */}
    </div>
  )
}

export default dropdown_menu
