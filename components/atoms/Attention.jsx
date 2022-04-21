import Image from "next/image";

export default function Attention({ icon }) {
  return (
    <>
      <div className="flex mt-3">
        <Image
          src={icon}
          width={14}
          height={14}
          alt="attention-icon"
          passHref={true}
          className="w-4"
        />
        <p className="ml-1 subparagraph mt-0.5">Biaya admin <span className="text-blue-icon">Rp500</span> - Minimum top-up <span className="text-blue-icon">Rp10.000</span></p>
      </div>
    </>
  );
}
