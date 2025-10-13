'use client'

import { registerAction } from './actions'

export default function LoginForm() {
  return (
    <form
      action={registerAction}
      className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm space-y-4"
    >
      <h1 className="text-2xl font-semibold text-center">Login</h1>

      <div className="flex flex-col">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="border rounded p-2 mt-1"
          required
        />
      </div>

      <div className="flex flex-col">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="border rounded p-2 mt-1"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Sign In
      </button>
    </form>
  )
}
