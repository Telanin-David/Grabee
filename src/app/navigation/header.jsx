
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {

    const [menuOpen,setMenuopen] = useState(false);

 
    function change() {
      const newTrackerState = !menuOpen;
      setMenuopen(newTrackerState);
      console.log(newTrackerState);
    }

    return (
         
          <div className=" fixed top-0 w-full bg-white ">
            <div className=" flex font-bold text-2xl space-x-6 text-gray-950 justify-end py-5 pr-11  ">
                <div className="xs:hidden md:flex space-x-6 my-auto ">
                    <h1 className=" transition-all duration-500 ease-in-out hover:text-purple-600  hover:text-3xl"> Pricing </h1>
                    <h1 className="transition-all duration-500 ease-in-out hover:text-purple-600  hover:text-3xl"> Blog </h1>
                    <h1 className=" transition-all duration-500 ease-in-out hover:text-purple-600 hover:text-3xl"> Features </h1>

                </div>

                <div className="rounded-lg xs:hidden md:flex bg-purple-200 text-purple-600 px-10 py-4 transition-all hover:bg-purple-600 hover:text-gray-50 duration-500 ease-in-out ">
                    <h1> Join Waitlist </h1>
                </div>

                <div className="xs:flex justify-end items-center gap-x-10 p-2 w-2/12 h-fit md:hidden ">
                    <div onClick={change} className='xs:block md:hidden ml-auto  '>
                        { menuOpen 
                        ? <Image src="/assets/nav-assets/closed.svg"  alt="menu" width={50} height={50} className="  h-6 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" /> 
                        : <Image src="/assets/nav-assets/ham-menu.svg"  alt="menu" width={50} height={50} className="  h-6 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" />
                        }
              
                    </div>
        
      
                </div>
           </div>
            
            <div className='md:hidden '>
                <div className={menuOpen ? " flex-col mt-9 mb-2 mx-auto fixed left-10 w-11/12 h-custom-height3 py-7  bg-white" : "hidden"}>
                    <h1 className=' font-extrabold text-purple-600 text-3xl text-center'> Grabee</h1>

                    <div className=' font-extrabold text-gray-500 text-xl px-7 space-y-4 my-12 text-center'>

                        <div onClick={change} className='space-y-4 transition-all duration-500 ease-in-out hover:text-blue-700 hover:text-2xl'>
                            <p>Pricing </p>
                           
                        </div>

                        <div onClick={change} className='space-y-4 transition-all duration-500 ease-in-out  hover:text-blue-700 hover:text-2xl'>
                            <p>Blog </p>
                            
                        </div>

                        <div onClick={change} className='space-y-4 transition-all duration-500 ease-in-out hover:text-blue-700 hover:text-2xl'>
                            <p>Features </p>
                            
                        </div>

                        <div onClick={change} className=' '>
                            <div className='my-12  h-fit w-fit mx-auto bg-blue-600 text-gray-50 text-base transition-all duration-500 ease-in-out hover:text-lg rounded-lg font-bold'>
                                <p className='py-3 px-5'>Join Waitlist </p>
                            </div>

                        </div>

                    </div>


                    <div className=" flex justify-center items-center p-1 space-x-2 my-2">

                        <div className=" flex w-7 h-7 rounded-full bg-purple-600 items-center ">
                            <Image src="/assets/help/facebook.svg" alt="facebook" width={50} height={50} className=" w-fit rounded-full mx-auto " />
                        </div>

                        <div className=" flex w-7 h-7 rounded-full bg-purple-600 items-center ">
                            <Image src="/assets/help/instagram.svg" alt="ig" width={50} height={50} className=" w-fit rounded-full mx-auto " />
                        </div>

                        <div className=" flex w-7 h-7 rounded-full bg-purple-600 items-center ">
                            <Image src="/assets/help/twitter.svg" alt="x" width={50} height={50} className=" w-fit rounded-full mx-auto " />
                        </div>

                    </div>

                    <div className="flex xs:justify-center md:justify-between items-cente my-3">
                        <p>&copy; 2024 Grabee Ng. All Rights Reserved.</p>
                    </div>

                </div>
            </div>
          </div>
        
          
                
    );
}