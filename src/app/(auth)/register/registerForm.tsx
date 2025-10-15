"use client";

import { registerAction } from "./actions";

export default function LoginForm() {
  return (
    <>
      <button
        type="submit"
        className="w-full  bg-pink-300 text-white py-2 rounded hover:bg-pink-700  cursor-pointer mb-6"
      >
        Register with Google
      </button>

      <button
        type="submit"
        className="w-full  bg-pink-300 text-white py-2 rounded hover:bg-pink-700  cursor-pointer"
      >
        Register with Outlook
      </button>
      <form
        action={registerAction}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center text-amber-900">
          Register
        </h1>
        <div className="flex flex-col">
          <label htmlFor="fullName" className="text-black">Full Name</label>
          <input
            id="fullName"
            type="text"
            required
            name="fullName"
            className="border rounded-2xl p-2 mt-1 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-black">Email</label>
          <input
            type="email"
            name="email"
            className="border rounded-2xl p-2 mt-1 text-black"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-black">Password</label>
          <input
            type="password"
            name="password"
            minLength={7}
            maxLength={12}
            className="border rounded-2xl p-2 mt-1 text-black"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Sign In
        </button>
      </form>
    </>
  );
}
