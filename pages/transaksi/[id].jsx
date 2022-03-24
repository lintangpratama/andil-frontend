import { authPage } from "middlewares/authPage";

import Image from "next/image";
import BackButton from "components/atoms/BackButton";

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
    props: null
  }
}

export default function TransactionDetail() {
  return (
    <>
      <div className="mx-4 my-5">
        <BackButton />

        {/* Header detail transaction */}
        <div className="flex mt-4 w-full justify-between">
          <Image src="/logo.svg" width={73} height={27} alt="andil logo" />
          <div className="flex flex-col justify-between">
            <p className="text-8px text-gray-history ml-auto">
              13 Jan, 03:17 PM
            </p>
            <p className="text-8px text-gray-history ml-auto">JK128747819</p>
          </div>
        </div>

        {/* Border */}
        <hr className="mt-5 border-2" />

        {/* Produk section */}
        <div className="flex mt-8">
          <div>
            <div className="flex items-center w-10 h-10 bg-yellow-icon mx-auto rounded-box">
              <img
                src="/electric.png"
                alt="electric icon"
                className="w-8 mx-auto"
              ></img>
            </div>
          </div>
          <div className="flex flex-col ml-4 justify-center ">
            <p className="text-8 font-medium text-gray-history">Produk</p>
            <h3>Token Listrik Rp100.000</h3>
          </div>
        </div>

        {/* Detail transaction */}
        <div className="mt-10">
          <h4 className="subparagraph font-medium text-gray-history">
            Detail Tagihan
          </h4>
          <div className="flex justify-between mt-3">
            <p className="subparagraph font-semibold">Token Listrik 100.000</p>
            <p className="subparagraph font-semibold">Rp98.000</p>
          </div>
          <div className="flex justify-between mt-1">
            <p className="subparagraph font-semibold">Biaya Platform</p>
            <p className="subparagraph font-semibold">Rp2.000</p>
          </div>
          <div className="flex justify-between mt-1">
            <p className="subparagraph font-semibold">Total</p>
            <p className="subparagraph font-semibold">Rp100.000</p>
          </div>

          {/* Border */}
          <hr className="border-dashed border-black-main mt-3.5 mb-3.5" />

          {/* Payment */}
          <div className="flex justify-between mt-1">
            <p className="subparagraph font-semibold">Dibayar dengan DurianPay</p>
            <p className="subparagraph font-semibold">Rp100.000</p>
          </div>

          {/* Button beli lagi */}
          <button className="text-white box-border bg-yellow-main py-2.5 w-full rounded-full mt-10">
            Beli lagi
          </button>
        </div>
      </div>
    </>
  );
}
