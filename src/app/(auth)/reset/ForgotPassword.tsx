import { useRouter } from "next/navigation";

interface ForgotPasswordProps {
  email: string;
  handleEmailChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailSubmit: () => void;
}
const ForgotPassword = ({
  email,
  handleEmailChange,
  handleEmailSubmit,
}: ForgotPasswordProps) => {
  const router = useRouter();

  return (
    <main className="flex flex-col">
      {/* Enter email section */}
      <span className="text-black text-center text-3xl  font-extrabold mb-10">
        Forgot Password
      </span>
      <form onSubmit={handleEmailSubmit}>
        <div className="flex flex-col">
          <label className="text-black  text-lg font-medium font-sans">
            Enter Email Address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="border rounded-2xl p-2 mt-1 mb-4 text-emerald-900"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full  bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 cursor-pointer"
        >
          Next
        </button>
      </form>
      <span className="my-10 font-bold text-blue-400 text-center">Or</span>
      <button
        onClick={() => router.push("/login")}
        className="w-full  bg-gray-100 border-1 border-blue-100 text-black py-2 rounded-lg hover:bg-gray-300 cursor-pointer mb-4"
      >
        Login
      </button>
      <button
        onClick={() => router.push("/register")}
        className="w-full  bg-gray-100 border-1 border-blue-100 text-black py-2 rounded-lg hover:bg-gray-300 cursor-pointer"
      >
        Signup
      </button>
    </main>
  );
};

export default ForgotPassword;
