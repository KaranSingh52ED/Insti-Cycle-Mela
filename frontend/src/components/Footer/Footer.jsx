import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-30 gap-4 p-5  bg-black text-white flex flex-col items-center justify-center'>
      <div className='flex gap-8'>
        <a href="/about" className='text-gray-400 hover:text-white'>About</a>
        <a href="/contact" className='text-gray-400 hover:text-white'>Contact</a>
        <a href="/faq" className='text-gray-400 hover:text-white'>FAQ</a>
        <a href="/team" className='text-gray-400 hover:text-white'>Team</a>

      </div>
      <h1 className='text-sm text-gray-600'>Copyright. IITM WebOps Team</h1>
    </div>
  )
}

export default Footer
