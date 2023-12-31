import React from 'react'

export default function ({ isAuthenticated }: { isAuthenticated: boolean }) {
  return (
    <>
      <div className='bg-[#0D1323] flex flex-row text-end px-16 pt-5 h-16'>
        <div className='flex flex-row justify-start w-full'>
          <a href='/' className='text-white text-xl'>HOME</a>
        </div>
        <div className='flex flex-row justify-end w-full'>
          {
            isAuthenticated ? (
              <>
                <a href='/add' className='text-white text-xl'>ADD</a>
                <a href='/logout' className='text-white text-xl pl-12'>LOGOUT</a>
              </>
            ) : (
              <>
                <a href='/register' className='text-white text-xl'>REGISTER</a>
                <a href='/login' className='text-white text-xl pl-12'>LOGIN</a>
              </>
            )
          }
        </div>
      </div>
    </>
  )
}
