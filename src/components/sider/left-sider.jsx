import { Avatar, Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { LuListTodo } from "react-icons/lu";
import {
  PiBagSimpleBold,
  PiChatCircleTextThin,
  PiAddressBookThin,
} from "react-icons/pi";
import { CiCloudOn, CiSettings } from "react-icons/ci";

const { Sider } = Layout;

const LeftSider = () => {
  const iconStyle = {
    textAlign: "center",
    height: "4rem",
    fontSize: "25px",
    border: "white",
  };

  const siderStyle = {
    color: "white",
    backgroundColor: "#0091ff",
  };

  return (
    <Sider width={"3.5%"} style={siderStyle}>
      <div style={{ height: "75%" }}>
        <div style={{ textAlign: "center", margin: "30px 0" }}>
          <Avatar size={55} icon={<UserOutlined />} />
        </div>
        <div className="leftSiderIcon" style={iconStyle}>
          <PiChatCircleTextThin style={{ marginTop: "30%" }} />
        </div>
        <div className="leftSiderIcon" style={iconStyle}>
          <PiAddressBookThin style={{ marginTop: "30%" }} />
        </div>
        <div className="leftSiderIcon" style={iconStyle}>
          <LuListTodo style={{ marginTop: "30%" }} />
        </div>
      </div>
      <div style={{ height: "15%" }}>
        <div className="leftSiderIcon" style={iconStyle}>
          <CiCloudOn style={{ marginTop: "30%" }} />
        </div>
        <div className="leftSiderIcon" style={iconStyle}>
          <PiBagSimpleBold style={{ marginTop: "30%" }} />
        </div>
        <div className="leftSiderIcon" style={iconStyle}>
          <CiSettings style={{ marginTop: "30%" }} />
        </div>
      </div>
    </Sider>
  );
};

export default LeftSider;
