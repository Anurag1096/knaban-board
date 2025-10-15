
import React from "react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md p-6 bg-gray-100 rounded-2xl shadow-md">
        {children}
      </div>
    </section>
  );
}
