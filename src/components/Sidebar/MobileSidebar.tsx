"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
export default function MobileSidebar() {
  const links = [
    { Name: "Home", href: "/dashboard" },
    { Name: "Analytics", href: "/dashboard/analytics" },
    { Name: "Settings", href: "/dashboard/settings" },
  ];

  const pathname = usePathname();
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  function handleOpenSideBar() {
    setOpenSidebar(!openSidebar);
  }
  return (
    <>
      {openSidebar ? (
        <aside
          className="  fixed top-0 left-0 
    w-3/4 sm:hidden 
    max-w-xs
    h-screen 
    bg-gray-100 dark:bg-gray-900 
    p-10 z-50 
    transition-transform"
        >
          <div onClick={handleOpenSideBar}>XXX</div>
          <nav className="flex flex-col gap-3">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  className={
                    isActive
                      ? ` text-amber-400 text-center scale-125 py-2 hover:bg-amber-100 hover:rounded-xl`
                      : ` text-blue-400 text-center py-0.5 hover:bg-amber-100 hover:rounded-xl`
                  }
                  key={link.Name}
                  href={link.href}
                >
                  {link.Name}
                </Link>
              );
            })}
          </nav>
        </aside>
      ) : (
        <div className="absolute top-2 right-2  z-10 sm:hidden ">
          <Image
            src={"/delete_icon.svg"}
            alt="hamburg_icon"
            width={32}
            height={32}
            onClick={handleOpenSideBar}
          />
        </div>
      )}
    </>
  );
}
