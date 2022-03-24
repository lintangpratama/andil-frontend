import { useState } from "react";

import { authPage } from "middlewares/authPage";

import SmallButton from "components/atoms/SmallButton";
import BackButton from "/components/atoms/BackButton";

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
    props: null
  }
}

export default function BuatTagihan() {
  const [inputFields, setInputFields] = useState({
    nama_tagihan: "",
    jumlah_tagihan: "",
    detail_tagihan: "",
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
          <h2>Buat Tagihan</h2>
          <p className="mt-1">Buat tagihan untuk wargamu dengan cepat</p>
        </div>

        {/* Register form */}
        <div className="flex flex-col">
          <label className="mb-1">Nama Tagihan</label>
          <input
            id="nama_tagihan"
            name="nama_tagihan"
            className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold capitalize focus:outline-none focus:border-yellow-main"
            placeholder="Ex: Tagihan air & sampah (Desember)"
            onChange={inputTextHandler}
          />
        </div>

        <div className="flex flex-col mt-4">
          <label className="mb-1">Jumlah Tagihan</label>
          <input
            type="number"
            id="jumlah_tagihan"
            name="jumlah_tagihan"
            className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
            placeholder="Ex: 30000"
            onChange={inputTextHandler}
          />
        </div>

        <div className="flex flex-col mt-4">
          <label className="mb-1">Detail Tagihan</label>
          <textarea
            type="text"
            id="detail_tagihan"
            name="detail_tagihan"
            rows={3}
            className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
            placeholder="Ex: Air - 12000, Sampah 18000"
            onChange={inputTextHandler}
          />
        </div>

        {/* Register button */}
        <div className="mt-9">
          <SmallButton message="Buat Tagihan" onSubmit={submitFormHandler} />
        </div>
      </div>
    </>
  );
}
