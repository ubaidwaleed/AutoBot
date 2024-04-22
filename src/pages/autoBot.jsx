// import ChatBody from "../components/autoBot/chat-body";
import ChatInput from "../components/autoBot/chat-input";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ChatCard from "../components/autoBot/chat-card";
import civic1 from "../assets/images/cars/civic/civic2.jpeg";
import civic2 from "../assets/images/cars/civic/civic2.jpeg";
import civic3 from "../assets/images/cars/civic/civic3.jpeg";
import sendImg from "../assets/images/send.png";
import axios from "axios";

const gemini = import.meta.env.VITE_REACT_APP_GEMINI_KEY;

import React, { useRef } from "react";

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

function AutoBot() {
  // const [chat, setChat] = useState([]);

  const sendMessageToGemini = async (message) => {
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${gemini}`,
        {
          contents: [
            {
              parts: [{ text: message }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      // Handle error here
      return null;
    }
  };

  const [value, setValue] = useState("");

  const [chatMessages, setChatMessages] = useState(chat);
  const sendMessage = (message) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);
    if (message.sender === "user") {
      console.log("user :", message.message);
    } else if (message.sender === "ai") {
      console.log("ai :", message.message.candidates[0].content.parts[0].text);
    }
  };

  const handleSubmit = async () => {
    if (value === "") return;

    sendMessage({ sender: "user", message: value });

    const response = await sendMessageToGemini(value);

    if (response) {
      sendMessage({ sender: "ai", message: response });
    } else {
      // Handle error here
    }

    setValue("");
  };

  const aiStyle =
    "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto";

  return (
    <>
      <div className="flex">
        <div className="flex flex-col flex-grow ml-16">
          <Sidebar />
          <div>
            <div className="z-1">
              <div className="bg-gray-900 h-screen relative py-6 sm:px-16 text-white overflow-hidden flex flex-col justify-between align-middle pt-[1.5rem]">
                <div className="absolute z-0 gradient-01"></div>
                <div className="absolute z-0 gradient-02"></div>

                {/* header */}
                <div className="mb-3 text-4xl font-bold text-center auto-bot-container">
                  <div className="auto-bot-text">AutoBot</div>
                </div>

                <div className="h-[90%] overflow-auto w-full max-w-6xl min-w-[20rem] py-8 px-4 self-center scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md">
                  {/* <ChatBody chat={chat} /> */}
                  <div
                    className="flex flex-col gap-4 no-scrollbar"
                    ref={parent}
                  >
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
                </div>

                <div className="w-full mt-7 max-w-5xl min-w-[20rem] self-center">
                  <div className="relative w-full px-4 py-4 overflow-auto bg-white rounded-lg bg-opacity-10 max-h-40">
                    <>
                      <textarea
                        onKeyDown={(e) => {
                          e.keyCode === 13 &&
                            e.shiftKey === false &&
                            handleSubmit();
                        }}
                        rows={1}
                        className="w-11/12 bg-transparent border-0 outline-none"
                        value={value}
                        type="text"
                        onChange={(e) => setValue(e.target.value)}
                      />

                      <img
                        onClick={handleSubmit}
                        src={sendImg}
                        width={20}
                        alt="send-button"
                        className="absolute duration-100 ease-in top-4 right-3 hover:cursor-pointer hover:scale-125 "
                      />
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AutoBot;
