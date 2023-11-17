import React, { useState } from "react";
import Wrapper from "../../components/Wrapper";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../../redux/loaderSlice";

import ForgetPassword from "../User/forgetPassword";

const Login = () => {
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (data) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/user-login", data);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);

        navigate("/");
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
      {isForgetPassword ? (
        <ForgetPassword />
      ) : (
        <div className=" flex items-center gap-[100px] text-slate-800 justify-center">
          {/* <div>
            <dotlottie-player
              src="https://lottie.host/c267c477-4047-4e31-965e-1eb05fcf3593/7UFnaU9TAo.json"
              background="transparent"
              speed="1"
              style={{ width: "400px", height: "400px" }}
              loop
              autoplay
            ></dotlottie-player>
          </div> */}
          <div className=" mt-[50px] rounded ">
            <h1 className="font-bold text-5xl items-center">Login</h1>
            {/* <p className="text-slate-800 mt-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br/>
              Dignissimos dolorem vel cupiditate laudantium dicta.
            </p> */}

            <Form layout="vertical" onFinish={onFinish}>
              <div className="mt-8 grid lg:grid-cols-1 gap-4">
                <div>
                  <Form.Item
                    label="Enter your Email"
                    name="userEmail"
                    className="text-sm block mb-1 font-medium"
                  >
                    <Input className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-slate-800 focus:border-slate-800 text-gray-700 w-full" />
                  </Form.Item>
                </div>

                <div>
                  <Form.Item
                    label="Password"
                    name="password"
                    className="text-sm  block mb-1 font-medium"
                  >
                    <Input className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-slate-800 focus:border-slate-800 text-gray-700 w-full" />
                  </Form.Item>
                </div>
              </div>

              <div className="space-x-8 mt-8 justify-center items-center ">
                <Form.Item>
                  <Button
                    htmlType="submit"
                    type="primary"
                    style={{  height: "40px" }}
                    className=" w-full px-8 bg-slate-800"
                  >
                    Login
                  </Button>
                </Form.Item>
              </div>
            </Form>
            <div className="">
              <p
                onClick={() => setIsForgetPassword(true)}
                className="hover:underline text-primary cursor-pointer "
              >
                <Link to="/forget-password">Forget Password?</Link>
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link className="hover:underline text-primary" to="/register">
                  Register
                </Link>
              </p>
            </div>
   
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Login;
