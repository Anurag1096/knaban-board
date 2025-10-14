"use client";
import { Button } from "@/components/Button/Button";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      Kanban board--url-- index
      <ul>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
      </ul>
    </div>
  );
}
