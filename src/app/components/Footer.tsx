
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black text white  pl-5'>

            <div className='flex justify-between '>

                {/* Left Section */}
                <div className=' md:w-1/3'>
                    <h3 className='text-3xl font-bold mb-2 text-white'>Asma Akbar</h3>
                    <p className='text-gray-400'>Frontend Developer</p></div>


                {/* Right Section  */}

                <div className=' md:w-1/3  text-white'>
                    <h4 className='text-xl font-semibold mb-4'>Quick Links</h4>
                    <div className='flex justify-center items-center space-x-8'>
                        <Link href="/" className='hover:text-red-800  '>Home</Link>
                        <Link href="/Servucess" className='hover:text-red-800 '>Services</Link>
                        <Link href="/Products" className='hover:text-red-800 '>Products</Link>
                        <Link href="/Contact" className='hover:text-red-800 '>Contact</Link>
                    </div>
                </div>

                {/* last line */}

            </div>
            <div className="mt-4 pt-4 border-t border-gray-800 text-center text-gray-400">
                <p> &copy; {new Date().getFullYear()}
                    Asma Akbar .All rights reserved</p>
            </div>



        </footer>
    )
};


export default Footer