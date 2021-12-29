import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import Link from "next/link";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Home() {
  return (
    <>
      <Image src="/Logo.svg" width="60px" height="30px" alt="Logo" />
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
        <Link href="/register" passHref={true}>
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
    </>
  );
}
