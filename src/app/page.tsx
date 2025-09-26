"use client";
import { Button } from "@/components/Button/Button";

export default function Home() {
  return (
    <div>
      Kanban board--url-- index
      <Button onClick={() => alert("hi")}>
        <span>Submit</span>
      </Button>
    </div>
  );
}
