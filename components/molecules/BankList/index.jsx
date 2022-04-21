import Image from "next/image";
import Link from "next/link";
import BankIcon from "./BankIcon";

export default function BankList(props) {
  const { name, image } = props;
  return (
    <Link href="./bca" passHref={true}>
      <div
        key={name}
        className="flex rounded-bank border border-border-bank mb-2.5 cursor-pointer"
      >
        <div className="flex py-2.5 px-2.5">
          <BankIcon image={image} />
          <h3 className="font-bold my-auto ml-3">{name}</h3>
        </div>
      </div>
    </Link>
  );
}
