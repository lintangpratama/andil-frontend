import Link from "next/link";

import BackButton from "components/atoms/BackButton";

export default function RegisterChoose() {
  return (
    <>
      <div className="mx-4 my-5">
        <BackButton />

        {/* Title page */}
        <div className="mb-6 mt-7">
          <h2>Login</h2>
          <p className="mt-1">Kamu ingin masuk sebagai apa?</p>
        </div>

        {/* Image illustration */}
        <div className="w-full h-full">
          <img
            src="/curious-illustration.svg"
            className="mx-auto w-70"
            alt="Illustration"
          />

          <div className="mt-6">
            <Link href="/pengurus/login" passHref={true}>
              <button className="text-white bg-yellow-main py-2 w-full max-w-illustration rounded-full horizontal-center">
                Pengurus
              </button>
            </Link>
            <Link href="/login" passHref={true}>
              <button className="text-white bg-yellow-main py-2 w-full max-w-illustration rounded-full horizontal-center mt-3">
                Warga
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
