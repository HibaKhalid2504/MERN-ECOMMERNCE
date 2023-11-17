import React from "react";
import Wrapper from "../../components/Wrapper";
import { Tabs } from "antd";
import UserProfile from "./userProfile";
import FooterBottom from "../../components/home/Footer/FooterBottom"


const UserDashboard = () => {
  const userItems = [
    {
      key: "1",
      label: "Profile",
      children: <UserProfile />,
    },
    {
      key: "2",
      label: "Orders",
      children: "Content of Tab Pane 2",
    },
  ];

  return (
    <Wrapper>
      <div className="mt-10">
        <Tabs tabPosition="left" items={userItems} />
      </div>
    <FooterBottom/>

    </Wrapper>
  );
};

export default UserDashboard;
