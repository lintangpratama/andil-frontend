import { useState, useEffect } from "react";
import axios from "axios";

import SmallButton from "components/atoms/SmallButton";
import DangerInput from "components/atoms/DangerInput";
import BackButton from "components/atoms/BackButton";

export default function Register() {
  const [inputFields, setInputFields] = useState({
    areaType: "",
    areaName: "",
    provinsi: "",
    kota: "",
    kecamatan: "",
    kelurahan: "",
    areaAddress: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
  });
  const [provinsiOption, setProvinsiOption] = useState({
    data: [],
    choosenData: "",
    id: 0,
  });
  const [kabupatenOption, setKabupatenOption] = useState({
    data: [],
    choosenData: "",
    id: 0,
  });
  const [kecamatanOption, setKecamatanOption] = useState({
    data: [],
    choosenData: "",
    id: 0,
  });
  const [kelurahanOption, setKelurahanOption] = useState({
    data: [],
    choosenData: "",
    id: 0,
  });
  const [validateInput, setValidateInput] = useState({
    phone: {
      isValid: true,
    },
    email: {
      isValid: true,
    },
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

    const api = "";
    const headers = {
      Authorization: "Bearer MY_TOKEN",
      "Content-Type": "application/json"
    };
    const request = await axios.post(api, inputFields, { headers });
    console.log(request);
  };

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

  // Fetching the area provinsi data
  useEffect(() => {
    const getAllProvince = async () => {
      try {
        const response = await axios.get(
          "https://area.nyandev.id/provinsi.json"
        );
        const data = response.data;
        setProvinsiOption({
          ...provinsiOption,
          data: data,
        });
      } catch (err) {
        console.log(err);
      }
    };

    getAllProvince();
  }, []);

  // Get kabupaten data by provinsi id
  useEffect(() => {
    const getAllKabupaten = async () => {
      try {
        const response = await axios.get(
          `https://area.nyandev.id/provinsi/${provinsiOption.id}/kabupaten.json`
        );
        const data = response.data;
        setKabupatenOption({
          ...kabupatenOption,
          data: data,
        });
      } catch (err) {
        console.log(err);
      }
    };
    getAllKabupaten();
  }, [provinsiOption]);

  // Get kecamatan data by kabupaten id
  useEffect(() => {
    const getAllKecamatan = async () => {
      try {
        const response = await axios.get(
          `https://area.nyandev.id/provinsi/kabupaten/${kabupatenOption.id}/kecamatan.json`
        );
        const data = response.data;
        setKecamatanOption({
          ...kecamatanOption,
          data: data,
        });
      } catch (err) {
        console.log(err);
      }
    };
    getAllKecamatan();
  }, [kabupatenOption]);

  // Get kelurahan data by kecamatan id
  useEffect(() => {
    const getAllKelurahan = async () => {
      try {
        const response = await axios.get(
          `https://area.nyandev.id/provinsi/kabupaten/kecamatan/${kecamatanOption.id}/kelurahan.json`
        );
        const data = response.data;
        setKelurahanOption({
          ...kelurahanOption,
          data: data,
        });
      } catch (err) {
        console.log(err);
      }
    };
    getAllKelurahan();
  }, [kecamatanOption]);

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

        {/* Informasi Area */}
        <div className="mb-2 mt-7">
          <h2>Informasi Area</h2>
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Jenis Area</label>
          <select
            id="areaType"
            name="areaType"
            className="py-1.5 bg-white border-b-2 text-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
            onChange={inputTextHandler}
          >
            <option disabled selected>
              Pilih jenis area
            </option>
            <option value="rt">Rukun Tetangga (RT)</option>
            <option value="rw">Rukun Warga (RW)</option>
            <option value="perumahan">Perumahan atau Cluster</option>
            <option value="apartemen">Apartemen</option>
          </select>
        </div>

        <div className="flex flex-col mt-4">
          <label className="mb-1">Nama Area</label>
          <input
            id="areaName"
            name="areaName"
            className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold capitalize focus:outline-none focus:border-yellow-main"
            placeholder="Ex: Cluster Palem Hijau"
            onChange={inputTextHandler}
          />
        </div>

        {/* Data Area */}
        <div className="mb-2 mt-7">
          <h2>Data Area</h2>
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Provinsi</label>
          <select
            id="provinsi"
            name="provinsi"
            className="py-1.5 bg-white border-b-2 text-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
            onChange={(e) => {
              const name = document.getElementById("provinsi");
              const value = name.value;

              const id = provinsiOption.data.filter((provinsi) => {
                return provinsi.name == value;
              });

              setProvinsiOption({
                ...provinsiOption,
                choosenData: value,
                id: id[0].id,
              });

              inputTextHandler(e);
            }}
          >
            <option disabled selected>
              Pilih provinsi
            </option>
            {provinsiOption.data.map((provinsi) => (
              <option key={provinsi.id} value={provinsi.name}>
                {provinsi.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mt-4">
          <label className="mb-1">Kabupaten/Kota</label>
          <select
            id="kota"
            name="kota"
            className="py-1.5 bg-white border-b-2 text-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
            onChange={(e) => {
              const name = document.getElementById("kota");
              const value = name.value;

              const id = kabupatenOption.data.filter((kabupaten) => {
                return kabupaten.name == value;
              });

              setKabupatenOption({
                ...kabupatenOption,
                choosenData: value,
                id: id[0].id,
              });

              inputTextHandler(e);
            }}
          >
            <option disabled selected>
              Pilih kabupaten/kota
            </option>
            {kabupatenOption.data.map((kabupaten) => (
              <option key={kabupaten.id} value={kabupaten.name}>
                {kabupaten.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mt-4">
          <label className="mb-1">Kecamatan</label>
          <select
            id="kecamatan"
            name="kecamatan"
            className="py-1.5 bg-white border-b-2 text-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
            onChange={(e) => {
              const name = document.getElementById("kecamatan");
              const value = name.value;

              const id = kecamatanOption.data.filter((kecamatan) => {
                return kecamatan.name == value;
              });

              setKecamatanOption({
                ...kecamatanOption,
                choosenData: value,
                id: id[0].id,
              });

              inputTextHandler(e);
            }}
          >
            <option disabled selected>
              Pilih kecamatan
            </option>
            {kecamatanOption.data.map((kecamatan) => (
              <option key={kecamatan.id} value={kecamatan.name}>
                {kecamatan.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mt-4">
          <label className="mb-1">Kelurahan/Desa</label>
          <select
            id="kelurahan"
            name="kelurahan"
            className="py-1.5 bg-white border-b-2 text-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
            onChange={inputTextHandler}
          >
            <option disabled selected>
              Pilih kelurahan
            </option>
            {kelurahanOption.data.map((kelurahan) => (
              <option key={kelurahan.id} value={kelurahan.name}>
                {kelurahan.name}
              </option>
            ))}
          </select>
        </div>

        <div id="refCodeBox" className="flex flex-col mt-4">
          <label className="mb-1">Alamat Area</label>
          <input
            type="text"
            id="areaAddress"
            name="areaAddress"
            className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
            placeholder="Ex: Jl. Muria Blok E"
            onChange={inputTextHandler}
          />
        </div>

        {/* Register form */}
        <div className="mb-2 mt-7">
          <h2>Data Pengurus</h2>
        </div>

        <div className="flex flex-col mt-4">
          <label className="mb-1">Nama</label>
          <input
            id="name"
            name="name"
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
            msg="Format email salah. Coba masukkan lagi, ya"
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
          <label className="mb-1">Alamat</label>
          <input
            type="text"
            id="address"
            name="address"
            className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
            placeholder="Ex: Jl. Muria Blok E2 no. 19 RT 13 RW 04"
            onChange={inputTextHandler}
          />
        </div>

        {/* Register button */}
        <div className="mt-9">
          <SmallButton message="Daftar" onClick={submitFormHandler} />
        </div>

        {/* Plus div */}
        <div className="h-24 bg-white"></div>
      </div>
    </>
  );
}
