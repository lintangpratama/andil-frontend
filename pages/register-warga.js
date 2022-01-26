import { useState } from "react";

import DangerInput from "components/atoms/DangerInput";
import SmallButton from "components/atoms/SmallButton";
import BackButton from "components/atoms/BackButton";

export default function Register() {
  const [inputFields, setInputFields] = useState({
    nama: "",
    email: "",
    password: "",
    no_handphone: "",
    special_kode: "",
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
      const api = "https://andil-go-api.herokuapp.com/warga/";
      const request = await axios.post(api, JSON.stringify(inputFields));
      console.log(request);
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
          />
        </div>

        <div id="phoneBox" className="flex flex-col mt-4">
          <label className="mb-1">Nomor HP</label>
          <input
            type="number"
            id="phone"
            name="phone"
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
            id="special_kode"
            name="special_kode"
            className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
            placeholder="Masukkan kode referral"
            onChange={inputTextHandler}
          />
        </div>

        {/* Register button */}
        <div className="mt-9">
          <SmallButton message="Daftar" onSubmit={submitFormHandler} />
        </div>
      </div>
    </>
  );
}
