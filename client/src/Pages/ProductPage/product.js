import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../../components/Rating";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setCartData } from "../../redux/cartSlice";

const Product = () => {
  const { user } = useSelector((state) => state.user);
  const [productlist, setProductList] = useState([]);
  const [cart, setCart] = useState([]);
  const [singleProduct, setSingleProduct] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(cart);
  const addToCart = async (product) => {
    try {
      const userId = user._id;
      const newItem = {
        productTitle: product.productTitle,
        productPrice: product.productPrice,
        productId: product._id,
        quantity: 1,
      };
      const response = await axios.post(
        "/api/cart/create-cart",
        {
          userId,
          items: [newItem],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        dispatch(setCartData(response.data.data));
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };
  const getData = async () => {
    try {
      const response = await axios.post(
        "/api/user/get-user-info-by-id",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await axios.get("/api/product/get-all-product");
      if (response.data.success) {
        setProductList(response.data.data);
      }
    } catch (error) {}
  };

  const handleView = async (productId) => {
    try {
      const response = await axios.get(
        `/api/product/get-single-product/${productId}`
      );
      if (response.data.success) {
        setSingleProduct(response.data.data);
        navigate(`/product/view/${productId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    getProducts();
  }, []);

  return (
    <div>
      
      {/* Product List */}
       <div className=" w-full pb-5 text-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
          <h2 className="text-6xl font-bold text-slate-800">
            Products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
            {
            productlist.map((product) => (
              <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg bg-slate-800 shadow-md"> {/*border-gray-100 */}
                <Link
                  class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  href="#"
                >
                  <img
                    class="object-cover"
                    src="https://cdn.fstoppers.com/styles/article_med/s3/media/2015/12/07/white_background_bag_after.jpg"
                    alt="product image"
                  />
                </Link>
                <div class=" mt-4 px-5 pb-5">
                  <div
                    className="cursor-pointer flex justify-between"
                    onClick={() => handleView(product._id)}
                  >
                    <h5 class="text-3xl text-ellipsis font-bold ">
                      {product.productTitle}
                    </h5>
                    <div class="flex items-center text-yellow-300">
                      <Rating value={product.productRating} />
                    </div>
                  </div>
                  
                  <div class="mt-5 flex items-center justify-between">
                    <p>
                      <span class="text-2xl ">
                        ${product.productPrice}
                      </span>
                    </p>
                    

                    <button
                    onClick={() => addToCart(product)}
                    class="flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-center text-sm font-medium text-slate-800 hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to cart
                  </button>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Product;
