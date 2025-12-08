import SideBar from '@/components/Sidebar/Sidebar'

export default function DashboardLayout({children}:{children:React.ReactNode}){
return(
    <div className='flex  '>

        <SideBar/>

      <main className="flex flex-row p-6 md:flex-1  ">
        {children}
        
      </main>
    </div>
)
}