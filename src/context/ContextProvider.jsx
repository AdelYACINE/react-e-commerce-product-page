import { AppContext } from "./Context";
import { useState } from "react";

const ContextProvider = ({ children }) => {
  const [image, setImage] = useState(1);
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [qty, setQty] = useState(0);
  const [product, setProduct] = useState([]);

  const addProduct = () => {
    const item = {
      name: "Fall Limited Edition Sneakers",
      qty,
      price: 125,
      pic: "/images/image-product-1.jpg",
    };
    setProduct((prevProduct) => {
      setQty(0);

      if (qty === 0) return prevProduct;
      else if (prevProduct.find((pro) => pro.name === item.name)) {
        const updatedProduct = prevProduct.map((pro) =>
          pro.name === item.name ? { ...pro, qty: pro.qty + qty } : pro
        );

        return updatedProduct;
      } else {
        const updatedProduct = [...prevProduct, item];

        return updatedProduct;
      }
    });
  };

  return (
    <AppContext.Provider
      value={{
        image,
        setImage,
        show,
        setShow,
        cart,
        setCart,
        qty,
        setQty,
        product,
        setProduct,
        addProduct,
        mobile,
        setMobile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
