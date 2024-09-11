import { useState } from "react";
import AccordItem from "./AccordItem";

const questions = [
  {
    id: 1,
    question: "what is Frontend mentor and how will it help me ?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi dolorem placeat, consectetur suscipit atque deleniti, soluta maxime qui illo facilis. Eius accusantium minus quas a atque, molestiae totam ut!",
  },
  {
    id: 2,
    question: "is frontend mentor free?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi dolorem placeat, consectetur suscipit atque deleniti, soluta maxime qui illo facilis. ",
  },
  {
    id: 3,
    question:
      "can i use frontent mentor project in my portfolio?",
    answer:
      "consectetur adipisicing elit. Hic eligendi dolorem placeat, consectetur suscipit atque deleniti, soluta maxime qui illo facilis. Eius accusantium minus quas a atque, molestiae totam ut!",
  },
  {
    id: 4,
    question:
      "how can i get help if i'm stuck on challenges?",
    answer:
      "consectetur adipisicing elit. Hic eligendi dolorem placeat, consectetur suscipit atque deleniti, soluta maxime qui illo facilis. Eius accusantium minus quas a atque, molestiae totam ut!",
  },
];
export default function Accordion() {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div>
      <ul className="space-y-5 py-3 mx-5">
        {questions.map((item) => (
          <AccordItem
            key={item.id}
            item={item}
            curOpen={curOpen}
            onOpen={setCurOpen}
          />
        ))}
      </ul>
    </div>
  );
}
