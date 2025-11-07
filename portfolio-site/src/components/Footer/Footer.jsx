import React from 'react'
import { IoIosMail, IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <div id='contact' className='scroll-mt-20 flex justify-around bg-black text-white p-10 md:p-12 items-center ' >
        <div>
            <h1 className="text-2xl md:text-4xl font-bold ">Contact</h1>
            <h3 className="text-sm md:text-2xl font-normal ">Feel free to reach out</h3>
        </div> 

        <ul className="text-sm md:text-lg">
            <li>
                <IoIosMail size={30} className='inline-block mx-3'/>
                sbohara579@gmail.com
            </li>
            <li>
                <IoMdCall size={30} className='inline-block mx-3' />
                9808188011
            </li>
        </ul>
    </div>
  )
}

export default Footer
