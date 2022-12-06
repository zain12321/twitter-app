import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import { signIn } from 'next-auth/react'

function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div className='grid h-[250px] sm:h-screen bg-[#1d9fb0] place-items-center'>
            <BsTwitter className='text-[100px] sm:text-[200px] text-white'/>
        </div>
        <div className='flex items-center justify-center h-[250px] sm:h-screen'>

  <button className='space-x-4 px-3 rounded-md py-5 flex items-center font-medium text-[18px]
   bg-white'
   onClick={() => signIn('google')}>
  <FcGoogle className='h-6 w-6'/>
  <span>Sign In With Google</span>
  </button>
        </div>
    </div>
  )
}

export default Login