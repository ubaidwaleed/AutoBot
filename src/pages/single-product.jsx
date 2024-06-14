import Info from "../components/single-product/Info";
import Product from "../components/single-product/Product";
import Cart from "../components/single-product/Cart";
import Lightbox from "../components/single-product/Lightbox";
import Footer from "../components/market-place/footer";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import StarRating from "../components/single-product/starRating";
import { useParams } from "react-router-dom";
import axios from "axios";

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
  // const { id } = useParams();

  // const location = useLocation();
  // useEffect(() => {
  //   if (location.state && location.state.productData) {
  //     const receivedData = location.state.productData;
  //     setReceivedProductData(receivedData);
  //     console.log(receivedProductData);

  //     // Update the images state with the received images
  //     if (receivedData.images && receivedData.images.length > 0) {
  //       const updatedImages = receivedData.images.map((imageUrl) => ({
  //         img: imageUrl,
  //       }));
  //       const showImg = receivedData.images[0];
  //       setImages(updatedImages);
  //       setShowImg(showImg);
  //     }
  //   }
  // }, [location.state]);

  // const { id } = useParams();

  // useEffect(() => {
  //   const fetchProductData = async () => {
  //     try {
  //       const response = await axios.post(`http://localhost:3000/getpartbyid`, {
  //         id: id,
  //       });
  //       const receivedData = response.data;
  //       setReceivedProductData(receivedData);

  //       console.log("data---", receivedData);
  //       // Update the images state with the received images
  //       if (receivedData.images && receivedData.images.length > 0) {
  //         const updatedImages = receivedData.images.map((imageUrl) => ({
  //           img: imageUrl,
  //         }));
  //         const showImg = receivedData.images[0];
  //         setImages(updatedImages);
  //         setShowImg(showImg);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching product data:", error);
  //     }
  //   };

  //   fetchProductData();
  // }, [id]);

  const { id } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.post(`http://localhost:3000/getpartbyid`, {
          id: id,
        });
        const receivedData = response.data;
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
      } catch (error) {
        console.error("Error fetching product data:", error);

        // Fallback to data from location.state if API call fails
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
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchProductData();
  }, [id, location.state]);

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
        {loading ? ( // Show loader if loading is true
          <div className="flex justify-center pt-24 pb-24">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div>
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
                  <div></div>

                  <StarRating
                    receivedProductData={receivedProductData} // Pass received data to Info component
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative mt-20 ml-16">
        <div className="relative flex justify-center w-full">
          <div className="container py-8 ">
            <div className="grid w-full grid-cols-1 gap-6 mx-auto md:grid-cols-4">
              <FeatureCard
                iconSrc="../src/assets/images/icons/delivery-van.svg"
                title="Free Shipping"
                description="Order over $200"
              />
              <FeatureCard
                iconSrc="../src/assets/images/icons/money-back.svg"
                title="Money Returns"
                description="30 days money returns"
              />
              <FeatureCard
                iconSrc="../src/assets/images/icons/phone.svg"
                title="24/7 Support"
                description="Customer support"
              />
              <FeatureCard
                iconSrc="../src/assets/images/icons/sale.svg"
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
