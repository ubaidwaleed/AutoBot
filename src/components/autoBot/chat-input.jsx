import React from "react";
import { useState } from "react";
import sendImg from "../../assets/images/send.png";
// import loaderGIF from "../../images/loader.gif";

const ChatInput = ({ sendMessage, loading }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value === "") return;
    sendMessage({ sender: "user", message: value });
    setValue("");
  };
  return (
    <div className="relative w-full px-4 py-4 overflow-auto bg-white rounded-lg bg-opacity-10 max-h-40">
      {loading ? (
        <img src={loaderGIF} className="w-8 m-auto" />
      ) : (
        <>
          <textarea
            onKeyDown={(e) => {
              e.keyCode === 13 && e.shiftKey === false && handleSubmit();
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
      )}
    </div>
  );
};

export default ChatInput;
