import BackButton from "components/atoms/BackButton";
import BankIcon from "components/molecules/BankList/BankIcon";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function BankDetails() {
  const router = useRouter();
  const { bank } = router.query;
  const [inputFields, setInputFields] = useState({
    no_rekening: "",
    jumlah_saldo: "",
  });

  const bankDetails = {
    name: "BCA",
    number: 12781638916888,
  };

  const inputTextHandler = (e) => {
    const getInputText = e.target.getAttribute("name");

    setInputFields({
      ...inputFields,
      [getInputText]: e.target.value,
    });
  };

  return (
    <div>
      <div className="mx-4 my-5">
        {/* Back button */}
        <BackButton />

        {/* Description */}
        <div className="mb-10 mt-7">
          <h2>Tarik Saldo</h2>
          <p className="mt-1">Bank {bankDetails.name}</p>
        </div>

        {/* Bank name */}
        <div className="flex">
          <BankIcon image="/bank-list/BCA.png" />
          <div className="flex flex-col my-auto ml-2.5">
            <h3 className="font-bold">BCA</h3>
            <p className="subparagraph mt-0.5">CV. Daya Bimantara</p>
          </div>
        </div>

        <div id="bankNumber" className="flex flex-col mt-8">
          <label className="mb-1">Nomor Rekening</label>
          <input
            type="number"
            id="no_rekening"
            name="no_rekening"
            className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-yellow-main"
            placeholder="Ex: 12788xxxxxxxx"
            onChange={(e) => {
              inputTextHandler(e);
            }}
          />
        </div>

        <div id="totalAmount" className="flex flex-col mt-4">
          <label className="mb-1">Nominal</label>
          <div className="flex">
            <h2 className="mt-1.5 mr-1 text-black-main">Rp</h2>
            <input
              type="text"
              id="jumlah_saldo"
              name="jumlah_saldo"
              className="py-1.5 border-b-2 placeholder-black-main opacity-70 w-full text-sm font-semibold focus:outline-none focus:border-yellow-main"
              placeholder="0"
              onChange={(e) => {
                inputTextHandler(e);
              }}
            />
          </div>
        </div>

        {/* Attention */}
        <div className="flex mt-12">
          <Image
            src="/attention-blue.svg"
            width={14}
            height={14}
            alt="attention-icon"
            passHref={true}
            className="w-4"
          />
          <p className="ml-1 subparagraph mt-0.5">
            Pastikan <span className="text-blue-icon">nomor rekening</span> dan <span className="text-blue-icon">nominal</span> yang kamu masukkan benar
          </p>
        </div>

        {/* Button */}
        <div className="mt-3">
          <Link href="/login-choose" passHref={true}>
            <button className="text-white bg-yellow-main py-3.5 w-full rounded-full">
              Tarik Saldo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
