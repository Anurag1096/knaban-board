import React from 'react'

export default function layout({children}:{children: React.ReactNode }) {
  return (
   <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        {/* <SideNav /> */}
        <p>This is the sidenave section which will show on every dashboard related page</p>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  )
}

