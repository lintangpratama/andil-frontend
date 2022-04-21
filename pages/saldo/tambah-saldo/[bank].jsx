import Attention from "components/atoms/Attention";
import BackButton from "components/atoms/BackButton";
import BankIcon from "components/molecules/BankList/BankIcon";

import Image from "next/image";
import { useRouter } from "next/router";

export default function BankDetails() {
  const router = useRouter();
  const { bank } = router.query;

  const bankDetails = {
    name: "BCA",
    number: 12781638916888,
  };

  return (
    <div>
      <div className="mx-4 my-5">
        {/* Back button */}
        <BackButton />

        {/* Description */}
        <div className="mb-10 mt-7">
          <h2>Isi Saldo</h2>
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

        {/* Bank Number */}
        <div className="flex justify-between mt-5 border border-gray-200 p-3.5 rounded-2xl">
          <h2>{bankDetails.number}</h2>
          <Image
            className="cursor-pointer"
            src="/copy.svg"
            width={16}
            height={16}
            alt="copy-icon"
            passHref={true}
          />
        </div>

        {/* Attention message */}
        <Attention icon="/attention-blue.svg" />

        {/* Top-up tutorial */}
        <div className="mt-6 mb-1">
          <h3 className="text-12">Cara isi saldo Andil: </h3>
        </div>

        <div className="flex mt-3 mb-2.5">
          <div className="w-5 h-5 bg-yellow-main text-white rounded-full text-center">
            <p className="subparagraph text-white mt-1">1</p>
          </div>
          <p className="subparagraph ml-2.5 my-auto">
            Login ke BCA Mobile.
          </p>
        </div>

        <div className="flex mt-3 mb-2.5">
          <div className="w-5 h-5 bg-yellow-main text-white rounded-full text-center">
            <p className="subparagraph text-white mt-1">2</p>
          </div>
          <p className="subparagraph ml-2.5 my-auto">
            Pilih <span className="font-semibold">Dompet Digital</span> &gt; <span className="font-semibold">AndilPay</span> &gt; <span className="font-semibold">Customer</span>.
          </p>
        </div>

        <div className="flex mt-3 mb-2.5">
          <div className="w-5 h-5 bg-yellow-main text-white rounded-full text-center">
            <p className="subparagraph text-white mt-1">3</p>
          </div>
          <p className="subparagraph ml-2.5 my-auto">
            Masukkan jumlah saldo.
          </p>
        </div>

        <div className="flex mt-3 mb-2.5">
          <div className="w-5 h-5 bg-yellow-main text-white rounded-full text-center">
            <p className="subparagraph text-white mt-1">4</p>
          </div>
          <p className="subparagraph ml-2.5 my-auto">
            Masukkan PIN untuk verifikasi.
          </p>
        </div>

        <div className="flex mt-3 mb-2.5">
          <div className="w-5 h-5 bg-yellow-main text-white rounded-full text-center">
            <p className="subparagraph text-white mt-1">5</p>
          </div>
          <p className="subparagraph ml-2.5 my-auto">
            Ikuti instruksi selanjutnya untuk melakukan transfer.
          </p>
        </div>
      </div>
    </div>
  );
}
