import Link from 'next/link'
import React from 'react'

export default function () {
    return (
        <main className='bg-[#0D1323] min-h-screen text-center justify-center'>
            <div className='text-white text-5xl pt-32'>
                <h1>Login</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <input className='bg-[#1D2145] text-white text-xl w-96 h-16 rounded-xl mt-10 px-5' type='text' placeholder='Username' />
                <input className='bg-[#1D2145] text-white text-xl w-96 h-16 rounded-xl mt-10 px-5' type='password' placeholder='Password' />
                <Link href='/' className='text-[#666BAD] text-xl mt-5'>Forgot Password?</Link>
            </div>
            <button className='bg-[#4ACF8A] text-white text-xl w-96 h-16 rounded-xl mt-10 hover:bg-[#3EC68B]'>
                Login
            </button>
        </main>
    )
}
