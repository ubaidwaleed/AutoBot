import Info from "../components/single-product/Info";
import Product from "../components/single-product/Product";
import Cart from "../components/single-product/Cart";
import Lightbox from "../components/single-product/Lightbox";
import Footer from "../components/market-place/footer";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SingleProduct() {
  function FeatureCard({ iconSrc, title, description }) {
    return (
      <div className="flex items-center justify-center gap-3 px-3 py-6 rounded-sm border-primary">
        <img src={iconSrc} alt={title} className="object-contain w-12 h-12" />
        <div>
          <h4 className="text-lg font-medium capitalize">{title}</h4>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    );
  }

  //getting the data of this accessory from parent
  const [receivedProductData, setReceivedProductData] = useState(null);

  const [images, setImages] = useState([]);
  const [showImg, setShowImg] = useState();

  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.productData) {
      const receivedData = location.state.productData;
      setReceivedProductData(receivedData);

      // Update the images state with the received images
      if (receivedData.images && receivedData.images.length > 0) {
        const updatedImages = receivedData.images.map((imageUrl) => ({
          img: imageUrl,
        }));
        const showImg = receivedData.images[0];
        setImages(updatedImages);
        setShowImg(showImg);
      }
    }
  }, [location.state]);

  const [showLightbox, setShowLightbox] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [count, setCount] = useState(0);
  const [orders, setOrders] = useState([]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Set initial width for mobile detection

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Sidebar />

      <div className="relative ml-16">
        {!isMobile && showLightbox && (
          <Lightbox
            showImg={showImg}
            setShowImg={setShowImg}
            showLightbox={showLightbox}
            setShowLightbox={setShowLightbox}
            image={images}
          />
        )}

        <div className="center-content">
          <div className="flex items-center justify-center fit-content md:h-[800px]">
            <div className="md:grid md:grid-cols-2">
              <Product
                receivedProductData={receivedProductData} // Pass received data to Product component
                setShowLightbox={setShowLightbox}
                showLightbox={showLightbox}
                showImg={showImg}
                setShowImg={setShowImg}
                image={images}
              />
              <Info
                receivedProductData={receivedProductData} // Pass received data to Info component
                Cart={Cart}
                quantity={quantity}
                setQuantity={setQuantity}
                setOrders={setOrders}
                setCount={setCount}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative ml-16">
        <div className="relative flex justify-center w-full">
          <div className="container py-8 ">
            <div className="grid w-full grid-cols-1 gap-6 mx-auto md:grid-cols-4">
              <FeatureCard
                iconSrc="src/assets/images/icons/delivery-van.svg"
                title="Free Shipping"
                description="Order over $200"
              />
              <FeatureCard
                iconSrc="src/assets/images/icons/money-back.svg"
                title="Money Returns"
                description="30 days money returns"
              />
              <FeatureCard
                iconSrc="src/assets/images/icons/phone.svg"
                title="24/7 Support"
                description="Customer support"
              />
              <FeatureCard
                iconSrc="src/assets/images/icons/sale.svg"
                title="Hot Offers"
                description="Discount upto 80%"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative ml-16">
        <Footer />
      </div>
    </>
  );
}

export default SingleProduct;
