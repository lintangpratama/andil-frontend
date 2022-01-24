import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

import BackButton from "components/atoms/BackButton";


export default function Login() {
  const router = useRouter();
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
      const api = "https://andil-go-api.herokuapp.com/pengurus/login";
      const request = await axios.post(api, JSON.stringify(inputFields));
      console.log(request.data.token);

      // Set the auth cookie
      Cookies.set("user_cookie", request.data.token);

      // Redirect the page to home page
      router.push("/home/");
    } catch (err) {
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
            onClick={submitFormHandler}
            className="text-white bg-yellow-main py-3 w-full rounded-full"
          >
            Masuk
          </button>
        </div>
      </div>
    </>
  );
}
