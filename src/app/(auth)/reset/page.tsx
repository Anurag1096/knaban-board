'use client'

import {useState} from 'react'
import { useRouter } from 'next/navigation'
export default function ResetPage() {
  const router = useRouter()
  const [resetFlowPoint,setResetFlow]=useState<number>(0)
  
  if(resetFlowPoint==1){
    return (
         <main>
      {/* Enter email section */}
      <span>Veryfy yourself</span>
      <button className='bg-black cursor-pointer' onClick={()=>setResetFlow(2)}>next</button>
    </main>
    )
  }
  
  if(resetFlowPoint==2){
    return(<main>
        <span>Final point</span>
        <button className='bg-black cursor-pointer' onClick={()=> router.push('/login')}>Save</button>
    </main>)
  }

  
    return (
    <main>
       {/* Enter email section */}
        <span>First step</span>
        <button className='bg-black text-balck cursor-pointer' onClick={()=>setResetFlow(1)}>next</button>
    </main>
  );
}