import React from "react";
import { Tabs } from "antd";

import UpdateProfile from "./updateProfile";
import ForgetPassword from "./forgetPassword";
import FooterBottom from "../../components/home/Footer/FooterBottom"


const UserProfile = () => {
  const items = [
    {
      key: "1",
      label: "Profile",
      children: <UpdateProfile />,
    },
    {
      key: "2",
      label: "Forget Password",
      children: <ForgetPassword />,
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="1" type="card" items={items} />
    <FooterBottom/>

    </div>
    
  );
};

export default UserProfile;
