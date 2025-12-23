
import SidebarContainer from '@/components/Sidebar/SidebarContainer'

export default function DashboardLayout({children}:{children:React.ReactNode}){

return(
    <div className='flex overflow-x-hidden'>
       
       <SidebarContainer/>

      <main className="flex flex-row mt-12   md:flex-1  ">
        {children}
        
      </main>
    </div>
)
}