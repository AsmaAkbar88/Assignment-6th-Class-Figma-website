import React from 'react'
import { robo } from '../UI/fonts'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {
  return (
<div className='flex flex-col justify-center items-center'>
<div className='p-4 text-center text-red-800 text-8xl'><h1>
Products
</h1>

</div>
<div className='p-8  text-md text-center max-w-2xl mx-auto tracking-wider leading-loose '>
    <p className={robo.className}>We create and sell all types of chairs. Please note that urgent orders may incur additional charges</p>
</div>
  
  {/* {chair 1 row} */}
 
<div className='flex justify-center space-x-48 p-12'>
    <Image src={'/chair1.png'} alt={' Chair1'} width={200} height={10}></Image>
    <Image src={'/chair2.png'} alt={' Chair2'} width={200} height={10}></Image>
    <Image src={'/chair3.png'} alt={' Chair3'} width={200} height={10}></Image>
</div>
<Link href={'/Contact'}>
<div className='flex justify-center space-x-56 p-4'>
  
    <Button className='bg-red-800 rounded-full py-4 px-10 text-lg'>Order Now</Button>
    <Button className='bg-red-800 rounded-full py-4 px-10 text-lg'>Order Now</Button>
    <Button className='bg-red-800 rounded-full py-4 px-10 text-lg'>Order Now</Button>
</div>
</Link>

 {/* {chair 1 row} */}
 
 <div className='flex justify-center space-x-48 p-12'>
    <Image src={'/chair4.png'} alt={' Chair1'} width={200} height={10}></Image>
    <Image src={'/chair5.png'} alt={' Chair2'} width={200} height={10}></Image>
    <Image src={'/6th.png'} alt={' Chair3'} width={200} height={10}></Image>
</div>
<Link href={'/Contact'}>
<div className='flex justify-center space-x-56 p-4'>
    <Button className='bg-red-800 rounded-full py-4 px-10 text-lg'>Order Now</Button>
    <Button className='bg-red-800 rounded-full py-4 px-10 text-lg'>Order Now</Button>
    <Button className='bg-red-800 rounded-full py-4 px-10 text-lg'>Order Now</Button>
</div>
</Link>



</div>

  )
}

export default page
