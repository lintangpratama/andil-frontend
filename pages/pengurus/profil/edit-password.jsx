import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

import { authPage } from "middlewares/authPage";

import SmallButton from "components/atoms/SmallButton";
import BackButton from "components/atoms/BackButton";

export async function getServerSideProps(context) {
  const { token_pengurus } = await authPage(context);
  if (!token_pengurus) {
    return {
      redirect: {
        permanent: false,
        destination: "/login-choose"
      }
    }
  }
  
  return {
    props: {}
  }
}

export default function EditPassword() {
  const router = useRouter();
  const [inputFields, setInputFields] = useState({
    password_lama: "",
    password_baru: ""
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

    const headers = {
      Authorization:
        "Bearer " + Cookies.get('token_pengurus'),
    };

    var config = {
      method: "put",
      url: `${process.env.NEXT_PUBLIC_API_URL}/auth/change-password?user=pengurus`,
      headers: headers,
      data: JSON.stringify(inputFields),
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.code === 200) {
          Swal.fire({
            title: "Berhasil!",
            text: "Kamu telah berhasil mengubah passwordmu!",
            icon: "success",
            confirmButtonText: "Okay",
            width: "300px",
          });
          router.push('/pengurus/profil')
        } else {
          Swal.fire({
            title: "Gagal!",
            text: "Ups, password gagal diganti. Coba lagi, ya!",
            icon: "error",
            confirmButtonText: "Okay",
            width: "300px",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire({
          title: "Gagal!",
          text: "Ups, password gagal diganti. Coba lagi, ya!",
          icon: "error",
          confirmButtonText: "Okay",
          width: "300px",
        });
      });
  };

  return (
    <>
      <>
        <div className="mx-4 my-5">
          {/* Back button */}
          <BackButton />

          {/* Description */}
          <div className="mb-6 mt-7">
            <h2>Ubah Kata Sandi</h2>
          </div>

          <div className="flex flex-col mt-4">
            <label className="mb-1">Password Lama</label>
            <input
              type="password"
              id="password_lama"
              name="password_lama"
              className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
              placeholder="Masukkan password lama"
              onChange={inputTextHandler}
            />
          </div>

          <div className="flex flex-col mt-4">
            <label className="mb-1">Password Baru</label>
            <input
              type="password"
              id="password_baru"
              name="password_baru"
              className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
              placeholder="Masukkan password baru"
              onChange={inputTextHandler}
            />
          </div>

          {/* Register button */}
          <div className="mt-9">
            <SmallButton message="Ubah Password" img="../../../loading-btn.gif" onClick={submitFormHandler} />
          </div>
        </div>
      </>
    </>
  );
}
