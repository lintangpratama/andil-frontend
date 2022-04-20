import Image from "next/image";
import Link from "next/link";

export default function BankList(props) {
  const { name, image } = props;
  return (
    <Link href="./bca">
      <div
        key={name}
        className="flex rounded-bank border border-border-bank mb-2.5 cursor-pointer"
      >
        <div className="flex py-2.5 px-2.5">
          <div className="flex w-10 h-10 rounded-full bg-bank-logo justify-center items-center">
            <Image src={image} width={30} height={30} alt="bank-image" />
          </div>
          <h3 className="font-bold my-auto ml-3">{name}</h3>
        </div>
      </div>
    </Link>
  );
}
