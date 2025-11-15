"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import VerifyPasscode from "./VerifyPasscode";
import NewPassword from "./NewPassword";
export default function ResetPage() {
  const router = useRouter();
  const [resetFlowPoint, setResetFlow] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [code, setCode] = useState<number>();
  const [newPassword, setNewPass] = useState<string>("");

  //-------------Email Check funtions-----------------------


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleEmailSubmit = () => {
    setResetFlow(1);
  };


  //------------ Verify Passcode functions--------------------
  const handlePasscodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(Number(e.target.value));
  };

  const handlePasscodeSubmit = () => {
    setResetFlow(2);
  };


  //-------------New Password functions---------------------
  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewPass(e.target.value);
  }

  function handlePasswordSubmit(e:React.FormEvent<SubmitEvent>) {
    //submit login
    e.preventDefault()
      router.push("/login");
    
  }




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
      <NewPassword
        newPass={newPassword}
        handlePasswordChange={handlePasswordChange}
        handlePasswordSubmit={handlePasswordSubmit}
      />
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
