import React, { useRef } from "react";
// import autoAnimate from "@formkit/auto-animate";
import { useEffect } from "react";
import civic1 from "../../assets/images/cars/civic/civic2.jpeg";
import civic2 from "../../assets/images/cars/civic/civic2.jpeg";
import civic3 from "../../assets/images/cars/civic/civic3.jpeg";
import ChatCard from "./chat-card";

const civic = [
  {
    id: 1,
    imgUrl: civic1,
    name: "Civic",
    title: "Civic",
    price: "5.5 Million",
    description:
      "A popular compact car known for its fuel efficiency and reliability.",
    link: "https://www.pakwheels.com/used-cars/honda-civic-2019-for-sale-in-lahore-8220649",
  },
  {
    id: 2,
    imgUrl: civic2,
    name: "Civic",
    title: "Civic",
    price: "8.0 Million",
    description:
      "A sportier version of the classic Civic with enhanced performance features.",
    link: "https://www.pakwheels.com/used-cars/honda-civic-2022-for-sale-in-islamabad-8265116",
  },
  {
    id: 3,
    imgUrl: civic3,
    name: "Civic",
    title: "Civic",
    price: "8.5 Million",
    description:
      "A budget-friendly option that offers great value and practicality.",
    link: "https://www.pakwheels.com/used-cars/honda-civic-2019-for-sale-in-lahore-8272719",
  },
];

const chat = [
  {
    sender: "ai",
    message: "Hello! I am Autobot, your cars companion",
  },
  {
    sender: "human",
    message: "Hi there! Can you help me buy or suggest a car?",
  },
  {
    sender: "ai",
    message: "Sure, tell me your car requirements.",
  },
  {
    sender: "human",
    message: "I want to buy a new Civic, any color",
  },
  {
    sender: "ai",
    message: "Ok here are the relevant cars I could find for you:",
    cards: civic.map((car) => ({
      id: car.id,
      imgUrl: car.imgUrl,
      title: car.name,
      price: car.price,
      description: car.description,
      link: car.link,
    })),
  },
];

const ChatBody = () => {
  const aiStyle =
    "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto";

  //   const parent = useRef(null);
  //   const bottomRef = useRef(null);

  //   // only for aut animations
  //   useEffect(() => {
  //     parent.current && autoAnimate(parent.current);
  //   }, [parent]);

  //   //for scrolling bottom
  //   useEffect(() => {
  //     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  //   }, [chat]);

  return (
    <div className="flex flex-col gap-4 no-scrollbar" ref={parent}>
      {chat.map((message, i) => {
        if (message.sender === "ai" && message.cards) {
          return (
            <React.Fragment key={i}>
              <div
                className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]  ${aiStyle}`}
              >
                <pre className="whitespace-pre-wrap">
                  <span>{message.message}</span>
                </pre>
              </div>
              {message.cards.map((card, cardIndex) => (
                <ChatCard
                  key={card.id}
                  imageUrl={card.imgUrl}
                  title={card.title}
                  description={card.description}
                  price={card.price}
                  buttonText="More Info"
                  link={card.link}
                />
              ))}
            </React.Fragment>
          );
        } else {
          return (
            <div
              key={i}
              className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${
                message.sender === "ai" && aiStyle
              }`}
            >
              <pre className="whitespace-pre-wrap">
                <span>{message.message}</span>
              </pre>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ChatBody;
