import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import axios from "axios";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Home() {
  return (
    <>
      <div className="mx-4 my-5">
        <Image src="/logo.svg" width="100px" height="33px" alt="Logo" />
        <Swiper pagination={true} className="mySwiper mt-32">
          {/* Illustration % description slider */}
          <SwiperSlide>
            <div className="w-full h-full">
              <img
                src="/paymentinformation.svg"
                className="mx-auto"
                alt="Illustration"
              />
              <h1 className="mt-4">Bayar air & sampah</h1>
              <p className="mb-28 mt-1">
                Lagi sibuk? Andil bayar tagihan kamu gak pake lama
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <img
                src="/payment-info.svg"
                className="mx-auto"
                alt="Illustration"
              />
              <h1 className="mt-4">Beli pulsa & paket data</h1>
              <p className="mb-28 mt-1">
                Beli pulsa dan kuota internet gak perlu keluar rumah
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <img
                src="/bills-illustration.svg"
                className="mx-auto"
                alt="Illustration"
              />
              <h1 className="mt-12">Pantau tagihan bulanan</h1>
              <p className="mb-28 mt-1">
                Andil bantu kamu catat tagihanmu tiap bulan
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Button masuk */}
        <div className="mt-5">
          <Link href="/login" passHref={true}>
            <button className="text-white bg-yellow-main py-3 w-full rounded-full">
              Masuk
            </button>
          </Link>
        </div>

        {/* Button registrasi */}
        <div className="mt-3">
          <Link href="/register-choose" passHref={true}>
            <button className="text-yellow-main bg-white box-border border-2 border-yellow-main py-2.5 w-full rounded-full">
              Belum punya akun? Yuk daftar dulu
            </button>
          </Link>
        </div>

        <div className="mt-5">
          <p className="subparagraph">
            Dengan masuk atau mendaftar, kamu menyetujui{" "}
            <a className="underline">Ketentuan Layanan</a> dan{" "}
            <a className="underline">Kebijakan Privasi</a>, termasuk{" "}
            <a className="underline">Penggunaan Kuki</a>.{" "}
          </p>
        </div>
      </div>
    </>
  );
}

