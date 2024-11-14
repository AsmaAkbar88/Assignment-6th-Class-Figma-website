import React from 'react'
import { Button } from '@/components/ui/button'
import { mplus } from '../UI/fonts'

const page = () => {
  return (
    <div className='p-20'>
      <div className='text-red-800 flex justify-start items-start text-7xl mb-10'><h1 className={mplus.className}>Contact Us</h1></div>

      {/* Form border & Map   */}
      <div className=' flex items-start space-x-20 p-4'>

        {/* Form */}
        <form className='flex flex-col gap-6  w-1/2 '>

          {/* Name Box  */}
          <div className='' >
            <input type="text"
              placeholder='First Name'
              className='w-full p-3 border border-red-800 ' />
          </div>

          {/* Email Box  */}
          <div>
            <input type="Email"
              placeholder='Email'
              className='w-full p-3 border border-red-800 ' />
          </div>

          {/* Message Box  */}
          <div className='col-span-1 '>
            <input type="Message"
              placeholder='write your message / Order here....'
              className='w-full h-44 p-3 border border-red-800 ' />
          </div>

          {/* Button  */}
          <div><Button className='py-6 px-12  bg-red-800 text-white border-2 border-red-800 rounded-full text-lg ml-40'>Submit</Button></div>
        </form>

        {/* Map  */}
        <div className=' border border-red-800 mr-80 h-80 w-1/2'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14475.61440501945!2d67.1153213!3d24.9012696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33922488f3725%3A0x3bfde63eb356ebc0!2sMillennium%20Mall!5e0!3m2!1sen!2s!4v1731049600511!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            className='w-full h-full'
          ></iframe>
        </div>

      </div>
    </div>


  )
}

export default page
