import Link from "next/link";
//Add use pathname for route highlighting in next push.
export default function Sidebar() {

  return (
    <aside className="w-64 p-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <nav className="flex flex-col gap-3">
        <Link href="/dashboard">Home</Link>
        <Link href="/dashboard/analytics">Analytics</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </nav>
    </aside>
  );
}
