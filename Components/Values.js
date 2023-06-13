/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Values() {
    return (
        <div className='container mx-auto py-20'>
            <p className='text-xl font-medium text-gray-500 text-center'>WHY CHOOSE US?</p>
            <p className='text-5xl font-semibold text-gray-500 text-center mt-2'>Our Values</p>
            <div className='grid grid-cols-3 gap-16 py-20'>
                <div className='flex flex-col gap-5 items-center'>
                    <img src="/v1.svg" alt="" />

                    <p className='text-2xl font-semibold ml-6'>Speaking clubs</p>
                    <p className='text-gray-500 text-center ml-2'>In our school you will practice <br /> your speaking skills and just get <br /> a
                        lot of positive emotions!
                    </p>
                </div>

                <div className='flex flex-col gap-5 items-center'>
                    <img src="/v2.svg" alt="" />

                    <p className='text-2xl font-semibold'>Quality control</p>
                    <p className='text-gray-500 text-center'>A huge work has been done with <br /> the teachers and their work has <br /> been monitored thoroughly.
                    </p>
                </div>

                <div className='flex flex-col gap-5 items-center'>
                    <img src="/v3.svg" alt="" />

                    <p className='text-2xl font-semibold'>Progress analysis</p>
                    <p className='text-gray-500 text-center'>The CEF of Reference has been used  <br /> at our school.It allows to control our <br /> students success in studying.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Values