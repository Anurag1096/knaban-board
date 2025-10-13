// app/(auth)/login/page.tsx
import RegisterForm from "./registerForm";

export const metadata = {
  title: "Register | MyApp",
};

export default function RegisterPage() {
  return (
    <main>
      <RegisterForm />
    </main>
  );
}
