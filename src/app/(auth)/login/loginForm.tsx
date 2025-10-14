'use client'

import Link from 'next/link'
import { loginAction } from './actions'

export default function LoginForm() {
  return (<>
    
      <button
        type="submit"
        className="w-full  bg-pink-300 text-white py-2 rounded hover:bg-pink-700  cursor-pointer"
      >
        Login with Google
      </button>
  
         <button
        type="submit"
        className="w-full  bg-pink-300 text-white py-2 rounded hover:bg-pink-700  cursor-pointer"
      >
        Login with Outlook
      </button>

      <h3 className='text-center text-3xl text-amber-200'>Or</h3>
    <form
      action={loginAction}
      className="bg-black-700 p-6 rounded-2xl shadow-md w-full max-w-sm space-y-4"
    >
      <h1 className="text-2xl font-semibold text-center  text-amber-900">Login</h1>

      <div className="flex flex-col ">
        <label className='text-amber-900 text-xl'>Email</label>
        <input
          type="email"
          name="email"
          className="border rounded p-2 mt-1 text-emerald-900"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className='text-amber-900 text-xl'>Password</label>
        <input
          type="password"
          name="password"
          className="border rounded p-2 mt-1  text-emerald-900"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
      >
        Sign In
      </button>


      <span className='text-black'>Dont have an account <Link className = "text-blue-300" href={"/register"}> Register here</Link></span>
    </form>
    </>
  )
}
