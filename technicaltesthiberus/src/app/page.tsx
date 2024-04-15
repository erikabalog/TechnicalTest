import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="h-screen text-4xl flex flex-col justify-center items-center">
      <h1>Home Page</h1>

      <Link href="/sign-up">
        <p className="mt-8 opacity-50 font-bold text-green-600 ml-2 cursor-pointer underline">
          <FaAngleLeft className="inline nr-1" /> No Account? Signup here
        </p>
      </Link>

      <Link href="/login">
        <p className="mt-8 opacity-50 font-bold text-green-600 ml-2 cursor-pointer underline">
          <FaAngleLeft className="inline nr-1" /> Already have an account? Login
          here
        </p>
      </Link>
    </div>
  );
}
