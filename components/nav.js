import Link from "next/link";
import { useUser } from "../context/user";

const Nav = () => {
  const { user } = useUser();

  return (
    <nav className="flex py-4 px-6 border-b border-gray-200">
      <Link href="/">Home</Link>
      <Link href="/pricing" className="ml-2">
        Pricing
      </Link>
      <Link href={user ? "/logout" : "/login"} className="ml-auto">
        {user ? "Logout" : "Login"}
      </Link>
    </nav>
  );
};

export default Nav;
