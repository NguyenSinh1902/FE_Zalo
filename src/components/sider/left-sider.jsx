import React, { useState } from "react";
import { Avatar, Layout, Dropdown, Menu, Drawer } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { PiChatCircleTextThin, PiAddressBookThin } from "react-icons/pi";
import { LuListTodo } from "react-icons/lu";
import { CiCloudOn, CiSettings } from "react-icons/ci";
import { PiBagSimpleBold } from "react-icons/pi";

const { Sider } = Layout;

const LeftSider = () => {
  const [isAvatarMenuVisible, setIsAvatarMenuVisible] = useState(false);
  const [isSettingMenuVisible, setIsSettingMenuVisible] = useState(false);
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === "5" || e.key === "2") {
      setVisibleDrawer(true);
    }
  };

  const avatarMenu = (
    <Menu onClick={handleMenuClick}>
      {[
        {
          label: "Nâng cấp tài khoản",
          key: "1",
        },
        {
          label: "Hồ sơ của bạn",
          key: "2",
        },
        {
          label: "Cài đặt",
          key: "3",
        },
        {
          type: "divider",
        },
        {
          label: "Đăng xuất",
          key: "4",
        },
      ].map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  const settingMenu = (
    <Menu onClick={handleMenuClick}>
      {[
        {
          label: "Thông tin tài khoản",
          key: "5",
        },
        {
          label: "Cài đặt",
          key: "6",
        },
        {
          type: "divider",
        },
        {
          label: "Dữ liệu",
          key: "7",
        },
        {
          label: "Công cụ",
          key: "8",
        },
        {
          label: "Ngôn ngữ",
          key: "9",
        },
        {
          type: "divider",
        },
        {
          label: "Đăng xuất",
          key: "10",
        },
      ].map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <Sider
        width={"3.5%"}
        style={{ color: "white", backgroundColor: "#0091ff" }}
      >
        <div style={{ height: "75%" }}>
          <div style={{ textAlign: "center", margin: "30px 0" }}>
            <Dropdown
              trigger={["click"]}
              overlay={avatarMenu}
              placement="bottomLeft"
              visible={isAvatarMenuVisible}
              onVisibleChange={setIsAvatarMenuVisible}
            >
              <Avatar
                size={55}
                icon={<UserOutlined />}
                onClick={() => setIsAvatarMenuVisible(!isAvatarMenuVisible)}
              />
            </Dropdown>
          </div>
          <div
            className="leftSiderIcon"
            style={{
              textAlign: "center",
              height: "4rem",
              fontSize: "25px",
              border: "white",
            }}
          >
            <PiChatCircleTextThin style={{ marginTop: "30%" }} />
          </div>
          <div
            className="leftSiderIcon"
            style={{
              textAlign: "center",
              height: "4rem",
              fontSize: "25px",
              border: "white",
            }}
          >
            <PiAddressBookThin style={{ marginTop: "30%" }} />
          </div>
          <div
            className="leftSiderIcon"
            style={{
              textAlign: "center",
              height: "4rem",
              fontSize: "25px",
              border: "white",
            }}
          >
            <LuListTodo style={{ marginTop: "30%" }} />
          </div>
        </div>

        <div style={{ height: "15%" }}>
          <div
            className="leftSiderIcon"
            style={{
              textAlign: "center",
              height: "4rem",
              fontSize: "25px",
              border: "white",
            }}
          >
            <CiCloudOn style={{ marginTop: "30%" }} />
          </div>
          <div
            className="leftSiderIcon"
            style={{
              textAlign: "center",
              height: "4rem",
              fontSize: "25px",
              border: "white",
            }}
          >
            <PiBagSimpleBold style={{ marginTop: "30%" }} />
          </div>
          <div
            className="leftSiderIcon"
            style={{
              textAlign: "center",
              height: "4rem",
              fontSize: "25px",
              border: "white",
            }}
          >
            <Dropdown
              trigger={["click"]}
              overlay={settingMenu}
              placement="bottomLeft"
              visible={isSettingMenuVisible}
              onVisibleChange={setIsSettingMenuVisible}
            >
              <CiSettings
                style={{ marginTop: "30%" }}
                onClick={() => setIsSettingMenuVisible(!isSettingMenuVisible)}
              />
            </Dropdown>
          </div>
        </div>
      </Sider>
      <Drawer
        title="Thông tin tài khoản"
        placement="right"
        closable={false}
        onClose={() => setVisibleDrawer(false)}
        visible={visibleDrawer}
      >
        <p>Thông tin cá nhân</p>
        <p>      .</p>
        <p>Giới tính</p>
        <p>Ngày sinh</p>
        <button>Cập nhật</button>
      </Drawer>
    </>
  );
};

export default LeftSider;
