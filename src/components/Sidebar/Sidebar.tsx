'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
//Add use pathname for route highlighting in next push.
export default function Sidebar() {
  const links = [
    { Name: "Home", href: "/dashboard" },
    { Name: "Analytics", href: "/dashboard/analytics" },
    { Name: "Settings", href: "/dashboard/settings" },
  ];

  const pathname = usePathname();

  return (
    <aside className="hidden sm:block p-10 bg-gray-100  dark:bg-gray-900 min-h-screen">
      <nav className="flex flex-col gap-3">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              className={isActive ? ` text-amber-400 text-center scale-125 py-2 hover:bg-amber-100 hover:rounded-xl` : ` text-blue-400 text-center py-0.5 hover:bg-amber-100 hover:rounded-xl`}
              key={link.Name}
              href={link.href}
            >
              {link.Name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
