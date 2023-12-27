import React from 'react'

export default function TinyCard({title, timeframes, image, bgColor}: {title: string, timeframes: any, image: string, bgColor: string}) {
    return (
        <div className={`bg-[${bgColor}] w-56 h-[12rem] mt-[0.5rem] mb-[0.5rem] ml-[1rem] rounded-xl bg-[url("/images/icon-${image}.svg")] bg-no-repeat bg-right-top`}>
            <div className='bg-[#34397b] w-56 h-[10rem] rounded-xl mt-[2rem] '>
                <div className='flex flex-row items-left justify-between pt-5 px-5 rounded-full'>
                    <span className='text-white text-md mt-1'>{title}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 8a2 2 0 100-4 2 2 0 000 4zm0 4a2 2 0 100-4 2 2 0 000 
                        4zm0 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className='flex flex-col'>
                    <span className='text-white text-5xl ml-5 mt-3'>{timeframes.current}hr</span>
                    <span className='text-sm ml-6 mt-1 text-[#666bad]'>Last Week - {timeframes.previous}hr</span>
                </div>
            </div>
        </div>
    )
}

