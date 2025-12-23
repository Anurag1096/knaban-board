'use client'
import { useMediaQuery } from "@/lib/useMediaQuery";
import MobileSidebar from "./MobileSidebar"
import Sidebar from "./Sidebar"

export default function SidebarContainer(){
   const isDesktop= useMediaQuery("(min-width: 768px)");
    return isDesktop?<Sidebar/>:<MobileSidebar/>
}


