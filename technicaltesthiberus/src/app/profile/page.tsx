"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  const logoutUser = async () => {
    try {
      await axios.get("api/users/logout");
      router.push("/");
    } catch (error: any) {
      console.log("Logout failed!" + error.message);
    }
  };
  return (
    <div className="mx-5">
      <div className="my-10 flex justify-end">
        <button
          className="uppercase bg-white text-black rounded-full px-10 py-2 cursor-pointer"
          onClick={logoutUser}
        >
          Logout
        </button>
      </div>
      <h1>User Page</h1>
    </div>
  );
}
