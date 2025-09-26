# 📦 Components README

This folder will contain all the components which are not specific to any pirticular page.

## 📂 Structure

components/
  Button/
    Button.tsx
    Button.module.css   # optional (if using CSS modules)
    index.ts            # optional (re-export for cleaner imports)
  Modal/
    Modal.tsx
    Modal.module.css
  Navbar/
    Navbar.tsx
    Navbar.module.css

---

## 📝 Guidelines

- **One folder per component**  
  Each component should live in its own folder with the same name (PascalCase).  
  Example: `Button/`, `Modal/`, `Navbar/`.

---

## 🗂 File Naming

- **Component file:** `ComponentName.tsx` (PascalCase)  
- **Styles (if needed):** `ComponentName.module.css` (or `.scss`)  
- **Re-exports:** `index.ts` (optional, helps shorten imports)  

---

## ♻️ Reusability

Keep components **generic** so they can be reused across multiple pages/features.  

✅ Good: `Button`, `Card`, `Modal`, `Input`  
❌ Bad: `DashboardCard`, `ProfileForm` (those belong in feature/page folders)  

---

## 📥 Imports

If you add an `index.ts` file inside each component folder, you can import like this:  

### Usage

```tsx
import { Button } from "@/components/Button";

export default function Example() {
  return <Button onClick={() => alert("Clicked!")}>Click Me</Button>;
}

