import Link from "next/link";
import Cookies from "js-cookie";

export default function LogoutButton(props) {
  const { role } = props;

  const logout = () => {
    if (role === "pengguna") {
      Cookies.remove("token");
    } else if (role === "pengururs") {
      Cookies.remove("token_pengurus");
    }
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
