import Caroussel from "./Caroussel";
import { useContext } from "react";
import { AppContext } from "../context/Context";

const CarousselOverlay = () => {
  const { setShow, setImage } = useContext(AppContext);

  return (
    <div className="container">
      <div className="icon-close" onClick={() => setShow(false)}>
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="white"
            fillRule="evenodd"
            className="icon-close"
          />
        </svg>
      </div>

      <Caroussel />

      <div className="container-icon icon-overlay">
        <div
          className="next"
          onClick={() => setImage((prev) => (prev - 1 < 1 ? 4 : prev - 1))}
        >
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
              className="icon-direction"
            />
          </svg>
        </div>

        <div
          className="next"
          onClick={() => setImage((prev) => (prev + 1 > 4 ? 1 : prev + 1))}
        >
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
              className="icon-direction"
            />
          </svg>
        </div>
      </div>

      <div className="overlay"></div>
    </div>
  );
};

export default CarousselOverlay;
