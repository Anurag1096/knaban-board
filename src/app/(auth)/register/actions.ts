import { redirect } from 'next/navigation'


export async function registerAction(formData:FormData){
 const email = formData.get('email') as string
  const password = formData.get('password') as string

   if (!email || !password) {
    throw new Error('Missing email or password')
  }

  //Calling logic


  redirect('/dashboard')
}