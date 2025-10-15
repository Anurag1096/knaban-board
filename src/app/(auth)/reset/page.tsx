"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ForgotPassword from "./ForgotPassword";
import VerifyPasscode from "./VerifyPasscode";
export default function ResetPage() {
  const router = useRouter();
  const [resetFlowPoint, setResetFlow] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [code, setCode] = useState<number>();
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleEmailSubmit = () => {
    setResetFlow(1);
  };

  const handlePasscodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(Number(e.target.value));
  };

  const handlePasscodeSubmit = () => {
    setResetFlow(2);
  };

  if (resetFlowPoint == 1) {
    return (
      <VerifyPasscode
        code={code}
        handlePasscodeChange={handlePasscodeChange}
        handlePasscodeSubmit={handlePasscodeSubmit}
      />
    );
  }

  if (resetFlowPoint == 2) {
    return (
      <main>
        <span>Final point</span>
        <button
          className="bg-black cursor-pointer"
          onClick={() => router.push("/login")}
        >
          Save
        </button>
      </main>
    );
  }

  return (
    <ForgotPassword
      email={email}
      handleEmailChange={handleEmailChange}
      handleEmailSubmit={handleEmailSubmit}
    />
  );
}
