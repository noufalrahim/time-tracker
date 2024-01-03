import Navbar from '@/components/Navbar'
import React from 'react'
import { useRef } from 'react'
import { useRouter } from 'next/router';
export default function () {

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    if(password !== confirmPassword) {
      alert('Password does not match');
      return;
    }else{
      router.push('/add?username=' + username + '&code=' + password);
    }
  }

  return (
    <>
    <Navbar isAuthenticated={false}/>
    <div className='bg-[#0D1323] min-h-screen text-center justify-center pb-20'>
        <div className='text-white text-5xl pt-32'>
            <h1>Register</h1>
        </div>
        <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
            <input className='bg-[#1D2145] text-white text-xl w-96 h-16 rounded-xl mt-10 px-5' type='text' placeholder='Username' ref={usernameRef} />
            <input className='bg-[#1D2145] text-white text-xl w-96 h-16 rounded-xl mt-10 px-5' type='password' placeholder='Password' ref={passwordRef} />
            <input className='bg-[#1D2145] text-white text-xl w-96 h-16 rounded-xl mt-10 px-5' type='password' placeholder='Confirm Password' ref={confirmPasswordRef} />
            </div>
            <button type='submit' className='bg-[#4ACF8A] text-white text-xl w-96 h-16 rounded-xl mt-10 hover:bg-[#82ffbe]'>
            Register
            </button>
        </form>
    </div>
    </>
  )
}
