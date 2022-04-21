import { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

import axios from "axios";

import DangerInput from "components/atoms/DangerInput";
import SmallButton from "components/atoms/SmallButton";
import BackButton from "components/atoms/BackButton";

export default function Register() {
  const router = useRouter();
  const [inputFields, setInputFields] = useState({
    nama: "",
    email: "",
    password: "",
    no_handphone: "",
    spesial_kode: "",
  });
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
    const phoneId = document.getElementById("no_handphone");
    const phoneInput = phoneId.value;

    if (phoneInput.length >= 9 && phoneInput.length <= 14) {
      setValidateInput({
        ...validateInput,
        phone: {
          isValid: true,
        },
      });
    } else {
      setValidateInput({
        ...validateInput,
        phone: {
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
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();

    try {
      const api = `${process.env.NEXT_PUBLIC_API_URL}/auth/register?user=pengguna`;
      const request = await axios.post(api, JSON.stringify(inputFields));
      console.log(request);
      if (request.status === 200) {
        Swal.fire({
          title: "Sukses!",
          text: "Registrasi akunmu telah berhasil",
          icon: "success",
          confirmButtonText: "Okay",
          width: "300px",
        });
        router.push("/");
      } else {
        Swal.fire({
          title: "Gagal!",
          text: "Registrasi akunmu gagal. Coba lagi, ya!",
          icon: "error",
          confirmButtonText: "Okay",
          width: "300px",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Gagal!",
        text: "Registrasi akunmu gagal. Coba lagi, ya!",
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
          <h2>Daftar</h2>
          <p className="mt-1">Yuk isi data dirimu dulu untuk daftar</p>
        </div>

        {/* Register form */}
        <div className="flex flex-col">
          <label className="mb-1">Nama</label>
          <input
            id="nama"
            name="nama"
            className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold capitalize focus:outline-none focus:border-yellow-main"
            placeholder="Ex: Wahyu Saputra"
            onChange={inputTextHandler}
          />
        </div>

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
            icon="attention.svg"
          />
        </div>

        <div id="phoneBox" className="flex flex-col mt-4">
          <label className="mb-1">Nomor HP</label>
          <input
            type="number"
            id="no_handphone"
            name="no_handphone"
            className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
            placeholder="Ex: 085xxxxxxxx"
            onChange={(e) => {
              validatePhone();
              inputTextHandler(e);
            }}
          />

          {/* Danger notification */}
          <DangerInput
            logic={validateInput.phone.isValid}
            msg="Format nomor HP salah. Coba masukkan lagi, ya"
            icon="attention.svg"
          />
        </div>

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

        <div id="refCodeBox" className="flex flex-col mt-4">
          <label className="mb-1">Kode Referral</label>
          <input
            type="text"
            id="spesial_kode"
            name="spesial_kode"
            className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
            placeholder="Masukkan kode referral"
            onChange={inputTextHandler}
          />
        </div>

        {/* Register button */}
        <div className="mt-9">
          <SmallButton message="Daftar" img="loading-btn.gif" onClick={submitFormHandler} />
        </div>
      </div>
    </>
  );
}
