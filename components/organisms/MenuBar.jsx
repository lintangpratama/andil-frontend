import Link from "next/link";

export default function MenuBar(props) {
  return (
    <div className="flex bg-white fixed bottom-0 h-13 justify-around z-30 max-w-md w-full -ml-4 border-gray-icon border-t-[1px]">
      <Link href={props.role === "pengurus" ? "/pengurus" : "/home"} passHref={true}>
        <button className="px-3 py-2 w-1/5 max-w-bar min-w-bar cursor-pointer -mt-0.5">
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
                  fill={props.currentPage === "home" ? "#FFDA44" : "#1F1F1F"}
                  fillOpacity={props.currentPage === "home" ? "1" : "0.5"}
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

      <Link href={props.role === "pengurus" ? "/pengurus/transaksi" : "/transaksi"} passHref={true}>
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
                  d="M16.25 2.91675L15 1.66675L13.75 2.91675L12.5 1.66675L11.25 2.91675L10 1.66675L8.75 2.91675L7.5 1.66675L6.25 2.91675L5 1.66675L3.75 2.91675L2.5 1.66675V18.3334L3.75 17.0834L5 18.3334L6.25 17.0834L7.5 18.3334L8.75 17.0834L10 18.3334L11.25 17.0834L12.5 18.3334L13.75 17.0834L15 18.3334L16.25 17.0834L17.5 18.3334V1.66675L16.25 2.91675ZM15.8333 15.9084H4.16667V4.09175H15.8333V15.9084ZM5 12.5001H15V14.1667H5V12.5001ZM5 9.16675H15V10.8334H5V9.16675ZM5 5.83342H15V7.50008H5V5.83342Z"
                  fill={
                    props.currentPage === "transaksi" ? "#FFDA44" : "#1F1F1F"
                  }
                  fillOpacity={props.currentPage === "transaksi" ? "1" : "0.5"}
                />
              </svg>

              <p
                className={
                  props.currentPage === "transaksi"
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
        <button className="px-3 py-2 w-1/4 max-w-bar min-w-bar cursor-pointer -mt-0.5 relative bottom-5">
          <a>
            <span className="inline-flex flex-col w-full justify-center items-center">
              <img src="/andil_logo.svg" width="40px"></img>

              <p
                className={
                  props.currentPage === "create"
                    ? "subparagraph text-blue-main mt-1"
                    : "subparagraph mt-1"
                }
              >
                Andil
              </p>
            </span>
          </a>
        </button>
      </Link>

      <Link href={props.role === "pengurus" ? "/pengurus/pesan" : "/pesan"} passHref={true}>
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
                  d="M16.6667 1.66675H3.33335C2.41669 1.66675 1.66669 2.41675 1.66669 3.33341V18.3334L5.00002 15.0001H16.6667C17.5834 15.0001 18.3334 14.2501 18.3334 13.3334V3.33341C18.3334 2.41675 17.5834 1.66675 16.6667 1.66675ZM16.6667 13.3334H5.00002L3.33335 15.0001V3.33341H16.6667V13.3334Z"
                  fill={props.currentPage === "pesan" ? "#FFDA44" : "#1F1F1F"}
                  fillOpacity={props.currentPage === "pesan" ? "1" : "0.5"}
                />
              </svg>

              <p
                className={
                  props.currentPage === "pesan"
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

      <Link href={props.role === "pengurus" ? "/pengurus/profil" : "/profil"} passHref={true}>
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
                  d="M9.99999 1.66675C5.39999 1.66675 1.66666 5.40008 1.66666 10.0001C1.66666 14.6001 5.39999 18.3334 9.99999 18.3334C14.6 18.3334 18.3333 14.6001 18.3333 10.0001C18.3333 5.40008 14.6 1.66675 9.99999 1.66675ZM5.89166 15.2334C6.24999 14.4834 8.43332 13.7501 9.99999 13.7501C11.5667 13.7501 13.7583 14.4834 14.1083 15.2334C12.975 16.1334 11.55 16.6667 9.99999 16.6667C8.44999 16.6667 7.02499 16.1334 5.89166 15.2334ZM15.3 14.0251C14.1083 12.5751 11.2167 12.0834 9.99999 12.0834C8.78332 12.0834 5.89166 12.5751 4.69999 14.0251C3.84999 12.9084 3.33332 11.5167 3.33332 10.0001C3.33332 6.32508 6.32499 3.33341 9.99999 3.33341C13.675 3.33341 16.6667 6.32508 16.6667 10.0001C16.6667 11.5167 16.15 12.9084 15.3 14.0251ZM9.99999 5.00008C8.38332 5.00008 7.08332 6.30008 7.08332 7.91675C7.08332 9.53342 8.38332 10.8334 9.99999 10.8334C11.6167 10.8334 12.9167 9.53342 12.9167 7.91675C12.9167 6.30008 11.6167 5.00008 9.99999 5.00008ZM9.99999 9.16675C9.30832 9.16675 8.74999 8.60842 8.74999 7.91675C8.74999 7.22508 9.30832 6.66675 9.99999 6.66675C10.6917 6.66675 11.25 7.22508 11.25 7.91675C11.25 8.60842 10.6917 9.16675 9.99999 9.16675Z"
                  fill={props.currentPage === "profil" ? "#FFDA44" : "#1F1F1F"}
                  fillOpacity={props.currentPage === "profil" ? "1" : "0.5"}
                />
              </svg>

              <p
                className={
                  props.currentPage === "profil"
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
