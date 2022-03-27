import Link from "next/link"

export default function Menu(props) {
    const { role, currentPage } = props;
  return (
    <Link href={props.role === "pengurus" ? "/pengurus" : "/home"} passHref={true}>
        <button className="px-3 py-2 w-1/5 max-w-bar  cursor-pointer -mt-0.5">
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
  )
}
