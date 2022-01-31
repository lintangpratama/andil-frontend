import Link from "next/link";

export default function MenuBar(props) {
  return (
    <div className="flex bg-white fixed bottom-0 h-13 justify-center z-30 max-w-md w-full -ml-4 border-gray-icon border-t-[1px]">
      <Link href="/home" passHref={true}>
        <button className="px-3 py-2 w-1/4 max-w-bar min-w-bar cursor-pointer -mt-0.5">
          <a>
            <span className="inline-flex flex-col w-full justify-center items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6089 1.4165L18.3333 6.44728V18.3332H2.5V6.70158L10.6089 1.4165ZM12.6786 16.1218H16.0714V7.45343L10.6089 4.05904L4.7619 7.69668V16.1218H8.15476V9.48785H12.6786V16.1218Z"
                  fill="#FFDA44"
                  fillOpacity="1"
                />
              </svg>

              <p
                className={
                  props.currentPage === "home"
                    ? "subparagraph font-medium mt-1"
                    : "subparagraph mt-1"
                }
              >
                Beranda
              </p>
            </span>
          </a>
        </button>
      </Link>

      <Link href="/home" passHref={true}>
        <button className="px-3 py-2 w-1/4 max-w-bar min-w-bar cursor-pointer -mt-0.5">
          <a>
            <span className="inline-flex flex-col w-full justify-center items-center">
              <img src="/transaction.svg"></img>

              <p
                className={
                  props.currentPage === "help"
                    ? "subparagraph text-blue-main mt-1"
                    : "subparagraph mt-1"
                }
              >
                Transaksi
              </p>
            </span>
          </a>
        </button>
      </Link>

      <Link href="/pengurus/buat-tagihan" passHref={true}>
        <button className={props.role === "pengurus" ? "px-3 py-2 w-1/4 max-w-bar min-w-bar cursor-pointer -mt-0.5" : "hidden"}>
          <a>
            <span className="inline-flex flex-col w-full justify-center items-center">
              <img src="/create.svg"></img>

              <p
                className={
                  props.currentPage === "create"
                    ? "subparagraph text-blue-main mt-1"
                    : "subparagraph mt-1"
                }
              >
                Buat Tagihan
              </p>
            </span>
          </a>
        </button>
      </Link>

      <Link href="/home" passHref={true}>
        <button className="px-3 py-2 w-1/4 max-w-bar min-w-bar cursor-pointer -mt-0.5">
          <a>
            <span className="inline-flex flex-col w-full justify-center items-center">
              <img src="/chat.svg"></img>
              <p
                className={
                  props.currentPage === "help"
                    ? "subparagraph text-blue-main mt-1"
                    : "subparagraph  mt-1"
                }
              >
                Pesan
              </p>
            </span>
          </a>
        </button>
      </Link>

      <Link href="/home" passHref={true}>
        <button className="px-3 py-2 w-1/4 max-w-bar min-w-bar cursor-pointer -mt-0.5">
          <a>
            <span className="inline-flex flex-col w-full justify-center items-center">
              <img src="/account.svg"></img>
              <p
                className={
                  props.currentPage === "help"
                    ? "subparagraph text-blue-main mt-1"
                    : "subparagraph  mt-1"
                }
              >
                Profil
              </p>
            </span>
          </a>
        </button>
      </Link>
    </div>
  );
}
