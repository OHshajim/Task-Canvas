import { useState } from "react";
import { ResizableBox } from "react-resizable";
import Modal from "react-modal";
import { Arrow } from "react-arrow";
import Card from "./Card";

let Cards = [
  { id: 1, text: "Understanding React and Its Ecosystem", x: 100, y: 150 },
  {
    id: 2,
    text: "Learning Tailwind CSS for Responsive Design",
    x: 300,
    y: 200,
  },
  {
    id: 3,
    text: "Building Scalable Applications with Node.js",
    x: 500,
    y: 250,
  },
  {
    id: 4,
    text: "Mastering MongoDB for Efficient Data Storage",
    x: 700,
    y: 100,
  },
  { id: 5, text: "Implementing Authentication with JWT", x: 200, y: 350 },
  { id: 6, text: "Exploring the Power of Next.js for SEO", x: 400, y: 400 },
  {
    id: 7,
    text: "Creating Interactive UIs with React and Redux",
    x: 600,
    y: 150,
  },
  {
    id: 8,
    text: "Deploying Applications with Docker and Kubernetes",
    x: 800,
    y: 300,
  },
  {
    id: 9,
    text: "Optimizing Performance in React Applications",
    x: 100,
    y: 500,
  },
  {
    id: 10,
    text: "Understanding RESTful API Design Principles",
    x: 300,
    y: 600,
  },
];

const Canvas = () => {
  const [cards, setCards] = useState(Cards);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardAdd, setCardAdd] = useState(false);

  const handleAddCard = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    console.log(text);
    addCard(text);
  };

  const addCard = (text) => {
    setCards([...cards, { id: cards.length + 1, text: text, x: 50, y: 50 }]);
    setCardAdd(false);
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
    <div className="w-full h-screen overflow-auto relative ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {cards.map((card) => (
          <Card
            key={card.id}
            text={card.text}
            openModal={() => openModal(card)}
          />
        ))}
      </div>
      {/* Add Card */}
      <Modal
        isOpen={cardAdd}
        className="flex items-center justify-center h-full"
      >
        <div className="bg-white p-6 rounded shadow-lg max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-4">Add Card</h2>
          <form onSubmit={handleAddCard}>
            <input
              type="text"
              name="text"
              placeholder="Add text"
              required
              className="w-full px-3 py-2 border-zinc-300 border rounded-lg"
            />
            <div className="flex justify-end">
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded shadow">
                Add
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* Card Detail */}
      <Modal
        isOpen={showModal}
        className="flex items-center justify-center h-full"
      >
        <div className="bg-white p-6 rounded shadow-lg max-w-lg mx-auto">
          <h2 className="text-lg font-semibold mb-4">Card Details</h2>
          <p>{selectedCard?.text}</p>
          <div className="flex justify-end">
            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-red-500 text-white rounded shadow">
              Close
            </button>
          </div>
        </div>
      </Modal>

      {/* Add Button */}
      <div className=" fixed bottom-0 right-10">
        <button
          onClick={()=>{setCardAdd(true)}}
          className="m-4 px-4 py-2 bg-blue-500 text-white rounded-full shadow"
        >
          Add Card
        </button>
      </div>
    </div>
  );
};

export default Canvas;
