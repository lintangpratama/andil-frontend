import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import Swal from "sweetalert2";

import { authPage } from "middlewares/authPage";
import BackButton from "components/atoms/BackButton";

export async function getServerSideProps(context) {
  const { token } = await authPage(context);
  if (token) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }

  return {
    props: {},
  };
}

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });

  const inputTextHandler = (e) => {
    const getInputText = e.target.getAttribute("name");

    setInputFields({
      ...inputFields,
      [getInputText]: e.target.value,
    });
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();

    try {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify(inputFields),
        redirect: "follow",
      };

      console.log(process.env.NEXT_PUBLIC_API_URL);
      const req = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login?user=pengguna`,
        requestOptions
      );
      const res = await req.json();

      if (res.code === 200) {
        console.log(res);
        Cookies.set("token", res.data);
        router.push("/home");
      } else {
        Swal.fire({
          title: "Gagal!",
          text: "Login gagal. Coba lagi, ya!",
          icon: "error",
          confirmButtonText: "Okay",
          width: "300px",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Gagal!",
        text: "Login gagal. Coba lagi, ya!",
        icon: "error",
        confirmButtonText: "Okay",
        width: "300px",
      });
      console.log(err);
    }
  };

  return (
    <>
      <div className="mx-4 my-5">
        {/* Back button */}
        <BackButton />

        {/* Description */}
        <div className="mb-6 mt-7">
          <h2>Login</h2>
          <p className="mt-1">
            Masuk ke aplikasi Andil dan rasakan sendiri kemudahannya
          </p>
        </div>

        {/* Email/Phone input */}
        <div id="emailBox" className="flex flex-col mt-4">
          <label className="mb-1">Email atau Nomor HP</label>
          <input
            type="email"
            id="email"
            name="email"
            className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
            placeholder="Ex: nama@email.com atau 085xxxxxxxx"
            onChange={(e) => {
              inputTextHandler(e);
            }}
          />
        </div>

        {/* Password input */}
        <div className="flex flex-col mt-4">
          <label className="mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
            placeholder="Masukkan password"
            onChange={inputTextHandler}
          />
        </div>

        {/* Button masuk */}
        <div className="mt-9">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLoading(true);
              submitFormHandler(e);
              setIsLoading(false);
            }}
            className="text-white flex justify-center bg-yellow-main py-3 w-full rounded-full"
          >
            Masuk
            {isLoading ? <img src="loading-btn.gif" className="w-4 ml-1" /> : <></>}
          </button>
        </div>

        {/* Button lupa password */}
        <div className="mt-3">
          <button className="text-yellow-main bg-white py-3 w-full rounded-full border border-yellow-main">
            <Link href="/profil/lupa-password">Lupa Password?</Link>
          </button>
        </div>
      </div>
    </>
  );
}
