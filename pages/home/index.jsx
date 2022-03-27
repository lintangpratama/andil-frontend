import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode } from "swiper";
import Cookies from "js-cookie";

import { authPage } from "middlewares/authPage";

import MenuBar from "components/organisms/MenuBar/index";
import rupiahFormat from "utils/rupiahFormat";

export async function getServerSideProps(context) {
  const { token } = await authPage(context);
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login-choose"
      }
    }
  }
  
  return {
    props: {}
  }
}

export default function Home() {
  SwiperCore.use([FreeMode]);
  const [userData, setUserData] = useState({
    jumlah_saldo: 0,
    nama: ""
  });
  const monthlyBill = 100000;

  useEffect(() => {
    const dataFetch = async () => {
      const headers = new Headers();
      headers.append(
        "Authorization",
        "Bearer " + Cookies.get('token')
      );

      const requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow",
      };

      fetch("http://116.193.191.169:3001/api/pengguna", requestOptions)
        .then((response) => response.json())
        .then((result) => setUserData(result.data))
        .catch((error) => console.log("error", error));
    };
    console.log(Cookies.get('token'));
    dataFetch();
  }, []);

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
            <h2 className="text-white">Halo, {userData.nama}!</h2>
            <p className="mt-1 text-white">
              Tagihan kamu bulan ini adalah sebesar <br /> {rupiahFormat(monthlyBill)}
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
            <h2 className="text-secondary mt-0.5">{rupiahFormat(userData.jumlah_saldo)}</h2>
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
        <div className="grid grid-cols-4 justify-items-center gap-9 mx-8 mt-1">
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
          <div className="flex w-full border-2 border-gray-icon mt-2.5 rounded-box">
            <div className="mx-2.5 my-2.5">
              <p className="subparagraph font-semibold">
                Pulsa Telkomsel 50.000
              </p>
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

        <div className="h-16"></div>

        <MenuBar currentPage="home" />
      </div>
    </>
  );
}
