import { useState } from "react";
import Router from "next/router";

export default function Register() {
  const [validateInput, setValidateInput] = useState({
    phone: {
      isValid: true,
    },
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

  const validatePhone = () => {
    const phoneId = document.getElementById("phone");
    const phoneInput = phoneId.value;

    if (phoneInput.length >= 9 && phoneInput.length <= 14) {
      setValidateInput({
        ...validateInput,
        phone: {
          isValid: true,
        },
      });
    } else {
      console.log("Haha");
      setValidateInput({
        ...validateInput,
        phone: {
          isValid: false,
        },
      });
    }
  };

  return (
    <>
      {/* Back button */}
        <button onClick={() => Router.back()} className="relative -left-1">
          <img src="short_left.svg" alt="back_button"></img>
        </button>

      {/* Description */}
      <div className="mb-6 mt-7">
        <h2>Daftar</h2>
        <p className="mt-1">Yuk isi data dirimu dulu untuk daftar</p>
      </div>

      {/* Register form */}
      <div className="flex flex-col">
        <label className="mb-1">Nama</label>
        <input
          id="name"
          name="name"
          className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold capitalize focus:outline-none focustive:border-black-main"
          placeholder="Ex: Wahyu Saputra"
        />
      </div>

      <div id="emailBox" className="flex flex-col mt-4">
        <label className="mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-black-main"
          placeholder="Ex: nama@email.com"
          onChange={() => validateEmail()}
        />

        {/* Danger notification */}
        <div className={validateInput.email.isValid ? "hidden" : "flex mt-1"}>
          <img src="attention.svg" alt="attention-icon" className="w-4"></img>
          <p className="subparagraph validate-warning text-danger mt-0.5 ml-0.5">
            Format email salah. Coba masukkan lagi, ya
          </p>
        </div>
      </div>

      <div id="phoneBox" className="flex flex-col mt-4">
        <label className="mb-1">Nomor HP</label>
        <input
          type="number"
          id="phone"
          name="phone"
          className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-black-main"
          placeholder="Ex: 085xxxxxxxx"
          onChange={() => validatePhone()}
        />

        {/* Danger notification */}
        <div className={validateInput.phone.isValid ? "hidden" : "flex mt-1"}>
          <img src="attention.svg" alt="attention-icon" className="w-4"></img>
          <p className="subparagraph validate-warning text-danger mt-0.5 ml-0.5">
            Format nomor HP salah. Coba masukkan lagi, ya
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <label className="mb-1">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-black-main"
          placeholder="Masukkan password"
        />
      </div>

      {/* Register button */}
      <div className="mt-9">
        <button className="text-white bg-yellow-main py-2 px-6 rounded-full float-right">
          Daftar
        </button>
      </div>
    </>
  );
}
