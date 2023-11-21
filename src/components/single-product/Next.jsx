import { FaArrowRight } from "react-icons/fa"; // Import the desired icons

const Next = ({ changeNext, setChangeNext }) => {
  return (
    <div
      className="z-50"
      onMouseEnter={() => setChangeNext("#3b82f6")} // Change color on hover to #3b82f6
      onMouseLeave={() => setChangeNext(false)}
    >
      <FaArrowRight
        color={changeNext ? changeNext : "black"} // Use changeNext state for color
        size={24}
        onClick={() => {
          // Add your next logic here
        }}
      />
    </div>
  );
};

export default Next;
