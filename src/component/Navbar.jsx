import { useContext } from "react";
import { AppContext } from "../context/Context";
import Cart from "./Cart";

const Navbar = () => {
  const { cart, setCart, mobile, setMobile, product } = useContext(AppContext);

  return (
    <>
      <div className="navbar">
        <div className="navbar-left-side">
          <div className="menu" onClick={() => setMobile(true)}>
            <div className="icon-menu-container">
              <img
                src="/images/icon-menu.svg"
                alt="icon-menu"
                className="img-fluid icon-menu"
              />
            </div>

            <img src="/images/logo.svg" alt="logo" className="img-fluid logo" />
          </div>

          <ul className="nav-bar">
            <li className="nav-link">Collection</li>
            <li className="nav-link">Men</li>
            <li className="nav-link">Women</li>
            <li className="nav-link">About</li>
            <li className="nav-link">Contact</li>
          </ul>
        </div>

        <div className="navbar-right-side">
          <div className="icon ">
            <div className="num-item">{product[0]?.qty}</div>
            <div
              onClick={() => {
                setCart(!cart);
              }}
            >
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#69707D"
                  fillRule="nonzero"
                  className="icon-cart"
                />
              </svg>
            </div>

            {cart && <Cart />}
          </div>

          <img
            src="/images/image-avatar.png"
            alt="avatar"
            className="img-fluid avatar"
          />
        </div>
      </div>
      <div className={`mobile-navbar ${mobile ? "slide-menu" : ""}`}>
        <img
          src="/images/icon-close.svg"
          alt="icon-menu"
          className="img-fluid icon-menu"
          onClick={() => setMobile(false)}
        />
        <ul className="nav-bar-mobile">
          <li className="nav-link link-mobile">Collection</li>
          <li className="nav-link link-mobile">Men</li>
          <li className="nav-link link-mobile">Women</li>
          <li className="nav-link link-mobile">About</li>
          <li className="nav-link link-mobile">Contact</li>
        </ul>
      </div>

      {mobile && (
        <div>
          <div className="overlay-mobile"></div>
        </div>
      )}
    </>
  );
};

export default Navbar;
