import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Link from 'next/link'
import React from 'react'
import { useRef } from 'react'
import { useRouter } from 'next/router';
export default function () {

    const router = useRouter();
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [loading, setLoading] = React.useState(false);




    const submitHandler = async (e: any) => {
        e.preventDefault();
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const data = {
            username: username,
            password: password
        }

        setLoading(true);
        const response = await fetch('/api/authUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })

        const res = await response.json();
        setLoading(false);
        if (res.message === 'success') {
            router.push(`/${username}?auth=true`);
        }
        else{
            alert('Wrong username or password');
        }
    }

    if (loading) {
        return (
            <Loader />
        )
    }
    return (
        <>
            <Navbar isAuthenticated={isAuthenticated}/>
            <main className='bg-[#0D1323] min-h-screen text-center justify-center'>
                <div className='text-white text-5xl pt-32'>
                    <h1>Login</h1>
                </div>
                <form className='flex flex-col items-center justify-center' onSubmit={submitHandler}>
                    <div className='flex flex-col items-center justify-center'>
                        <input className='bg-[#1D2145] text-white text-xl w-96 h-16 rounded-xl mt-10 px-5' type='text' placeholder='Username' ref={usernameRef}  />
                        <input className='bg-[#1D2145] text-white text-xl w-96 h-16 rounded-xl mt-10 px-5' type='password' placeholder='Password' ref={passwordRef}  />
                        <Link href='/' className='text-[#666BAD] text-xl mt-5'>Forgot Password?</Link>
                    </div>
                    <button type='submit' className='bg-[#4ACF8A] text-white text-xl w-96 h-16 rounded-xl mt-10 hover:bg-[#82ffbe]'>
                        Login
                    </button>
                </form>
            </main>
        </>
    )
}
