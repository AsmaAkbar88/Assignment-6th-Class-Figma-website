'use client'

import { useRouter } from 'next/navigation';
import { mplus } from '../UI/fonts';




const Hero = () => {
  const router = useRouter()
  return (
    <div className='relative z-10 '>

      {/* {*****back image*****} */}
      <div className=' bg-cover  h-screen ' style={{ backgroundImage: "url('/back.png')" }}>

        <div className='absolute inset-0 flex flex-col justify-center mt-4 text-center '>

          {/* Asma Heading  */}

          <div className="text-8xl font-extrabold text-red-800 ">
            <h1 className={`${mplus.className}`}>Asma Furniture</h1></div>

          {/* Furniture Detail  */}

          <div className='grid grid-col-2 max-w-4xl mx-auto'>
            <p className="text-3xl text-black mt-6 leading-relaxed"><span className={mplus.className}>
              Asma furniture provides a vide range of stylish and elegant designs of furniture for reception,Executive, waiting, conference, cafeteria, auditrium & call center. Most of the Products are standardized assuring re-order faclity.
            </span></p>
          </div>

          {/* Button  */}

          <div className=' flex justify-center items-center '>

            <button className='bg-white relative
             z-20 mt-12 text-red-800 border-2 border-red-700 
             rounded-lg px-12 py-6 font-extrabold hover:bg-red-50
              hover:text-red-900 text-3xl' onClick={() =>
               router.push('/Contact')}>Contact Me </button>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Hero
