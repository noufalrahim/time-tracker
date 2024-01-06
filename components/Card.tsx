import React from 'react'

export default function Card({ onChangeTime, name, image }: { onChangeTime: any, name: string, image: any }) {
    return (
        <div className='bg-[#1d2145] w-56 h-[26rem] rounded-xl mx-[1rem] my-[1rem]'>
            <div className='bg-[#5746ea] w-56 h-72 rounded-xl'>
                <div className='flex flex-col items-left justify-left w-20 rounded-full '>
                    <img className='rounded-full mt-5 ml-5 border-2 border-white' src={image ? image : 'https://i.postimg.cc/GtfH38xP/c0749b7cc401421662ae901ec8f9f660-1.jpg'}/>
                    <div className='text-[#9e97f9] text-xs ml-5 mt-8'>
                        <p>Report for</p>
                    </div>
                    <div className='text-white text-2xl ml-5 mt-3'>
                        <h1>{name ? name : 'Unknown User'}</h1>
                    </div>
                </div>
            </div>
            <div className='mt-4 flex-col flex justify-center items-center'>
                <button onClick={() => onChangeTime('Daily')} className='text-white text-md pl-5 p-1 text-start hover:bg-[#5746ea] w-11/12 rounded-md'>Daily</button>
                <button onClick={() => onChangeTime('Weekly')} className='text-white text-md pl-5 p-1 text-start hover:bg-[#5746ea] w-11/12 rounded-md'>Weekly</button>
                <button onClick={() => onChangeTime('Monthly')} className='text-white text-md pl-5 p-1 text-start hover:bg-[#5746ea] w-11/12 rounded-md'>Monthly</button>
            </div>
        </div>
    )
}
