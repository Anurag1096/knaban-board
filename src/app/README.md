# 🗂 App Folder README

The `app/` folder is the heart of a Next.js project using the **App Router**.  
It defines your application’s routes, layouts, pages, and nested structures.

---

## 📂 Structure

app/
layout.tsx # Root layout (applies to entire app)
page.tsx # Root page (homepage)
dashboard/
layout.tsx # Dashboard-specific layout
page.tsx # Dashboard index page
settings/
page.tsx # Nested page (dashboard/settings)



---

## 📝 Key Files

### `layout.tsx`
- Defines a **persistent UI shell** that wraps pages.  
- Commonly contains `<html>`, `<body>`, navigation, and footer.  
- Each folder can have its own `layout.tsx`.  
- Layouts are **nested** — child layouts render inside parent layouts.

```tsx
// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>My App Header</header>
        <main>{children}</main>
        <footer>Footer content</footer>
      </body>
    </html>
  );
}


page.tsx

Defines the UI for a route.

Each folder inside app/ can have a page.tsx representing a unique route.

Example:

app/page.tsx → /

app/dashboard/page.tsx → /dashboard

app/dashboard/settings/page.tsx → /dashboard/settings

// app/page.tsx
export default function HomePage() {
  return <h1>Welcome to the Homepage</h1>;
}

🔑 Concepts

Root layout → required in app/ (wraps the entire app).

Nested layouts → allow sections of the app to have their own persistent UI.

Pages → represent the actual routes users visit.

children → the placeholder where the current route/page is injected inside a layout.

## Behavior

app/layout.tsx wraps everything.

Visiting /dashboard renders:

Root layout (app/layout.tsx) → Dashboard layout (app/dashboard/layout.tsx) → Dashboard page (app/dashboard/page.tsx).

<html>
  <body>
    <header>My App Header</header>
    <main>
      <aside>Dashboard Sidebar</aside>
      <section>Dashboard Page Content</section>
    </main>
    <footer>Footer content</footer>
  </body>
</html>



--------------
