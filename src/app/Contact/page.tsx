import React from 'react'
import { robo } from '../UI/fonts'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div>
      <div className='text-red-800 flex justify-start items-start text-8xl p-14'><h1>Contact Us</h1></div>

      
      <form className='flex flex-col gap-6 ml-20 max-w-xl'>


        <div className='' >
        <input type="text" 
          placeholder='First Name'
          className='w-full p-3 border border-red-800 '/>
        </div>





        <div>
        <input type="Email" 
          placeholder='Email'
          className='w-full p-3 border border-red-800 '/>
        </div>

        <div className='col-span-1 '>
        <input type="Message" 
          placeholder='write your message / Order here....'
          className='w-full h-32 p-3 border border-red-800 '/>
        </div>
        <div><Button className='py-6 px-12 r bg-red-800 text-white border-2 border-red-800 rounded-full text-lg ml-40'>Submit</Button></div>
      </form>


      </div>
    
  )
}

export default page
