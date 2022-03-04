import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode } from "swiper";

import MenuBar from "components/organisms/MenuBar";
import HistoryBox from "components/molecules/HistoryBox";

// install Swiper modules
SwiperCore.use([FreeMode]);

export default function Home() {
  const firstName = "Lintang Pratama";
  const monthlyBill = "Rp120.000";
  const wallet = "Rp330.598";

  return (
    <>
      {/* Main header */}
      <div
        style={{
          backgroundImage: "url('/bg-main.png')",
          backgroundSize: "cover",
          width: "100%",
          height: "190px",
        }}
      >
        <div className="mx-4 my-3">
          <div className="">
            <div className="w-1.5 h-1.5 bg-danger rounded-full relative right-0.5 top-1.5 ml-auto mr-0 z-10"></div>
            <img
              src="/notification_important.svg"
              className="ml-auto mr-0"
              width="20px"
              height="20px"
              alt="notification-icon"
            />
          </div>
          <div className="mt-3">
            <h2 className="text-white">Halo, {firstName}!</h2>
            <p className="mt-1 text-white">
              Tagihan kamu bulan ini adalah sebesar <br /> {monthlyBill}
            </p>
            <button className="text-yellow-main border border-yellow-main bg-white py-1 px-4 rounded-full mt-3">
              <Link href="/transaksi/tagihan" passHref={true}>
                Lihat
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-4">
        <div className="relative flex w-full bg-white shadow-bottom rounded-box h-18 -top-6">
          <div className="mx-2.5 my-2.5">
            <h4 className="text-yellow-main">
              Saldo{" "}
              <span>
                <img src="logo.svg" className="w-8 inline-block -mt-0.5" />
              </span>
            </h4>
            <h2 className="text-secondary mt-0.5">{wallet}</h2>
            <p className="subparagraph mt-1.5 underline text-secondary">
              <a>Lihat histori transaksi</a>
            </p>
          </div>
          <div className="my-auto ml-auto mr-3.5">
            <button className="py-0.5 px-2.5 border my-auto border-yellow-main text-yellow-main rounded-full">
              Isi Saldo
            </button>
          </div>
        </div>

        {/* Main categories */}
        <div className="grid grid-cols-4 gap-9 mx-8 mt-1">
          {/* Pulsa */}
          <div>
            <div className="flex items-center w-10 h-10 bg-blue-icon mx-auto rounded-box">
              <img
                src="/credit.png"
                alt="credit icon"
                className="w-8 mx-auto"
              ></img>
            </div>
            <p className="text-center subparagraph mt-1">Pulsa</p>
          </div>

          {/* Listrik */}
          <div>
            <div className="flex items-center w-10 h-10 bg-yellow-icon mx-auto rounded-box">
              <img
                src="/electric.png"
                alt="electric icon"
                className="w-8 mx-auto"
              ></img>
            </div>
            <p className="text-center subparagraph mt-1">Listrik</p>
          </div>

          {/* Internet */}
          <div>
            <div className="flex items-center w-10 h-10 bg-blue-icon mx-auto rounded-box">
              <img
                src="/wifi.png"
                alt="wifi icon"
                className="w-8 mx-auto"
              ></img>
            </div>
            <p className="text-center subparagraph mt-1">Internet</p>
          </div>

          {/* Edukasi */}
          <div>
            <div className="flex items-center w-10 h-10 bg-yellow-icon mx-auto rounded-box">
              <img
                src="/books.png"
                alt="building icon"
                className="w-8 mx-auto"
              ></img>
            </div>
            <p className="text-center subparagraph mt-1">Edukasi</p>
          </div>

          {/* E-wallet */}
          <div>
            <div className="flex items-center w-10 h-10 bg-brown-icon mx-auto rounded-box">
              <img
                src="/ewallet.png"
                alt="building icon"
                className="w-8 mx-auto"
              ></img>
            </div>
            <p className="text-center subparagraph mt-1">E-Wallet</p>
          </div>

          {/* BPJS */}
          <div>
            <div className="flex items-center w-10 h-10 bg-yellow-icon mx-auto rounded-box">
              <img
                src="/bpjs.png"
                alt="building icon"
                className="w-8 mx-auto"
              ></img>
            </div>
            <p className="text-center subparagraph mt-1">BPJS</p>
          </div>

          {/* Game */}
          <div>
            <div className="flex items-center w-10 h-10 bg-purple-icon mx-auto rounded-box">
              <img
                src="/game.png"
                alt="building icon"
                className="w-8 mx-auto"
              ></img>
            </div>
            <p className="text-center subparagraph mt-1">Game</p>
          </div>

          <div>
            <div className="flex items-center w-10 h-10 bg-gray-icon mx-auto rounded-box">
              <img
                src="/more-icon.png"
                alt="more icon"
                className="w-8 mx-auto mt-1"
              ></img>
            </div>
            <p className="text-center subparagraph mt-1">Lainnya</p>
          </div>
        </div>

        {/* Banner swipe */}
        <div className="mt-6">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={15}
            freeMode={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="h-23 bg-yellow-main rounded-box">
                <p className="subparagraph text-white text-center h-full">
                  Banner
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-23 bg-yellow-main rounded-box">
                <p className="subparagraph text-white text-center h-full">
                  Banner
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-23 bg-yellow-main rounded-box">
                <p className="subparagraph text-white text-center h-full">
                  Banner
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Riwayat transaksi */}
        <div className="mt-6 mb-1">
          <h3>Riwayat Transaksi</h3>

          {/* Box history */}
          <Link href="transaksi/1" passHref={true}>
            <a>
              <HistoryBox
                product="Pulsa Telkomsel 50.000"
                id="081312458192"
                date="3 Januari 2022"
                total="Rp51.500"
                status="Berhasil"
              />
            </a>
          </Link>

          <Link href="transaksi/1" passHref={true}>
            <a>
              <HistoryBox
                product="Pulsa Telkomsel 50.000"
                id="081312458192"
                date="3 Januari 2022"
                total="Rp51.500"
                status="Berhasil"
              />
            </a>
          </Link>
        </div>

        <div className="h-16"></div>

        <MenuBar currentPage="home" />
      </div>
    </>
  );
}