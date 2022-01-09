export default function SmallButton({ message, onClick }) {
  return (
    <>
      <button className="text-white bg-yellow-main py-2 px-6 rounded-full float-right" onClick={onClick}>
        {message}
      </button>
    </>
  );
}