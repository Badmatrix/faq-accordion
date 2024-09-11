/* eslint-disable react/prop-types */
import { IoMdAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
export default function AccordItem({ item, onOpen, curOpen }) {
  const { id, question, answer } = item;
  const isOpen = curOpen === id;

  function handleClick() {
    // console.log(id);
    isOpen ? onOpen(null) : onOpen(id);
  }
  return (
    <li
      className="flex cursor-pointer items-start justify-between text-wrap border-b py-2 last:border-0"
      onClick={handleClick}
    >
      <div className="space-y-5 text-base text-purple-950 transition-all duration-300 ease-in-out first-letter:capitalize hover:text-purple-600">
        <div className="font-semibold">{question}</div>
        {isOpen && <div className="text-gray-500">{answer}</div>}
      </div>
      <button className="text-2xl">
        {isOpen ? (
          <AiFillMinusCircle className="text-neutral-700" />
        ) : (
          <IoMdAddCircle className="text-purple-600" />
        )}
      </button>
    </li>
  );
}
