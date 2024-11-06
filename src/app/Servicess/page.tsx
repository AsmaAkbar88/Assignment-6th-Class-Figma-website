import React from 'react'
import { mplus, robo } from '../UI/fonts'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center p-16'>
      <div className='mb-4'>
        <h1 className={`${mplus.className} text-8xl text-red-800`}>
          Our service
        </h1></div>


      <div className='text-2xl text-center leading-loose  max-w-2xl p-4'><p>We offer a wide range of furniture for sale and custom orders. Our focus is on high-quality products and excellent customer service.</p></div>




<div className=' p-16 flex items-center space-x-8 mt-8  leading-loose tracking-wide '>
  <div className=' max-w-3xl text-2xl leading-loose text-left  mr-8 '><p className={mplus.className}>We deal in a variety of chair brands, offering all types of chairs and office tables at competitive prices and excellent quality. If the chair doesn’t meet your preferences, you can return it. We supply chairs for hospitals, schools, colleges, offices, and companies, all available for custom orderss</p></div>
<div className='flex-shrink-0' >
  <Image src={'/table.png'} alt={'table Chair pic'} width={500} height={700}
  className=''></Image>
</div>
</div>




    </div>
  )
}

export default page
