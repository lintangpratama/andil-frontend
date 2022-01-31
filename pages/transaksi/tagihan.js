import { useState } from "react";

import SmallButton from "components/atoms/SmallButton";
import BackButton from "/components/atoms/BackButton";

export default function Register() {
  const response = {
    info_tagihan: {
      id: 223163581,
      nama: "Tagihan air & sampah (Desember)",
      detail: "Air PAM - 12000 \nSampah - 18000 ",
    },
    rincian_tagihan: {
      total: "Rp30.000",
    },
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
          <h2>Bayar Tagihan</h2>
          <p className="mt-1">Yuk langsung bayar tagihanmu sekarang</p>
        </div>

        {/* Transaction section */}
        <div className="flex flex-col rounded-lg shadow-transaction">
          <div className="m-3.5">
            {/* Info Tagihan */}
            <h3>Info Tagihan</h3>

            {/* ID Tagihan */}
            <div className="flex mt-1.5">
              <p className="w-1/2 subparagraph text-black-thin">ID Tagihan</p>
              <p className="w-1/2 subparagraph text-black-thin">
                {response.info_tagihan.id}
              </p>
            </div>

            {/* Nama Tagihan */}
            <div className="flex mt-0.5">
              <p className="w-1/2 subparagraph text-black-thin">Nama Tagihan</p>
              <p className="w-1/2 subparagraph font-semibold">
                {response.info_tagihan.nama}
              </p>
            </div>

            {/* Detail Tagihan */}
            <div className="flex mt-0.5">
              <p className="w-1/2 subparagraph text-black-thin">
                Detail Tagihan
              </p>
              <p className="w-1/2 subparagraph text-black-thin">
                {response.info_tagihan.detail}
              </p>
            </div>

            {/* Rincian Tagihan */}
            <h3 className="mt-3">Rincian Tagihan</h3>

            {/* ID Tagihan */}
            <div className="flex mt-1.5">
              <p className="w-1/2 subparagraph font-medium">Total Tagihan</p>
              <h3 className="w-1/2 text-right ">
                {response.rincian_tagihan.total}
              </h3>
            </div>
          </div>
        </div>

        {/* Register button */}
        <div className="mt-9">
          <SmallButton message="Bayar Tagihan" onSubmit={submitFormHandler} />
        </div>
      </div>
    </>
  );
}
