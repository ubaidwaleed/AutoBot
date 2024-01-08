import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import { useContext } from "react";
import CartContext from "../../context/cart-context/cartContext";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Info = ({
  Cart,
  quantity,
  setQuantity,
  setOrders,
  setCount,
  receivedProductData,
}) => {
  const [error, setError] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  // getting the context
  const { addToCart, cartItems } = useContext(CartContext);

  const handleDecrease = () => {
    if (selectedQuantity > 0) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  const handleIncrease = () => {
    if (selectedQuantity < receivedProductData.quantity) {
      setSelectedQuantity(selectedQuantity + 1);
    }
  };

  const handleAddToCart = () => {
    // Check if the item with the same ID exists in cartItems
    const isItemInCart = cartItems.find(
      (item) =>
        (item.product.part_id &&
          item.product.part_id === receivedProductData.part_id) ||
        (item.product.accessory_id &&
          item.product.accessory_id === receivedProductData.accessory_id) ||
        (item.product.carcareproduct_id &&
          item.product.carcareproduct_id ===
            receivedProductData.carcareproduct_id)
    );

    if (isItemInCart) {
      setError("Item already added to cart");
      return; // Prevent further execution
    }

    const calculatedPrice = receivedProductData?.price * selectedQuantity;

    const cartItem = {
      product: receivedProductData,
      quantity: selectedQuantity,
      calculatedPrice: calculatedPrice,
    };

    addToCart(cartItem);

    toast.info("Item added to cart", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000, // Duration for which the toast will be displayed (in milliseconds)
    });
    console.log(cartItem);
  };

  useEffect(() => {
    console.log("These are the cart items", cartItems);
  }, [cartItems]);

  return (
    <div className="flex justify-center col-span-1">
      <div className="mt-5 md:mt-20">
        <h3 className="text-sm font-semibold capitalize select-none small-text ml-9 md:ml-0">
          {receivedProductData?.brand}
        </h3>
        <h1 className="mt-5 text-3xl font-bold select-none titles md:text-4xl md:w-3/4 ml-9 md:ml-0">
          {receivedProductData?.name}
        </h1>
        <p className="w-3/4 mt-10 font-normal select-none md:text-justify nav-btns ml-9 md:ml-0">
          {receivedProductData?.description}
        </p>

        <div className="select-none mt-7 ml-9 md:ml-0">
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold titles">
                ${receivedProductData?.price}
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center h-32 gap-4 mt-10 md:flex-row md:h-auto">
          <div className="flex items-center justify-between w-4/5 p-2 md:w-32 qty-btn rounded-xl">
            <AiOutlineMinus
              className="cursor-pointer"
              onClick={handleDecrease}
            />
            <span className="font-bold select-none titles">
              {selectedQuantity}
            </span>
            <AiOutlinePlus
              className="cursor-pointer"
              onClick={handleIncrease}
            />
          </div>
          <p className="absolute bottom-0 text-red-500 md:-bottom-5 md:left-0 md:text-sm">
            {error}
          </p>
          <button
            className={`flex items-center justify-center w-4/5 gap-3 p-2 font-semibold bg-[#3b82f6] text-white cart-btn md:w-56 rounded-xl ${
              selectedQuantity === 0 ? "cursor-not-allowed" : ""
            }`}
            onClick={handleAddToCart}
            disabled={selectedQuantity === 0}
          >
            <FaCartPlus />
            <span className="select-none ">Add to cart</span>
          </button>
          <p className="absolute bottom-0 text-red-500 md:-bottom-5 md:left-0 md:text-sm">
            {error}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
