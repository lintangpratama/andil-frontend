import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

import { authPage } from "middlewares/authPage";

import DangerInput from "components/atoms/DangerInput";
import SmallButton from "components/atoms/SmallButton";
import BackButton from "components/atoms/BackButton";

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

export default function EditProfil() {
  const router = useRouter();
  const [inputFields, setInputFields] = useState({
    nama: "",
    email: "",
    no_handphone: "",
    alamat: "",
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

    console.log(inputFields);
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + Cookies.get("token"));

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(inputFields),
      redirect: "follow",
    };

    fetch(`${NEXT_PUBLIC_API_URL}/pengguna/profile`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.code === 200) {
          Swal.fire({
            title: "Berhasil!",
            text: "Kamu telah berhasil mengubah datamu!",
            icon: "success",
            confirmButtonText: "Okay",
            width: "300px",
          });
          router.push("/profil");
        } else {
          Swal.fire({
            title: "Gagal!",
            text: "Ubah data akun gagal. Coba lagi, ya!",
            icon: "error",
            confirmButtonText: "Okay",
            width: "300px",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Gagal!",
          text: "Ubah data akun gagal. Coba lagi, ya!",
          icon: "error",
          confirmButtonText: "Okay",
          width: "300px",
        });
        console.log("error", error);
      });
  };

  return (
    <>
      <div className="mx-4 my-5">
        {/* Back button */}
        <BackButton />

        {/* Description */}
        <div className="mb-6 mt-7">
          <h2>Edit Profil</h2>
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
            icon="../../attention.svg"
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
            icon="../../attention.svg"
          />
        </div>

        <div id="refCodeBox" className="flex flex-col mt-4">
          <label className="mb-1">Alamat</label>
          <input
            type="text"
            id="alamat"
            name="alamat"
            className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
            placeholder="Masukkan alamat"
            onChange={inputTextHandler}
          />
        </div>

        {/* Register button */}
        <div className="mt-9">
          <SmallButton message="Daftar" img="../../loading-btn.gif" onClick={submitFormHandler} />
        </div>
      </div>
    </>
  );
}
