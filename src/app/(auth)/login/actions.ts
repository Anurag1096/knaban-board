'use server'

import { redirect } from 'next/navigation'
import { verifyUser } from '@/lib/auth'

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Step 1: Basic validation
  if (!email || !password) {
    throw new Error('Missing email or password')
  }

  // Step 2: Verify user credentials
  const isValid = await verifyUser(email, password)
  if (!isValid) {
    throw new Error('Invalid credentials')
  }

  // Step 3: Call backend API (optional, e.g. for JWT)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  if (!res.ok) {
    throw new Error('Invalid credentials')
  }

  // Step 4: Redirect to dashboard
  redirect('/dashboard')
}
