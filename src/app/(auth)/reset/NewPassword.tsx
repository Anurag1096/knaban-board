"use client";
import { useState } from "react";
interface PasswordProps {
  newPass: string;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordSubmit: () => void;
}
const NewPassword = ({
  newPass,
  handlePasswordChange,
  handlePasswordSubmit,
}: PasswordProps) => {
  const [confirmPass, setConfirmPass] = useState<string>("");
  function handleConfirm(e:React.ChangeEvent<HTMLInputElement>){
    setConfirmPass(e.target.value)
  }
  return (
    <main>
      <form onSubmit={handlePasswordSubmit}>
        <div className="flex flex-col">
          <label
            className="text-black  text-lg font-medium font-sans"
            htmlFor="npassword"
          >
            Enter New password
          </label>
          <input
            id="npassword"
            type="password"
            name="newPassword"
            minLength={7}
            maxLength={12}
            value={newPass}
            onChange={handlePasswordChange}
            className="border rounded-2xl p-2 mt-1 mb-4 text-emerald-900"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-black  text-lg font-medium font-sans"
            htmlFor="confirm_password"
          >
            Confirm Password
          </label>
          <input
          type="password"
          id="confirm_password"
          name="confirmPassword"
          minLength={7}
          maxLength={12}
          value={confirmPass}
          onChange={handleConfirm}
          className="border rounded-2xl p-2 mt-1 mb-4 text-emerald-900"

          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPassword;
