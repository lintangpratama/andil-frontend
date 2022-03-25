import { useState } from "react";

export default function SmallButton({ message, onClick, img }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <button
        className="text-white flex bg-yellow-main py-2 px-6 rounded-full float-right"
        onClick={(e) => {
          e.preventDefault();
          setIsLoading(true);
          onClick(e);
          setIsLoading(false);
        }}
      >
        {message}
        {isLoading ? <img src={img} className="w-4 ml-1" /> : <></>}
      </button>
    </>
  );
}
