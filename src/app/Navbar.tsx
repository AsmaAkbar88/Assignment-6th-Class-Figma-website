import Link from "next/link"
import React from "react"
import Image from "next/image"



const Navbar = () => {
  return (

    
      
       <nav className=' text-3xl flex justify-end space-x-12 p-2 bg-gray-200'>
      
         <Image src={'/Alogo.png'} alt={'Logo'} width={300} height={100} className='absolute z-30' 
             style={{ left: '-12px', top: '-8px' }} ></Image> 

        <Link href={'/'} className='hover:text-blue-500 ' >Home</Link>
        <Link href={'/Servicess'} className='hover:text-blue-500' >Services</Link>
        <Link href={'/Products'} className='hover:text-blue-500' >Products</Link>
        <Link href={'/Contact'} className='hover:text-blue-500 ' >Contact</Link>
        

      </nav>


  )
}

export default Navbar