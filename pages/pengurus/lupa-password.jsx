import { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

import { authPage } from "middlewares/authPage";

import DangerInput from "components/atoms/DangerInput";
import SmallButton from "components/atoms/SmallButton";
import BackButton from "components/atoms/BackButton";

export default function Register() {
  const router = useRouter();
  const [inputFields, setInputFields] = useState({
    email: "",
    password_baru: "",
  });

  const [validateInput, setValidateInput] = useState({
    email: {
      isValid: true,
    },
  });

  const regexEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validateEmail = () => {
    const emailId = document.getElementById("email");
    const emailInput = emailId.value;

    if (regexEmail(emailInput)) {
      setValidateInput({
        ...validateInput,
        email: {
          isValid: true,
        },
      });
    } else {
      setValidateInput({
        ...validateInput,
        email: {
          isValid: false,
        },
      });
    }
  };

  const inputTextHandler = (e) => {
    const getInputText = e.target.getAttribute("name");

    setInputFields({
      ...inputFields,
      [getInputText]: e.target.value,
    });

    console.log(inputFields);
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();

    try {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify(inputFields),
      };

      const req = await fetch(
        "http://116.193.191.169:3001/api/auth/forget-password?user=pengurus",
        requestOptions
      );
      const res = await req.json();

      if (res.code === 200) {
        Swal.fire({
          title: "Berhasil!",
          text: "Yey! Password berhasil diubah!",
          icon: "success",
          confirmButtonText: "Okay",
          width: "300px",
        });
        router.push('../../pengurus/login');
      } else {
        Swal.fire({
          title: "Gagal!",
          text: "Ups, password gagal diganti. Coba lagi, ya!",
          icon: "error",
          confirmButtonText: "Okay",
          width: "300px",
        });
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Gagal!",
        text: "Ups, password gagal diganti. Coba lagi, ya!",
        icon: "error",
        confirmButtonText: "Okay",
        width: "300px",
      });
    }
  };

  return (
    <>
      <div className="mx-4 my-5">
        {/* Back button */}
        <BackButton />

        {/* Description */}
        <div className="mb-6 mt-7">
          <h2>Lupa Password</h2>
          <p className="mt-1">Isi form di bawah untuk ubah password kamu</p>
        </div>

        {/* Register form */}
        <div id="emailBox" className="flex flex-col mt-4">
          <label className="mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
            placeholder="Ex: nama@email.com"
            onChange={(e) => {
              validateEmail();
              inputTextHandler(e);
            }}
          />

          {/* Danger notification */}
          <DangerInput
            logic={validateInput.email.isValid}
            msg="Format email salah. Coba masukkan lagi, ya"
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
          <SmallButton message="Ubah Password" onClick={submitFormHandler} />
        </div>
      </div>
    </>
  );
}
