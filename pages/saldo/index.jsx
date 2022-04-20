import Link from "next/link";

import BackButton from "components/atoms/BackButton";
import rupiahFormat from "utils/rupiahFormat";

export default function Saldo() {
  const saldo = 29890;

  return (
    <div className="mx-4 my-5">
      {/* Back button */}
      <BackButton />

      {/* Description */}
      <div className="mb-10 mt-7">
        <h2>Detail Saldo</h2>
        <p className="mt-1">Lihat, isi, dan tarik saldo Andilmu dengan mudah</p>
      </div>

      {/* Saldo */}
      <div className="text-center">
        <p>Saldo</p>
        <p className="text-2xl font-semibold mt-1">{rupiahFormat(saldo)}</p>
        <div className="flex mt-7">
          {/* Button masuk */}
          <div className="w-1/2 mr-2">
            <Link href="/login-choose" passHref={true}>
              <button className="text-white bg-yellow-main py-3.5 w-full rounded-full">
                Isi Saldo
              </button>
            </Link>
          </div>
          {/* Button masuk */}
          <div className="w-1/2 ml-2">
            <Link href="/login-choose" passHref={true}>
              <button className="text-white bg-yellow-main py-3.5 w-full rounded-full">
                Tarik Saldo
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Riwayat transaksi */}
      <div className="mt-8 mb-1">
        <h3>Riwayat Transaksi</h3>

        {/* Box history */}
        <div className="flex w-full border-2 border-gray-icon mt-2.5 rounded-box">
          <div className="mx-2.5 my-2.5">
            <p className="subparagraph font-semibold">Pulsa Telkomsel 50.000</p>
            <p className="text-8px text-gray-history">081312458192</p>
            <p className="text-8px text-gray-history">3 Januari 2022</p>
          </div>
          <div className="my-auto ml-auto mr-2.5 text-right">
            <p className="subparagraph font-semibold">Rp51.500</p>
            <p className="text-8px font-medium text-success flex mt-0.5">
              <span className="mr-0.5 mt-1px">
                <img src="success-icon.svg" alt="success icon"></img>
              </span>
              Berhasil
            </p>
          </div>
        </div>

        <div className="flex w-full border-2 border-gray-icon mt-2.5 rounded-box min-h-history-box">
          <div className="mx-2.5 my-2.5">
            <p className="subparagraph font-semibold">
              Tagihan air & sampah (Desember)
            </p>
            <p className="text-8px text-gray-history">3 Desember 2021</p>
          </div>
          <div className="my-auto ml-auto mr-2.5 text-right">
            <p className="subparagraph font-semibold">Rp51.500</p>
            <p className="text-8px font-medium text-success flex mt-0.5">
              <span className="mr-0.5 mt-1px">
                <img src="success-icon.svg" alt="success icon"></img>
              </span>
              Berhasil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
