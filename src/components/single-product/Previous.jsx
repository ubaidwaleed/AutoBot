import { FaArrowLeft } from "react-icons/fa"; // Import the desired icons

const Previous = ({ changePrevious, setChangePrevious }) => {
  return (
    <div
      className="z-50"
      onMouseEnter={() => setChangePrevious("#3b82f6")} // Change color on hover to #3b82f6
      onMouseLeave={() => setChangePrevious(false)}
    >
      <FaArrowLeft
        color={changePrevious ? changePrevious : "black"} // Use changePrevious state for color
        size={24}
        onClick={() => {
          // Add your previous logic here
        }}
      />
    </div>
  );
};
export default Previous;
