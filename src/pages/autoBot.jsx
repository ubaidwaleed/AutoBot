import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import sendImg from "../assets/images/send.png";
import "../styles/autoBotStyles.css";
import ChatCard from "../components/autoBot/chat-card";

function AutoBot() {
  const [activeTab, setActiveTab] = useState("newCars"); // state to keep track of which tab is active

  const tokenString = sessionStorage.getItem("token");
  const token = JSON.parse(tokenString);
  const userEmail = token.user?.email;

  // for new cars
  const [value, setValue] = useState("");
  const [chatHistory, setChatHistory] = useState(() => {
    const savedHistory = localStorage.getItem(`chatHistory-${userEmail}`);
    return savedHistory ? JSON.parse(savedHistory) : [];
  });
  const [isTyping, setIsTyping] = useState(false);
  const [initialMessageSent, setInitialMessageSent] = useState(() => {
    const savedHistory = localStorage.getItem(`chatHistory-${userEmail}`);
    return !!savedHistory; // Convert to boolean: true if savedHistory is not null
  });

  //for old cars
  const [valueOld, setValueOld] = useState("");
  const [chatHistoryOld, setChatHistoryOld] = useState([]); // This will store all chat messages
  const [isTypingOld, setIsTypingOld] = useState(false);
  const [initialMessageSentOld, setInitialMessageSentOld] = useState(false);

  //for parts/accessories
  const [valuePart, setValuePart] = useState("");
  const [chatHistoryPart, setChatHistoryPart] = useState([]); // This will store all chat messages
  const [isTypingPart, setIsTypingPart] = useState(false);
  const [initialMessageSentPart, setInitialMessageSentPart] = useState(false);

  //-----------------------setting chat in local storage------------------------------//

  /////////////////////////////////////////////////////////////////////////////////////

  const systemMessageNewCars = {
    role: "system",
    content:
      "You are a smart, helpful car specialist and assistant that provides users in Pakistan with recommendations and answers to their queries related to new cars. You must include all relevant information for the user's query in detail. For example, if five cars are relevant to the user query, you must include all five cars. Use currency slangs used in Pakistan like lacs, crores, and arabs. Respond intelligently and according to the user's query with consideration of his previous queries with the best suitable data. You can use additional information from car review websites like PakWheels. Your response must be in JSON format and include a key named 'flag' with the value 1. Include user greetings, but only answer car-related questions. Example of your response:{ flag: 1,assistant: Your response} Here are some examples of user queries and your expected responses but these examples do not include more details of the cars so your response should include more details. Examples are: Query: Recommend me some new sedans under 30 lacs in Pakistan.Your response: {flag: 1,assistant: Hello! Here are some new sedans under 30 lacs in Pakistan: 1. Honda City - Price: 25 lacs 2. Toyota Yaris - Price: 28 lacs 3. Suzuki Ciaz - Price: 22 lacs.}Query: Which SUV is better: Toyota Fortuner or Honda BR-V?{flag: 1, assistant:Hi there! Both Toyota Fortuner and Honda BR-V are excellent choices. Here’s a comparison: - Toyota Fortuner: - Price: 80 lacs- Engine: 2.7L- Features: Advanced safety features, spacious interior - Honda BR-V: - Price: 45 lacs- Engine: 1.5L - Features: Fuel-efficient, compact design. For more details, visit PakWheels.} Query: Can you give me a buying guide for new hatchbacks in Pakistan? { flag: 1,assistant: Greetings! Here’s a buying guide for new hatchbacks in Pakistan: 1. Suzuki Swift: Price - 25 lacs, Known for - Reliability, Resale value 2. Kia Picanto: Price - 23 lacs, Known for - Modern features, Comfort 3. Toyota Vitz: Price - 20 lacs, Known for - Fuel efficiency, Performance Make sure to check PakWheels for detailed reviews and user experiences.} Make sure your response is always relevant to the user's car-related queries, and format the JSON response correctly. If user asks for used cars (that is not 2024 models) or parts or accesories then just respond that you can provide information on new cars only for old cars you can go to old car chatbot or for parts and accessories you can go to parts and accessories chatbot.",
  };

  const systemMessageUsedCars = {
    role: "system",
    content:
      "You are a smart, helpful car specialist and assistant that provides users in Pakistan with recommendations and answers to their queries related to used cars. You must include all relevant information including images links and link of pakwheels ad from the data for the user's query in detail. For example, if five cars are relevant and shortlisted to the user query and requirements, then list 5 best and relevant different used cars for each car shortlisted (e.g., if Civic and Corolla are shortlisted, then list 5 different used cars of each Civic and Corolla). Use currency slangs used in Pakistan like lacs, crores, and arabs. Respond intelligently and according to the user's query with consideration of their previous queries with the best suitable data. You can use additional information from car review websites like PakWheels. Your response must be in JSON format and include a key named flag with the value 1. Must include links from the data provided to you, also the links of images and mention that you can visit PakWheels ad no of the vehicle. Include user greetings, but only answer used car-related questions. Your response must not include any other keys value pairs other than flag and assisstant. Include minimum 5 relevant car ads for each car from best to worst on basis of condition. Here are some example queries and responses: Query: Recommend me some used sedans under 30 lacs with mileage of 150000 kms, location Lahore and registered in Lahore, in Pakistan. Response: { flag: 1, assistant: Hello! Here are some used sedans under 30 lacs in Lahore with Lahore registration and mileage under 150000 kms in Pakistan: 1.1. Honda City 2018 - Price: 25 lacs, Mileage: 140000 kms, Fuel Type: Petrol, Transmission: Automatic, Color: White, Engine Capacity: 1300cc, Assembly: Local, Features: ABS, Airbags, Power Windows,Image Links: and Ad link:  . 1.2. Honda City 2018 - Price: 25 lacs, Mileage: 140000 kms, Fuel Type: Petrol, Transmission: Automatic, Color: White, Engine Capacity: 1300cc, Assembly: Local, Features: ABS, Airbags, Power Windows,Image Links: and Ad link:  . 1.3. Honda City 2018 - Price: 25 lacs, Mileage: 140000 kms, Fuel Type: Petrol, Transmission: Automatic, Color: White, Engine Capacity: 1300cc, Assembly: Local, Features: ABS, Airbags, Power Windows,Image Links: and Ad link: . 1.4. Honda City 2018 - Price: 25 lacs, Mileage: 140000 kms, Fuel Type: Petrol, Transmission: Automatic, Color: White, Engine Capacity: 1300cc, Assembly: Local, Features: ABS, Airbags, Power Windows,Image Links: and Ad link: . 1.5. Honda City 2018 - Price: 25 lacs, Mileage: 140000 kms, Fuel Type: Petrol, Transmission: Automatic, Color: White, Engine Capacity: 1300cc, Assembly: Local, Features: ABS, Airbags, Power Windows,Image Links: and Ad link: . 2. Toyota Yaris 2019 - Price: 28 lacs, Mileage: 130000 kms, Fuel Type: Petrol, Transmission: Manual, Color: Silver, Engine Capacity: 1500cc, Assembly: Local, Features: Air Conditioning, Power Steering, Alloy Rims,Image Links: and Ad link: . 3. Suzuki Ciaz 2017 - Price: 22 lacs, Mileage: 125000 kms, Fuel Type: Petrol, Transmission: Automatic, Color: Black, Engine Capacity: 1400cc, Assembly: Imported, Features: Keyless Entry, Push Start, Cruise Control,Image Links: and Ad link: . 4. Nissan Sunny 2016 - Price: 20 lacs, Mileage: 140000 kms, Fuel Type: Petrol, Transmission: Manual, Color: Blue, Engine Capacity: 1500cc, Assembly: Imported, Features: Touch Screen, Rear Camera, Navigation System,Image Links: and Ad link: . 5. Hyundai Elantra 2018 - Price: 27 lacs, Mileage: 145000 kms, Fuel Type: Petrol, Transmission: Automatic, Color: Grey, Engine Capacity: 1600cc, Assembly: Imported, Features: Leather Seats, Sunroof, Climate Control,Image Links: and Ad link: . } Query: Which SUV of 2022 model is better: Toyota Fortuner or Honda BR-V? Response: { flag: 1, assistant: Hi there! Both Toyota Fortuner and Honda BR-V are excellent choices. Here’s a comparison: - *Toyota Fortuner:* - Price: 80 lacs - Engine: 2.7L - Mileage: 20,000 kms - Fuel Type: Petrol - Transmission: Automatic - Registered In: Karachi - Color: Black - Assembly: Local - Features: Advanced safety features, spacious interior, leather seats, sunroof, navigation system. - *Honda BR-V:* - Price: 45 lacs - Engine: 1.5L - Mileage: 15,000 kms - Fuel Type: Petrol - Transmission: CVT - Registered In: Lahore - Color: White - Assembly: Local - Features: Fuel-efficient, compact design, touch screen, rear camera, climate control. ,Image Links: and Ad link: . For more details, visit PakWheels. } Additional Scenarios: If the user asks for new cars (2024 models) or parts or accessories: Response: { flag: 0, assistant: I can provide information on used cars only. For new cars, you can visit the new car chatbot, and for parts and accessories, you can go to the parts and accessories chatbot. } If the user query has insufficient information: Example Response: { flag: 0, Questions: [ What is your price budget?, Where are you located?, What model year are you looking for?, What is the mileage limit for the car?, Do you have a preference for fuel type?, What type of transmission do you prefer?, Which city do you want the car to be registered in?, What color of the car are you interested in?, Are you looking for a locally assembled or imported car?, What engine capacity are you looking for?, What body type are you interested in like hatchback, SUV, sedan, etc.?, Are there any specific features you are looking for in a car? ] } If the user query is unrelated to automobiles or is not a greeting: Example Response: { flag: 0, assistant: I am sorry, I can only provide assistance to your queries that are related to used automobiles. If you have any queries related to used cars, I will be happy to help. }   Your response must be an object not a string. Your response must inclue images links and ad link of pakwheels.}",
  };

  const systemMessageParts = {
    role: "system",
    content:
      "You are a smart, helpful car specialist and assistant that provides users in Pakistan with recommendations and answers to their queries related to automobile parts and accessories. You must include all relevant information for the user's query in detail. For example, if multiple parts are relevant and shortlisted for the user's query and requirements, then list the best and most relevant parts for each query. Use currency slangs used in Pakistan like lacs, crores, and arabs. Respond intelligently and according to the user's query with consideration of their previous queries with the best suitable data. You can use additional information from parts and accessories review websites like Sehgal motors and PakWheels. Your response must be in JSON format and include a key named flag with the value 1. Mention that the user can visit the autobot website to buy parts and accessories or can visit from Sehgal motors and PakWheels website. Include user greetings, but only answer parts and accessories-related questions. Include relevant parts and accessories for each query from best to worst on the basis of compatibility and quality. Example queries and responses: Query: Recommend me some exterior parts for a Suzuki Alto 2018-2021 in Pakistan. Response: { flag: 1, assistant: Hello! Here are some exterior parts for a Suzuki Alto 2018-2021 in Pakistan: [{ Title: Suzuki Alto VX And VXR Automatic Japanese Side Mirror Chrome Cover RS Style MA00159, OriginalPrice: Rs.2,328, DiscountedPrice: Rs.1,200, Description: Suzuki Alto VX And VXR Automatic Japanese Side Mirror Chrome Cover RS Style- Model 2018-2021 MA00159, Type: exterior, Model: 2018-2021 }, { Title: Suzuki Alto Window Weather Strips Chrome 4 Pcs - Model 2018-2021, OriginalPrice: Rs.1,350, DiscountedPrice: Rs.1,000, Description: Elevate the look of your Suzuki Alto and safeguard it against the elements with our premium Chrome Window Weather Strips. Specifically designed for the 2018-2021 models, these four meticulously crafted pieces offer a seamless blend of style and functionality. }, { Title: Suzuki Alto Roof Rails - Model 2018-2021, OriginalPrice: Rs.3,000, DiscountedPrice: Rs.2,500, Description: Enhance your Suzuki Alto's utility with these stylish and durable roof rails designed specifically for 2018-2021 models. }, { Title: Suzuki Alto Rear Bumper Protector - Model 2018-2021, OriginalPrice: Rs.1,500, DiscountedPrice: Rs.1,200, Description: Protect your Suzuki Alto's rear bumper from scratches and minor impacts with this high-quality bumper protector. }, { Title: Suzuki Alto LED Headlights - Model 2018-2021, OriginalPrice: Rs.5,000, DiscountedPrice: Rs.4,000, Description: Upgrade your Suzuki Alto's lighting with these high-performance LED headlights designed for 2018-2021 models. }] } Example additional scenario: If the user query has insufficient information: Example response: { flag: 0, Questions: [ What part or accessory you are interested in to buy?, What is the model year of the car for this part or accessory?, Is the part or accessory for the interior or exterior of the car?, Can you provide a description of the part or accessory like what you want e.g colour, size etc?,What is your price budget? ] } If the user query is unrelated to parts and accessories or is not a greeting: Example response: { flag: 0, assistant: I am sorry, I can only provide assistance to your queries that are related to automobile parts and accessories. If you have any queries related to this, I will be happy to help. ",
  };

  // ---------------------------------------------------for new cars------------------------------------------------------------
  const sendMessageToLocalServer = async (history) => {
    setIsTyping(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/chatBot/newcar/chat",
        { gptarray: history }
      );

      let receivedMessage;
      console.log("New cars", response);
      if (typeof response.data === "string") {
        // Extract the "assistant" content from the JSON formatted string
        const assistantContentStart =
          response.data.indexOf('"assistant":') + 13; // Position after "assistant":
        const assistantContentEnd = response.data.lastIndexOf('"}'); // Position before the last "}"
        const assistantMessage = response.data
          .slice(assistantContentStart, assistantContentEnd)
          .trim();
        const finalMessage = assistantMessage
          .replace(/^"|"$/g, "")
          .replace(/\\n/g, "\n")
          .replace(/\\"/g, '"'); // Clean up the string

        receivedMessage = {
          role: "assistant",
          content: finalMessage,
        };
      } else if (response.data && response.data.flag === 1) {
        receivedMessage = {
          role: "assistant",
          content: response.data.assistant,
        };
      } else if (response.data.flag === 0 && response.data.Questions) {
        const questionsText = response.data.Questions.join(" ");
        receivedMessage = {
          role: "assistant",
          content: questionsText,
        };
      } else {
        receivedMessage = {
          role: "assistant",
          content: response.data.assistant,
        };
      }

      setChatHistory((prev) => {
        const updatedHistory = [...prev, receivedMessage];
        console.log(
          "New Cars -Updated chat history after receiving response:",
          updatedHistory
        );
        localStorage.setItem(
          `chatHistory-${userEmail}`,
          JSON.stringify(updatedHistory)
        ); // Save to localStorage

        return updatedHistory;
      });
      setIsTyping(false);
    } catch (error) {
      console.error("New Cras - Error sending message to local server:", error);
      setIsTyping(false);
    }
  };

  const handleSubmit = async () => {
    if (value.trim() === "") return;

    const userMessage = {
      role: "user",
      content: value,
    };

    let newHistory = [...chatHistory, userMessage];

    if (!initialMessageSent) {
      newHistory = [systemMessageNewCars, ...newHistory];
      setInitialMessageSent(true);
    }

    setChatHistory(newHistory); // Update state with new history

    console.log("New Cars - Messages to send:", newHistory); // Log the messages being sent
    localStorage.setItem(
      `chatHistory-${userEmail}`,
      JSON.stringify(newHistory)
    ); // Save to localStorage

    setValue(""); // Reset input field

    sendMessageToLocalServer(newHistory); // Send the updated chat history to the server
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////

  //------------------------------------------for old cars------------------------------------------------//

  const sendMessageToLocalServerOld = async (history) => {
    setIsTypingOld(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/chatBot/usedcar/chat",
        { gptarray: history }
      );

      let receivedMessage;
      console.log("Old cars", response);
      if (typeof response.data === "string") {
        // Extract the "assistant" content from the JSON formatted string
        const assistantContentStart =
          response.data.indexOf('"assistant":') + 13; // Position after "assistant":
        const assistantContentEnd = response.data.lastIndexOf('"}'); // Position before the last "}"
        const assistantMessage = response.data
          .slice(assistantContentStart, assistantContentEnd)
          .trim();
        const finalMessage = assistantMessage
          .replace(/^"|"$/g, "")
          .replace(/\\n/g, "\n")
          .replace(/\\"/g, '"'); // Clean up the string

        receivedMessage = {
          role: "assistant",
          content: finalMessage,
        };
      } else if (response.data && response.data.flag === 1) {
        receivedMessage = {
          role: "assistant",
          content: response.data.assistant,
        };
      } else if (response.data.flag === 0 && response.data.Questions) {
        const questionsText = response.data.Questions.join(" ");
        receivedMessage = {
          role: "assistant",
          content: questionsText,
        };
      } else {
        receivedMessage = {
          role: "assistant",
          content: response.data.assistant,
        };
      }

      setChatHistoryOld((prev) => {
        const updatedHistory = [...prev, receivedMessage];
        console.log(
          "Old cars - Updated chat history after receiving response:",
          updatedHistory
        );
        return updatedHistory;
      });
      setIsTypingOld(false);
    } catch (error) {
      console.error("Old cars - Error sending message to local server:", error);
      setIsTypingOld(false);
    }
  };

  const handleSubmitOld = async () => {
    if (valueOld.trim() === "") return;

    const userMessage = {
      role: "user",
      content: valueOld,
    };

    let newHistory = [...chatHistoryOld, userMessage];

    if (!initialMessageSentOld) {
      newHistory = [systemMessageUsedCars, ...newHistory];
      setInitialMessageSentOld(true);
    }

    setChatHistoryOld(newHistory); // Update state with new history

    console.log("Old cars - Messages to send:", newHistory); // Log the messages being sent

    setValueOld(""); // Reset input field

    sendMessageToLocalServerOld(newHistory); // Send the updated chat history to the server
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  //------------------------------------------for parts/accessories------------------------------------------------//

  // const sendMessageToLocalServerPart = async (history) => {
  //   setIsTypingPart(true);
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/chatBot/partsAndAccessories/chat",
  //       { gptarray: history }
  //     );

  //     let receivedMessage;
  //     console.log("Parts - ", response);
  //     if (typeof response.data === "string") {
  //       // Extract the "assistant" content from the JSON formatted string
  //       const assistantContentStart =
  //         response.data.indexOf('"assistant":') + 13; // Position after "assistant":
  //       const assistantContentEnd = response.data.lastIndexOf('"}'); // Position before the last "}"
  //       const assistantMessage = response.data
  //         .slice(assistantContentStart, assistantContentEnd)
  //         .trim();
  //       const finalMessage = assistantMessage
  //         .replace(/^"|"$/g, "")
  //         .replace(/\\n/g, "\n")
  //         .replace(/\\"/g, '"'); // Clean up the string

  //       receivedMessage = {
  //         role: "assistant",
  //         content: finalMessage,
  //       };
  //     } else if (response.data && response.data.flag === 1) {
  //       receivedMessage = {
  //         role: "assistant",
  //         content: response.data.assistant,
  //       };
  //     } else if (response.data.flag === 0 && response.data.Questions) {
  //       const questionsText = response.data.Questions.join(" ");
  //       receivedMessage = {
  //         role: "assistant",
  //         content: questionsText,
  //       };
  //     } else {
  //       receivedMessage = {
  //         role: "assistant",
  //         content: response.data.assistant,
  //       };
  //     }

  //     setChatHistoryPart((prev) => {
  //       const updatedHistory = [...prev, receivedMessage];
  //       console.log(
  //         "Parts - Updated chat history after receiving response:",
  //         updatedHistory
  //       );
  //       return updatedHistory;
  //     });
  //     setIsTypingPart(false);
  //   } catch (error) {
  //     console.error("Parts - Error sending message to local server:", error);
  //     setIsTypingPart(false);
  //   }
  // };

  const sendMessageToLocalServerPart = async (history) => {
    setIsTypingPart(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/chatBot/partsAndAccessories/chat",
        { gptarray: history }
      );

      let receivedMessage;
      console.log("Parts - ", response);
      let content = "";

      if (typeof response.data === "string") {
        // Extract and format the "assistant" content from the JSON formatted string
        const assistantContentStart =
          response.data.indexOf('"assistant":') + 13;
        const assistantContentEnd = response.data.lastIndexOf('"}');
        const assistantMessage = response.data
          .slice(assistantContentStart, assistantContentEnd)
          .trim()
          .replace(/^"|"$/g, "")
          .replace(/\\n/g, "\n")
          .replace(/\\"/g, '"');
        content = assistantMessage;
      } else if (response.data && response.data.flag === 1) {
        content = response.data.assistant;

        // Add the note if available
        if (response.data.note) {
          content += "\n\n\n" + response.data.note;
        } else if (response.data.source) {
          content += "\n\n\n" + response.data.source;
        } else if (response.data.additionalInformation) {
          content += "\n\n\n" + response.data.additionalInformation;
        } else if (response.data.reminder) {
          content += "\n\n\n" + response.data.reminder;
        } else if (response.data.Note) {
          content += "\n\n\n" + response.data.Note;
        } else if (response.data.extraInformation) {
          content += "\n\n\n" + response.data.extraInformation;
        }

        // Normalize response data keys and dynamically handle different types of product categories
        const normalizedData = Object.keys(response.data).reduce((acc, key) => {
          acc[key.toLowerCase()] = response.data[key];
          return acc;
        }, {});

        const categories = [
          "interiorparts",
          "exteriorparts",
          "products",
          "parts",
          "items",
          "recommended_parts",
        ]; // Lowercase for comparison
        categories.forEach((category) => {
          if (normalizedData[category] && normalizedData[category].length > 0) {
            const categoryDetails = normalizedData[category]
              .map((product, index) => {
                return `${index + 1}. ${product.Title} - ${
                  product.Description
                } Price: ${product.DiscountedPrice} (Original Price: ${
                  product.OriginalPrice
                })`;
              })
              .join("\n\n\n");
            content +=
              `\n\n\n${
                category[0].toUpperCase() +
                category.slice(1).replace(/parts$/, " Parts")
              }: \n\n` + categoryDetails;
          }
        });
      } else if (response.data.flag === 0 && response.data.Questions) {
        const questionsText = response.data.Questions.join(" ");
        content = questionsText;
      } else {
        content = response.data.assistant;
      }

      receivedMessage = {
        role: "assistant",
        content: content,
      };

      setChatHistoryPart((prev) => {
        const updatedHistory = [...prev, receivedMessage];
        console.log(
          "Parts - Updated chat history after receiving response:",
          updatedHistory
        );
        return updatedHistory;
      });
      setIsTypingPart(false);
    } catch (error) {
      console.error("Parts - Error sending message to local server:", error);
      setIsTypingPart(false);
    }
  };

  const handleSubmitPart = async () => {
    if (valuePart.trim() === "") return;

    const userMessage = {
      role: "user",
      content: valuePart,
    };

    let newHistory = [...chatHistoryPart, userMessage];

    if (!initialMessageSentPart) {
      newHistory = [systemMessageParts, ...newHistory];
      setInitialMessageSentPart(true);
    }

    setChatHistoryPart(newHistory); // Update state with new history

    console.log("Part  - Messages to send:", newHistory); // Log the messages being sent

    setValuePart(""); // Reset input field

    sendMessageToLocalServerPart(newHistory); // Send the updated chat history to the server
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  const aiStyle =
    "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto";

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-grow ml-16">
        <div className="bg-gray-900 h-screen relative py-6 sm:px-16 text-white overflow-hidden flex flex-col justify-between align-middle pt-[1.5rem]">
          <div className="mb-3 text-4xl font-bold text-center auto-bot-container">
            AutoBot
          </div>

          <div className="absolute top-0 left-0 flex p-4 space-x-2 rounded-lg">
            <button
              className={`px-4 py-2 text-white font-semibold rounded-md transition-colors duration-300 
               ${
                 activeTab === "newCars"
                   ? "bg-gradient-to-r from-blue-500 to-blue-700"
                   : "bg-gray-300 text-gray-800"
               }`}
              onClick={() => setActiveTab("newCars")}
            >
              New Cars
            </button>
            <button
              className={`px-4 py-2 text-white font-semibold rounded-md transition-colors duration-300 
               ${
                 activeTab === "oldCars"
                   ? "bg-gradient-to-r from-green-500 to-green-700"
                   : "bg-gray-300 text-gray-800"
               }`}
              onClick={() => setActiveTab("oldCars")}
            >
              Old Cars
            </button>
            <button
              className={`px-4 py-2 text-white font-semibold rounded-md transition-colors duration-300 
               ${
                 activeTab === "accessories"
                   ? "bg-gradient-to-r from-purple-500 to-purple-700"
                   : "bg-gray-300 text-gray-800"
               }`}
              onClick={() => setActiveTab("accessories")}
            >
              Parts/Accessories
            </button>
          </div>

          {/* show in case of new cars button is pressed */}
          {activeTab === "newCars" && (
            <>
              <div className="h-[90%] overflow-auto w-full max-w-6xl min-w-[20rem] py-8 px-4 self-center scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md">
                <div className="flex flex-col gap-4 no-scrollbar">
                  {chatHistory.slice(1).map((message, index) => (
                    <div
                      key={index}
                      className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${
                        message?.role === "assistant" ? aiStyle : ""
                      }`}
                    >
                      <pre className="whitespace-pre-wrap">
                        <span>{message?.content}</span>
                      </pre>
                    </div>
                  ))}

                  {isTyping && (
                    <pre className="whitespace-pre-wrap">
                      <div className="flex">
                        <span className="typing-dots"></span>
                        <span className="typing-dots"></span>
                        <span className="typing-dots"></span>
                      </div>
                    </pre>
                  )}
                </div>
              </div>
              <div className="w-full mt-7 max-w-5xl min-w-[20rem] self-center">
                <div className="relative w-full px-4 py-4 overflow-auto bg-white rounded-lg bg-opacity-10 max-h-40">
                  <textarea
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit();
                      }
                    }}
                    rows={1}
                    className="w-11/12 bg-transparent border-0 outline-none"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <img
                    onClick={handleSubmit}
                    src={sendImg}
                    width={20}
                    alt="send-button"
                    className="absolute duration-100 ease-in top-4 right-3 hover:cursor-pointer hover:scale-125"
                  />
                </div>
              </div>
            </>
          )}

          {/* here give one for old cars */}
          {activeTab === "oldCars" && (
            <>
              <div className="h-[90%] overflow-auto w-full max-w-6xl min-w-[20rem] py-8 px-4 self-center scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md">
                <div className="flex flex-col gap-4 no-scrollbar">
                  {/* {chatHistoryOld.slice(1).map((message, index) => (
                    <div
                      key={index}
                      className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${
                        message?.role === "assistant" ? aiStyle : ""
                      }`}
                    >
                      <pre className="whitespace-pre-wrap">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: message?.content.replace(
                              /(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
                              '<a href="$1" target="_blank">$1</a>'
                            ),
                          }}
                        ></span>
                      </pre>
                    </div>
                  ))} */}

                  {/* {chatHistoryOld.slice(1).map((message, index) => (
                    <div
                      key={index}
                      className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${
                        message?.role === "assistant" ? aiStyle : ""
                      }`}
                    >
                      <pre className="whitespace-pre-wrap">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: message?.content
                              .replace(
                                /(?<!")(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*\.(?:jpg|jpeg|png|gif|webp))(?!")/gi,
                                '<img src="$1" alt="Image" style="width:500px; height:250px;">'
                              )
                              .replace(
                                /(?<!")(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])(?!")/gi,
                                '<a href="$1" target="_blank">$1</a>'
                              ),
                          }}
                        ></span>
                      </pre>
                    </div>
                  ))} */}

                  {chatHistoryOld.slice(1).map((message, index) => (
                    <div
                      key={index}
                      className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${
                        message?.role === "assistant" ? aiStyle : ""
                      }`}
                    >
                      <pre className="whitespace-pre-wrap">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: message?.content
                              .replace(
                                /(?<!")(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*\.(?:jpg|jpeg|png|gif|webp))(?!")/gi,
                                '<a href="$1" target="_blank"><img src="$1" alt="Image" style="width:500px; height:300px;"></a>'
                              )
                              .replace(
                                /(?<!")(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])(?!")/gi,
                                '<a href="$1" style="color: lightblue; text-decoration: underline;" target="_blank">$1</a>'
                              ),
                          }}
                        ></span>
                      </pre>
                    </div>
                  ))}

                  {isTypingOld && (
                    <pre className="whitespace-pre-wrap">
                      <div className="flex">
                        <span className="typing-dots"></span>
                        <span className="typing-dots"></span>
                        <span className="typing-dots"></span>
                      </div>
                    </pre>
                  )}
                </div>
              </div>
              <div className="w-full mt-7 max-w-5xl min-w-[20rem] self-center">
                <div className="relative w-full px-4 py-4 overflow-auto bg-white rounded-lg bg-opacity-10 max-h-40">
                  <textarea
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmitOld();
                      }
                    }}
                    rows={1}
                    className="w-11/12 bg-transparent border-0 outline-none"
                    value={valueOld}
                    onChange={(e) => setValueOld(e.target.value)}
                  />
                  <img
                    onClick={handleSubmitOld}
                    src={sendImg}
                    width={20}
                    alt="send-button"
                    className="absolute duration-100 ease-in top-4 right-3 hover:cursor-pointer hover:scale-125"
                  />
                </div>
              </div>{" "}
            </>
          )}

          {/* here for parts/accessories */}
          {activeTab === "accessories" && (
            <>
              <div className="h-[90%] overflow-auto w-full max-w-6xl min-w-[20rem] py-8 px-4 self-center scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md">
                <div className="flex flex-col gap-4 no-scrollbar">
                  {chatHistoryPart.slice(1).map((message, index) => (
                    <div
                      key={index}
                      className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${
                        message?.role === "assistant" ? aiStyle : ""
                      }`}
                    >
                      <pre className="whitespace-pre-wrap">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: message?.content
                              .replace(
                                /(?<!")(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*\.(?:jpg|jpeg|png|gif|webp))(?!")/gi,
                                '<a href="$1" target="_blank"><img src="$1" alt="Image" style="width:500px; height:300px;"></a>'
                              )
                              .replace(
                                /(?<!")(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])(?!")/gi,
                                '<a href="$1" style="color: blue; text-decoration: underline;" target="_blank">$1</a>'
                              ),
                          }}
                        ></span>
                      </pre>
                    </div>
                  ))}

                  {isTypingPart && (
                    <pre className="whitespace-pre-wrap">
                      <div className="flex">
                        <span className="typing-dots"></span>
                        <span className="typing-dots"></span>
                        <span className="typing-dots"></span>
                      </div>
                    </pre>
                  )}
                </div>
              </div>
              <div className="w-full mt-7 max-w-5xl min-w-[20rem] self-center">
                <div className="relative w-full px-4 py-4 overflow-auto bg-white rounded-lg bg-opacity-10 max-h-40">
                  <textarea
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmitPart();
                      }
                    }}
                    rows={1}
                    className="w-11/12 bg-transparent border-0 outline-none"
                    value={valuePart}
                    onChange={(e) => setValuePart(e.target.value)}
                  />
                  <img
                    onClick={handleSubmitPart}
                    src={sendImg}
                    width={20}
                    alt="send-button"
                    className="absolute duration-100 ease-in top-4 right-3 hover:cursor-pointer hover:scale-125"
                  />
                </div>
              </div>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AutoBot;
