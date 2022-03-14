import Link from "next/link";
import Cookies from "js-cookie";

export default function LogoutButton() {
  const logout = () => {
    Cookies.remove("token");
  };

  return (
    <>
      {/* Logout */}
      <Link href="/">
        <a onClick={logout}>
          <div className="flex">
            <img src="/profil/signout.svg" />
            <div className="flex border-b w-full ml-2 justify-between">
              <h3 className="text-12 py-3.5 text-danger">Keluar</h3>
              <img src="/profil/arrow-right.svg" />
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}
