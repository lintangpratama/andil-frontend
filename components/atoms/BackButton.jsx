import Router from "next/router";

export default function BackButton() {
  return (
    <>
      <button onClick={() => Router.back()} className="relative -left-1">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.7875 13.75L14.2625 9.2625L12.5 7.5L5 15L12.5 22.5L14.2625 20.7375L9.7875 16.25H25V13.75H9.7875Z"
            fill="#1F1F1F"
          />
        </svg>
      </button>
    </>
  );
}
