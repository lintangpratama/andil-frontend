export default function Home() {
  const firstName = "Wahyu";
  const monthlyBill = "Rp120.000";

  return (
    <>
      {/* Main header */}
      <div className="bg-img-main">
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
              Bayar
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-4">
        <div className="relative flex w-full bg-white shadow-bottom rounded-box h-18 -top-6">
          <div className="mx-2.5 my-2.5">
          <div className="w-full"></div>
            <h4 className="text-yellow-main">Saldo <span><img src="logo.svg" className="w-8 inline-block -mt-0.5" /></span></h4>
            <h2 className="text-secondary mt-0.5">Rp20.598</h2>
            <p className="subparagraph mt-1.5 underline text-secondary"><a>Lihat histori transaksi</a></p>
          </div>
          <div className="my-auto ml-auto mr-3.5">
            <button className="py-0.5 px-2.5 border my-auto border-yellow-main text-yellow-main rounded-full">Isi Saldo</button>
          </div>
        </div>
      </div>
    </>
  );
}
