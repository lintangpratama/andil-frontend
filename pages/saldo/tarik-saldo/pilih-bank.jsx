import BackButton from "components/atoms/BackButton";
import BankList from "components/molecules/BankList";


export default function PilihBank() {
  const bankList = [
    {
      name: "BCA",
      image: "/bank-list/BCA.png",
    },
    {
      name: "BRI",
      image: "/bank-list/BRI.png",
    },
    {
      name: "Mandiri",
      image: "/bank-list/Mandiri.png",
    },
  ];

  return (
    <div>
      <div className="mx-4 my-5">
        {/* Back button */}
        <BackButton />

        {/* Description */}
        <div className="mb-10 mt-7">
          <h2>Pilih Bank</h2>
          <p className="mt-1">Pilih bank yang ingin digunakan untuk menarik saldo</p>
        </div>

        {/* Bank option section */}
        {bankList.map((bank) => (
          <BankList key={bank.name} name={bank.name} image={bank.image} />
        ))}
      </div>
    </div>
  );
}
