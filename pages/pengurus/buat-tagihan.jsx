import { useState } from "react";

// import { authPage } from "middlewares/authPage";

import SmallButton from "components/atoms/SmallButton";
import BackButton from "/components/atoms/BackButton";

import Swal from "sweetalert2";


// export async function getServerSideProps(context) {
//   const { token_pengurus } = await authPage(context);
//   if (!token_pengurus) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/login-choose"
//       }
//     }
//   }

//   return {
//     props: {}
//   }
// }

export default function BuatTagihan() {
  const [inputFields, setInputFields] = useState({
    nama_tagihan: "",
    jumlah_tagihan: "",
    detail_tagihan: "",
  });

  const [bills, setBills] = useState(1);

  const addBills = () => {
    setBills(bills + 1);
  };

  const removeBills = () => {
    setBills(bills - 1);
  };

  const inputTextHandler = (e) => {
    const getInputText = e.target.getAttribute("name");

    setInputFields({
      ...inputFields,
      [getInputText]: e.target.value,
    });
  };

  // const submitFormHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const api = "https://andil-go-api.herokuapp.com/warga/";
  //     const request = await axios.post(api, JSON.stringify(inputFields));
  //     console.log(request);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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

        {[...Array(bills)].map((elm, i) => (
          <div id={i} key={i}>
            <div className="flex w-full mt-4">
              <div className="flex flex-col w-6/12 mr-1/12">
                <label className="mb-1">Nama Tagihan</label>
                <input
                  id="nama_tagihan"
                  name="nama_tagihan"
                  className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold capitalize focus:outline-none focus:border-yellow-main"
                  placeholder="Ex: Tagihan Air"
                  onChange={inputTextHandler}
                />
              </div>

              <div className="flex flex-col w-5/12">
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
            </div>
          </div>
        ))}

        {/* Button */}
        <div className="flex justify-center">
          <div
            className="flex mt-4 w-10 h-10 bg-gray-100 rounded-md justify-center cursor-pointer mr-2"
            onClick={addBills}
          >
            <div className="border border-dotted border-gray-300 w-8 h-8 rounded-md self-center content-center text-gray-500 text-2xl text-center my-auto">
              +
            </div>
          </div>

          <div
            className={bills === 1 ? "hidden" : "flex mt-4 w-10 h-10 bg-gray-100 rounded-md justify-center cursor-pointer ml-2"}
            onClick={removeBills}
          >
            <div className="border border-dotted border-gray-300 w-8 h-8 rounded-md self-center content-center text-gray-500 text-2xl text-center my-auto">
              -
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <label className="mb-1">Keterangan</label>
          <textarea
            type="text"
            id="detail_tagihan"
            name="detail_tagihan"
            rows={3}
            className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
            placeholder="Ex: Uang sampah bulan ini turun menjadi 20.000"
            onChange={inputTextHandler}
          />
        </div>

        {/* Register button */}
        <div className="mt-9">
          <SmallButton
            message="Buat Tagihan"
            img="../../loading-btn.gif"
            // onSubmit={submitFormHandler}
          />
        </div>
      </div>
    </>
  );
}
