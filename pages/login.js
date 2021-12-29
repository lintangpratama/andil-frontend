import Router from "next/router";

export default function Login() {
  return (
    <>
      {/* Back button */}
      <button onClick={() => Router.back()} className="relative -left-1">
        <img src="short_left.svg" alt="back_button"></img>
      </button>

      {/* Description */}
      <div className="mb-6 mt-7">
        <h2>Login</h2>
        <p className="mt-1">
          Masuk ke aplikasi Andil dan rasakan sendiri kemudahannya
        </p>
      </div>

      {/* Email/Phone input */}
      <div id="emailBox" className="flex flex-col mt-4">
        <label className="mb-1">Email atau Nomor HP</label>
        <input
          type="email"
          id="email"
          name="email"
          className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-black-main"
          placeholder="Ex: nama@email.com atau 085xxxxxxxx"
          onChange={() => validateEmail()}
        />
      </div>

      {/* Password input */}
      <div className="flex flex-col mt-4">
        <label className="mb-1">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="py-1.5 border-b-2 placeholder-black-main opacity-70 text-sm font-semibold focus:outline-none focus:border-black-main"
          placeholder="Masukkan password"
        />
      </div>

      {/* Button masuk */}
      <div className="mt-9">
          <button className="text-white bg-yellow-main py-3 w-full rounded-full">
            Masuk
          </button>
      </div>
    </>
  );
}
