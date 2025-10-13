// app/(auth)/login/page.tsx
import LoginForm from "./loginForm";

export const metadata = {
  title: "Login | MyApp",
};

export default function LoginPage() {
  return (
    <main>
      <LoginForm />
    </main>
  );
}
