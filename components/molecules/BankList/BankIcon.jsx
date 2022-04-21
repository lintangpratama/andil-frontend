import Image from "next/image";

export default function BankIcon(props) {
  const { image } = props;
  return (
    <div className="flex w-10 h-10 rounded-full bg-bank-logo justify-center items-center">
      <Image src={image} width={30} height={30} alt="bank-image" />
    </div>
  );
}
