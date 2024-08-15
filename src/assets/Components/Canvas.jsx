import { useState } from "react";
import { ResizableBox } from "react-resizable";
import Modal from "react-modal";
import { Arrow } from "react-arrow";
import Card from "./Card";

const Canvas = () => {
  const [cards, setCards] = useState([
    { id: 1, text: "iuasjugdfkijasfigjijsfagijkajksfghjkiaf", x: 50, y: 50 },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardAdd, setCardAdd] = useState(false);

  const addCard = () => {
    setCardAdd(true);
    setCards([
      ...cards,
      { id: cards.length, text: "Dummy Text for the Card", x: 50, y: 50 },
    ]);
  };

  const handleDrag = (e, index) => {
    const updatedCards = [...cards];
    updatedCards[index].x = e.clientX;
    updatedCards[index].y = e.clientY;
    setCards(updatedCards);
  };

  const openModal = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  return (
    <div className="w-full h-screen overflow-auto relative bg-gray-100">
      <button
        onClick={addCard}
        className="m-4 px-4 py-2 bg-blue-500 text-white rounded shadow"
      >
        Add Card
      </button>
      {cards.map((card) => (
        <Card text={card.text} openModal={() => openModal(card)} />
      ))}

      {/* Add Card */}
      <Modal
        isOpen={cardAdd}
        onRequestClose={closeModal}
        className="flex items-center justify-center h-full"
      >
        <div className="bg-white p-6 rounded shadow-lg max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-4">Card Details</h2>
          <p>{selectedCard?.text}</p>
          <button
            onClick={closeModal}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded shadow"
          >
            Save
          </button>
        </div>
      </Modal>

      {/* Card Detail */}
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        className="flex items-center justify-center h-full"
      >
        <div className="bg-white p-6 rounded shadow-lg max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-4">Card Details</h2>
          <p>{selectedCard?.text}</p>
          <button
            onClick={closeModal}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded shadow"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Canvas;
