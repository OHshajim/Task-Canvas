const Card = ({ text, openModal }) => {
  const halfText = text.substring(0, text.length / 2) + "...";

  return (
    <div className="p-4 bg-white rounded shadow">
      <p className="text-sm text-gray-700">{halfText}</p>
      <button
        onClick={openModal}
        className="mt-2 text-blue-500 hover:underline text-xs"
      >
        Show More
      </button>
    </div>
  );
};
export default Card;
