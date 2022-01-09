import Router from "next/router";

export default function BackButton() {
  return (
    <>
      <button onClick={() => Router.back()} className="relative -left-1">
        <img src="short_left.svg" alt="back_button"></img>
      </button>
    </>
  );
}
