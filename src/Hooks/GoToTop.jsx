import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "./GoToTop.css";

const GoToTop = () => {
  const GoToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHidden = 450;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div className="Gototop-aboutcss">
      {isVisible && (
        <button onClick={GoToBtn} className="text-xl">
          <span className="icon">
            <IoIosArrowUp></IoIosArrowUp>
          </span>
        </button>
      )}
    </div>
  );
};

export default GoToTop;
