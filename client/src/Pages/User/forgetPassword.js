import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { hideLoading, showLoading } from "../../redux/loaderSlice";
import toast from "react-hot-toast";
import { BiArrowBack } from "react-icons/bi";
import Wrapper from "../../components/Wrapper";

const ForgetPassword = ({ userEmail }) => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (data) => {
    try {
      dispatch(showLoading());

      const response = await axios.post(
        "/api/user/forget-password",

        data,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        setIsEmailSent(true);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };
  const handleOTP = async (data) => {
    try {
      dispatch(showLoading());

      const response = await axios.post("/api/user/verify-otp", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  return (
    <Wrapper>
      {isEmailSent ? (
        <div>
          <div className="flex sm:flex-row xs:flex-col items-center gap-[100px]">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<path fill="#9c34c2" d="M45,22h-6v-4c0-3.859-3.141-7-7-7s-7,3.141-7,7v4h-6v-4c0-7.168,5.832-13,13-13s13,5.832,13,13V22z"></path><ellipse cx="32" cy="61" opacity=".3" rx="19" ry="3"></ellipse><path fill="orange" d="M48,19H16c-3.314,0-6,2.686-6,6v23c0,3.314,2.686,6,6,6h32c3.314,0,6-2.686,6-6V25	C54,21.686,51.314,19,48,19z"></path><circle cx="32" cy="37" r="4" fill="#9c34c2"></circle><path fill="#fff" d="M30,24c2.761,0,5-2.239,5-5H16c-3.314,0-6,2.686-6,6v18c2.761,0,5-2.239,5-5V25 c0-0.551,0.449-1,1-1H30z" opacity=".3"></path><path d="M54,48V31c-2.761,0-5,2.239-5,5v12c0,0.551-0.449,1-1,1H31c-2.761,0-5,2.239-5,5h22 C51.314,54,54,51.314,54,48z" opacity=".15"></path><path fill="#fff" d="M14,31c-0.828,0-1.5-0.672-1.5-1.5V25c0-1.93,1.57-3.5,3.5-3.5h5.5c0.828,0,1.5,0.672,1.5,1.5	s-0.672,1.5-1.5,1.5H16c-0.275,0-0.5,0.225-0.5,0.5v4.5C15.5,30.328,14.828,31,14,31z"></path><circle cx="20" cy="37" r="4" fill="#9c34c2"></circle><circle cx="44" cy="37" r="4" fill="#9c34c2"></circle>
</svg>
            </div>
            <div className=" mt-[50px] rounded ">
              <h1 className="font-medium text-3xl flex gap-2 items-center">
                <BiArrowBack
                  className="cursor-pointer"
                  onClick={() => setIsEmailSent(false)}
                />
                Verify OTP
              </h1>
              <p className="text-gray-600 mt-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos dolorem vel cupiditate laudantium dicta.
              </p>

              <Form onFinish={handleOTP} layout="vertical">
                <div className="mt-8 grid lg:grid-cols-2 gap-4">
                  <div>
                    <Form.Item
                      label="Email"
                      name="userEmail"
                      className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                      <Input className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      label="New Password"
                      name="newPassword"
                      className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                      <Input className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      label="OTP Code"
                      name="otpCode"
                      className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                      <Input className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
                    </Form.Item>
                  </div>
                </div>

                <div className="space-x-4 mt-8">
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ backgroundColor: "#000", height: "40px" }}
                      className="px-8"
                    >
                      Update Password
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-[100px]">
            <div>
              <dotlottie-player
                src="https://lottie.host/df4a82f5-5f81-4645-b35f-57949168f2d2/jRTeZ1xhEm.json"
                background="transparent"
                speed="1"
                sstyle={{ width: "400px", height: "400px" }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className=" mt-[50px] rounded ">
              <h1 className="font-medium text-3xl">Forget Password</h1>
              <p className="text-gray-600 mt-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos dolorem vel cupiditate laudantium dicta.
              </p>

              <Form onFinish={onFinish} layout="vertical" initialValues={user}>
                <div className="mt-8 grid lg:grid-cols-2 gap-4">
                  <div>
                    <Form.Item
                      label="Email"
                      name="userEmail"
                      className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                      <Input className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
                    </Form.Item>
                  </div>
                </div>

                <div className="space-x-4 mt-8">
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ backgroundColor: "#000", height: "40px" }}
                      className="px-8"
                    >
                      Send Otp
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default ForgetPassword;
