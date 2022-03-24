import Link from "next/link";
import { authPage } from "middlewares/authPage";

import MenuBar from "components/organisms/MenuBar";
import HistoryBox from "components/molecules/HistoryBox";

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

export default function Transaksi() {
  const response = {
    data: [
      {
        product: "Token Listrik Rp100.000",
        id: "2172616781280",
        date: "13 Januari 2022",
        total: "Rp102.000",
        status: "Berhasil",
      },
      {
        product: "Token Listrik Rp100.000",
        id: "2172616781280",
        date: "13 Januari 2022",
        total: "Rp102.000",
        status: "Berhasil",
      },
      {
        product: "Token Listrik Rp100.000",
        id: "2172616781280",
        date: "13 Januari 2022",
        total: "Rp102.000",
        status: "Berhasil",
      },
    ],
  };

  return (
    <>
      <div className="mx-4 my-5">
        <h2 className="mb-1.5">Riwayat Transaksi</h2>
        <p className="mb-8">Lihat riwayat transaksimu bersama Andil</p>
        {response.data.map((data) => (
          <Link key={data.id} href="transaksi/1" passHref={true}>
            <a>
              <HistoryBox
                key={data.id}
                product={data.product}
                id={data.id}
                date={data.date}
                total={data.total}
                status={data.status}
              />
            </a>
          </Link>
        ))}
        <MenuBar currentPage="transaksi" />
      </div>
    </>
  );
}
