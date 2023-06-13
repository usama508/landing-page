/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Teacher() {
    return (
        <div className='container mx-auto py-20'>
            <p className='text-xl font-medium text-gray-500 ml-2 uppercase'>Key Person</p>
            <p className='text-5xl font-semibold text-gray-500 ml-2 mt-2'>Meet our Teachers</p>
            <div className='grid grid-cols-3 gap-16 py-20 '>
                <div className='flex flex-col gap-5 ml-3'>
                    <img className='rounded-md lg:w-72 lg:h-72' src="/t1.avif" alt="" />

                    <p className='text-2xl font-semibold'>Usama Rasheed</p>
                    <div className='flex items-center gap-2'>
                        <img className='w-8 h-8' src="/f1.jpg" alt="" />
                         <p className='text-gray-500 '>
                        Pakistani Teacher
                    </p>
                    </div>
                   
                </div>

                <div className='flex flex-col gap-5 ml-3'>
                    <img className=' rounded-md lg:w-72 lg:h-72' src="/t2.avif" alt="" />

                    <p className='text-2xl font-semibold'>Christian Howard</p>
                    <div className='flex items-center gap-2'>
                        <img  src="/f2.svg" alt="" />
                         <p className='text-gray-500 '>
                        Italian Teacher
                    </p>
                    </div>
                   
                </div>

                <div className='flex flex-col gap-5 ml-3'>
                    <img className='rounded-md lg:w-72 lg:h-72' src="/t3.avif" alt="" />

                    <p className='text-2xl font-semibold'>Sandra Wilson</p>
                    <div className='flex items-center gap-2 mr-4'>
                        <img  src="/spain.svg" alt="" />
                         <p className='text-gray-500 '>
                       Spanish Teacher 
                    </p>
                    </div>
                   
                </div>

               

               

            </div>
        </div>
    )
}

export default Teacher