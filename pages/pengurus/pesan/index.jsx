import MenuBar from "components/organisms/MenuBar";
import Link from "next/link";

export default function Pesan() {
  return (
    <>
      <div className="mx-4 my-5">
        <h2 className="mb-1.5">Pesan</h2>
        <p className="mb-8">Bertukar informasi dengan teman dan tetanggamu</p>

        <div>
          <label>Kotak masuk</label>

          {/* Privacy policy */}
          <Link href="/">
            <a>
              <div className="flex mt-4 border-b pb-3">
                <div className="w-10 h-10 bg-yellow-main rounded-full">
                  <h2 className="text-white font-bold text-center mt-2.5">
                    HN
                  </h2>
                </div>
                <div className="flex ml-2">
                  {/* Identity */}
                  <div>
                    <h3 className="text-12">Hanna Nadiyah</h3>
                    <p className="subparagraph mt-1">Kamu punya pesan baru</p>
                    <p className="subparagraph text-8 mt-1">22/01/2022</p>
                  </div>
                </div>
              </div>
            </a>
          </Link>

          <Link href="/">
            <a>
              <div className="flex mt-4 border-b pb-3">
                <div className="w-10 h-10 bg-yellow-main rounded-full">
                  <h2 className="text-white font-bold text-center mt-2.5">
                    WS
                  </h2>
                </div>
                <div className="flex ml-2">
                  {/* Identity */}
                  <div>
                    <h3 className="text-12">Wahyu Saputra</h3>
                    <p className="subparagraph mt-1">Kamu punya pesan baru</p>
                    <p className="subparagraph text-8 mt-1">Yesterday</p>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <MenuBar currentPage="pesan" role="pengurus" />
      </div>
    </>
  );
}
