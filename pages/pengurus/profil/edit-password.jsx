import { useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";
import Cookies from "js-cookie";

import SmallButton from "components/atoms/SmallButton";
import BackButton from "components/atoms/BackButton";

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
      url: "http://116.193.191.169:3001/api/auth/change-password?user=pengurus",
      headers: headers,
      data: JSON.stringify(inputFields),
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.code === 200) {
          router.push('/pengurus')
        }
      })
      .catch(function (error) {
        console.log(error);
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
            <SmallButton message="Ubah Password" onClick={submitFormHandler} />
          </div>
        </div>
      </>
    </>
  );
}