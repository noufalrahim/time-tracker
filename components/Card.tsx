import React from 'react'

export default function Card({ onChangeTime }: { onChangeTime: any }) {
    return (
        <div className='bg-[#1d2145] w-56 h-[25rem] rounded-xl'>
            <div className='bg-[#5746ea] w-56 h-72 rounded-xl'>
                <div className='flex flex-col items-left justify-left w-20 rounded-full'>
                    <img className='rounded-full mt-5 ml-5 border-2 border-white' src='https://media.licdn.com/dms/image/D5603AQHHzazLfgFqfg/profile-displayphoto-shrink_800_800/0/1685229003246?e=2147483647&v=beta&t=fwGQ3HuirH_wy3598rC1rcQJXXfJlIn4t81Gs95pvd4' alt='1' />
                    <div className='text-[#9e97f9] text-xs ml-5 mt-8'>
                        <p>Report for</p>
                    </div>
                    <div className='text-white text-2xl ml-5 mt-3'>
                        <h1>NOUFAL RAHIM</h1>
                    </div>
                </div>
            </div>
            <div className='mt-4 flex-col flex justify-start items-start'>
                <button onClick={() => onChangeTime('Daily')} className='text-white text-md ml-5 mt-1'>Daily</button>
                <button onClick={() => onChangeTime('Weekly')} className='text-white text-md ml-5 mt-1'>Weekly</button>
                <button onClick={() => onChangeTime('Monthly')} className='text-white text-md ml-5 mt-1'>Monthly</button>
            </div>
        </div>
    )
}
