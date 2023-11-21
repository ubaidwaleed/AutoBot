import ChatBody from "../components/autoBot/chat-body";
import ChatInput from "../components/autoBot/chat-input";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

// import { useMutation } from "react-query";
// import { fetchResponse } from "./api";

function AutoBot() {
  const [chat, setChat] = useState([]);

  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetchResponse(chat);
  //   },
  //   onSuccess: (data) =>
  //     setChat((prev) => [
  //       ...prev,
  //       { sender: "ai", message: data.message.replace(/^\n\n/, "") },
  //     ]),
  // });

  // const sendMessage = async (message) => {
  //   await Promise.resolve(setChat((prev) => [...prev, message]));
  //   mutation.mutate();
  // };
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
                  <ChatBody chat={chat} />
                </div>

                <div className="w-full mt-7 max-w-5xl min-w-[20rem] self-center">
                  <ChatInput />
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
