// import React from "react";

// const CartPage = () => {
//   return (
//     <div>
//       <div className="h-screen bg-gray-100 pt-20">
//         <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
//         <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
//           <div className="rounded-lg md:w-2/3">
//             <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
//               <img
//                 src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
//                 alt="product-image"
//                 className="w-full rounded-lg sm:w-40"
//               />
//               <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//                 <div className="mt-5 sm:mt-0">
//                   <h2 className="text-lg font-bold text-gray-900">
//                     Nike Air Max 2019
//                   </h2>
//                   <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
//                 </div>
//                 <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//                   <div className="flex items-center border-gray-100">
//                     <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
//                       {" "}
//                       -{" "}
//                     </span>
//                     <input
//                       className="h-8 w-8 border bg-white text-center text-xs outline-none"
//                       type="number"
//                       value="2"
//                       min="1"
//                     />
//                     <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
//                       {" "}
//                       +{" "}
//                     </span>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <p className="text-sm">259.000 ₭</p>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke-width="1.5"
//                       stroke="currentColor"
//                       className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
//               <img
//                 src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
//                 alt="product-image"
//                 className="w-full rounded-lg sm:w-40"
//               />
//               <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//                 <div className="mt-5 sm:mt-0">
//                   <h2 className="text-lg font-bold text-gray-900">
//                     Nike Air Max 2019
//                   </h2>
//                   <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
//                 </div>
//                 <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
//                   <div className="flex items-center border-gray-100">
//                     <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
//                       {" "}
//                       -{" "}
//                     </span>
//                     <input
//                       className="h-8 w-8 border bg-white text-center text-xs outline-none"
//                       type="number"
//                       value="2"
//                       min="1"
//                     />
//                     <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
//                       {" "}
//                       +{" "}
//                     </span>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     <p className="text-sm">259.000 ₭</p>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke-width="1.5"
//                       stroke="currentColor"
//                       className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <!-- Sub total --> */}
//           <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
//             <div className="mb-2 flex justify-between">
//               <p className="text-gray-700">Subtotal</p>
//               <p className="text-gray-700">$129.99</p>
//             </div>
//             <div className="flex justify-between">
//               <p className="text-gray-700">Shipping</p>
//               <p className="text-gray-700">$4.99</p>
//             </div>
//             <hr className="my-4" />
//             <div className="flex justify-between">
//               <p className="text-lg font-bold">Total</p>
//               <div className="">
//                 <p className="mb-1 text-lg font-bold">$134.98 USD</p>
//                 <p className="text-sm text-gray-700">including VAT</p>
//               </div>
//             </div>
//             <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
//               Check out
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetCart } from "../../redux/orebiSlice";
import emptyCartImage from "../../assets/images/emptyCart.png";

const CartPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0);

  useEffect(() => {
    // Calculate total amount
    const price = products.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalAmt(price);

    // Calculate shipping charge based on total amount
    if (price <= 200) {
      setShippingCharge(30);
    } else if (price <= 400) {
      setShippingCharge(25);
    } else {
      setShippingCharge(20);
    }
  }, [products]);

  const handleResetCart = () => {
    dispatch(resetCart());
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <div className="py-8">
        <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
        {products.length > 0 ? (
          <div>
            {/* Display cart items */}
            {products.map((item) => (
              <div key={item._id} className="flex items-center justify-between border-b py-2">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <p className="font-semibold">${item.price * item.quantity}</p>
              </div>
            ))}

            {/* Cart summary */}
            <div className="flex justify-between mt-4">
              <button
                onClick={handleResetCart}
                className="px-4 py-2 bg-red-500 text-white font-semibold"
              >
                Reset Cart
              </button>
              <div>
                <p className="text-lg font-semibold">Subtotal: ${totalAmt}</p>
                <p className="text-lg font-semibold">Shipping Charge: ${shippingCharge}</p>
                <p className="text-2xl font-bold mt-2">Total: ${totalAmt + shippingCharge}</p>
              </div>
            </div>
            <div className="mt-4">
              <Link to="/checkout">
                <button className="px-6 py-3 bg-green-500 text-white font-semibold">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <img src={emptyCartImage} alt="Empty Cart" className="w-64 mb-4" />
            <p className="text-xl font-semibold">Your cart is empty.</p>
            <Link to="/shop">
              <button className="px-6 py-3 mt-4 bg-blue-500 text-white font-semibold">
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
