import { useContext } from "react";
import { AppContext } from "../context/Context";

const Caroussel = () => {
  const { image, setImage, setShow } = useContext(AppContext);
  return (
    <>
      <div className="caroussel">
        <div className="img-principal-container">
          <img
            src={`/images/image-product-${image}.jpg`}
            alt="pic-product"
            className="img-fluid img-primary"
            onClick={() => setShow(true)}
          />
        </div>

        <div className="container-icon hidden ">
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

        <div className="img-second-container">
          <img
            src="/images/image-product-1.jpg"
            alt="pic-product"
            className={`img-fluid img-second ${image === 1 ? "active" : ""}`}
            onClick={() => setImage(1)}
          />

          <img
            src="/images/image-product-2.jpg"
            alt="pic-product"
            className={`img-fluid img-second ${image === 2 ? "active" : ""}`}
            onClick={() => setImage(2)}
          />
          <img
            src="/images/image-product-3.jpg"
            alt="pic-product"
            className={`img-fluid img-second ${image === 3 ? "active" : ""}`}
            onClick={() => setImage(3)}
          />
          <img
            src="/images/image-product-4.jpg"
            alt="pic-product"
            className={`img-fluid img-second ${image === 4 ? "active" : ""}`}
            onClick={() => setImage(4)}
          />
        </div>
      </div>
    </>
  );
};

export default Caroussel;
