import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import { authPage } from "middlewares/authPage";


import MenuBar from "components/organisms/MenuBar";
import LogoutButton from "components/molecules/LogoutButton";
import getInitial from "utils/getInitial";

export async function getServerSideProps(context) {
  const { token } = await authPage(context);
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login-choose",
      },
    };
  }

  return {
    props: {},
  };
}

export default function Profil() {
  const [userData, setUserData] = useState({
    nama: "",
  });

  useEffect(() => {
    const dataFetch = async () => {
      var config = {
        method: "get",
        url: "http://116.193.191.169:3001/api/pengguna",
        headers: {
          Authorization:
            "Bearer " + Cookies.get('token'),
        },
      };

      axios(config)
        .then(function (response) {
          console.log(response.data.data);
          setUserData(response.data.data);
          console.log(userData);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    dataFetch();
  }, []);

  return (
    <>
      <div className="mx-4 my-5">
        {/* Identity section */}
        <div className="flex mb-9">
          <div className="w-10 h-10 bg-yellow-main rounded-full">
            <h2 className="text-white font-bold text-center mt-2.5">{getInitial(userData.nama)}</h2>
          </div>
          <div className="ml-7">
            {/* Identity */}
            <h2 className="font-bold">{userData.nama}</h2>
            <p className="">{userData.email}</p>
            <p className="">{userData.no_handphone}</p>

            {/* Role tag */}
            <div className="flex bg-role-tag px-1 py-0.5 rounded-full w-fit mt-2">
              <svg
                width="15"
                height="15"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99999 1.66675C5.39999 1.66675 1.66666 5.40008 1.66666 10.0001C1.66666 14.6001 5.39999 18.3334 9.99999 18.3334C14.6 18.3334 18.3333 14.6001 18.3333 10.0001C18.3333 5.40008 14.6 1.66675 9.99999 1.66675ZM5.89166 15.2334C6.24999 14.4834 8.43332 13.7501 9.99999 13.7501C11.5667 13.7501 13.7583 14.4834 14.1083 15.2334C12.975 16.1334 11.55 16.6667 9.99999 16.6667C8.44999 16.6667 7.02499 16.1334 5.89166 15.2334ZM15.3 14.0251C14.1083 12.5751 11.2167 12.0834 9.99999 12.0834C8.78332 12.0834 5.89166 12.5751 4.69999 14.0251C3.84999 12.9084 3.33332 11.5167 3.33332 10.0001C3.33332 6.32508 6.32499 3.33341 9.99999 3.33341C13.675 3.33341 16.6667 6.32508 16.6667 10.0001C16.6667 11.5167 16.15 12.9084 15.3 14.0251ZM9.99999 5.00008C8.38332 5.00008 7.08332 6.30008 7.08332 7.91675C7.08332 9.53342 8.38332 10.8334 9.99999 10.8334C11.6167 10.8334 12.9167 9.53342 12.9167 7.91675C12.9167 6.30008 11.6167 5.00008 9.99999 5.00008ZM9.99999 9.16675C9.30832 9.16675 8.74999 8.60842 8.74999 7.91675C8.74999 7.22508 9.30832 6.66675 9.99999 6.66675C10.6917 6.66675 11.25 7.22508 11.25 7.91675C11.25 8.60842 10.6917 9.16675 9.99999 9.16675Z"
                  fill="#3C7564"
                  fillOpacity="1"
                />
              </svg>
              <p className="subparagraph font-normal text-tag my-auto ml-1">
                Warga
              </p>
            </div>
          </div>
        </div>
        {/* Profile option */}
        <div>
          {/* Akun */}
          <label>Akun</label>

          {/* Edit profile */}
          <Link href="/profil/edit-profil">
            <a>
              <div className="flex">
                <img src="/profil/edit-profil.svg" />
                <div className="flex border-b w-full ml-2 justify-between">
                  <h3 className="text-12 py-3.5">Ubah Data Akun</h3>
                  <img src="/profil/arrow-right.svg" />
                </div>
              </div>
            </a>
          </Link>

          {/* Edit password */}
          <Link href="/profil/edit-password">
            <a>
              <div className="flex">
                <img src="/profil/edit-pw.svg" />
                <div className="flex border-b w-full ml-2 justify-between">
                  <h3 className="text-12 py-3.5">Ubah Password</h3>
                  <img src="/profil/arrow-right.svg" />
                </div>
              </div>
            </a>
          </Link>

          {/* Help */}
          <Link href="/">
            <a>
              <div className="flex">
                <img src="/profil/help.svg" />
                <div className="flex border-b w-full ml-2 justify-between">
                  <h3 className="text-12 py-3.5">Bantuan</h3>
                  <img src="/profil/arrow-right.svg" />
                </div>
              </div>
            </a>
          </Link>
        </div>

        <div className="mt-3">
          <label>Lainnya</label>

          {/* Privacy policy */}
          <Link href="/">
            <a>
              <div className="flex">
                <img src="/profil/privacy.svg" />
                <div className="flex border-b w-full ml-2 justify-between">
                  <h3 className="text-12 py-3.5">Kebijakan Privasi</h3>
                  <img src="/profil/arrow-right.svg" />
                </div>
              </div>
            </a>
          </Link>

          {/* Terms and conditions */}
          <Link href="/">
            <a>
              <div className="flex">
                <img src="/profil/sdk.svg" />
                <div className="flex border-b w-full ml-2 justify-between">
                  <h3 className="text-12 py-3.5">Syarat dan Ketentuan</h3>
                  <img src="/profil/arrow-right.svg" />
                </div>
              </div>
            </a>
          </Link>

          {/* Logout */}
          <LogoutButton role="pengguna" />
        </div>

        <MenuBar currentPage="profil" />
      </div>
    </>
  );
}
