export default function HistoryBox({ product, id, date, total, status, icon }) {
  return (
    <div className="flex w-full border-2 border-gray-icon mt-2.5 rounded-box">
      <div className="mx-2.5 my-2.5">
        <p className="subparagraph font-semibold">{product}</p>
        <p className="text-8px text-gray-history">{id}</p>
        <p className="text-8px text-gray-history">{date}</p>
      </div>
      <div className="my-auto ml-auto mr-2.5">
        <p className="subparagraph font-semibold text-right">{total}</p>
        <p className="text-8px font-medium text-success flex mt-0.5">
          <span className="mr-0.5 mt-1px ml-auto">
            <img src={icon} alt="success icon"></img>
          </span>
          {status}
        </p>
      </div>
    </div>
  );
}
