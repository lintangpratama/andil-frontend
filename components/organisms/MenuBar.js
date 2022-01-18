import Link from "next/link";

export default function MenuBar(props) {
  return (
      <div className="flex bg-white fixed bottom-0 h-13 justify-center z-30 max-w-md w-full -ml-4 border-gray-icon border-t-[1px]">
        <Link href="/" passHref={true}>
          <button className="px-3 py-2 w-1/4 max-w-bar min-w-bar cursor-pointer">
            <a>
              <span className="inline-flex flex-col w-full justify-center items-center">
              <img src="/home.svg" className="text-yellow"></img>
                <p
                  className={
                    props.currentPage === "help"
                      ? "subparagraph text-blue-main mt-0.5"
                      : "subparagraph text-bar mt-0.5"
                  }
                >
                  Beranda
                </p>
              </span>
            </a>
          </button>
        </Link>

        <Link href="/space" passHref={true}>
          <button className="px-3 py-2 w-1/4 max-w-bar min-w-bar cursor-pointer">
            <a>
              <span className="inline-flex flex-col w-full justify-center items-center">
              <img src="/transaction.svg"></img>

              <p
                  className={
                    props.currentPage === "help"
                      ? "subparagraph text-blue-main mt-0.5"
                      : "subparagraph text-bar mt-0.5"
                  }
                >
                  Transaksi
                </p>
              </span>
            </a>
          </button>
        </Link>

        <Link href="/help" passHref={true}>
          <button className="px-3 py-2 w-1/4 max-w-bar min-w-bar cursor-pointer">
            <a>
              <span className="inline-flex flex-col w-full justify-center items-center">
                <img src="/chat.svg"></img>
                <p
                  className={
                    props.currentPage === "help"
                      ? "subparagraph text-blue-main mt-0.5"
                      : "subparagraph text-bar mt-0.5"
                  }
                >
                  Pesan
                </p>
              </span>
            </a>
          </button>
        </Link>

        <Link href="/account" passHref={true}>
          <button className="px-3 py-2 w-1/4 max-w-bar min-w-bar cursor-pointer">
            <a>
              <span className="inline-flex flex-col w-full justify-center items-center">
              <img src="/account.svg"></img>
              <p
                  className={
                    props.currentPage === "help"
                      ? "subparagraph text-blue-main mt-0.5"
                      : "subparagraph text-bar mt-0.5"
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
