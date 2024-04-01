import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const DropdownInTabs = () => (
  <div style={{ marginRight: "10px", float: "left", display: "flex" }}>
    <div className="hoverLightGray" style={{ borderRadius: "50px" }}>
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        overlayStyle={{ fontSize: "10px" }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space size={5} style={{ color: "black" }}>
            {" "}
            Click me
            <DownOutlined style={{ fontSize: "10px", color: "black" }} />{" "}
          </Space>
        </a>
      </Dropdown>
    </div>

    <div
      className="hoverLightGray"
      style={{
        borderRadius: "50px",
        width: "2rem",
        height: "2rem",
        marginLeft: "10px",
        textAlign: "center",
      }}
    >
      <Dropdown
        menu={{ items }}
        placement="bottom"
        trigger={["click"]}
        arrow={{ pointAtCenter: true }}
        overlayStyle={{ fontSize: "16px" }}
        dropdownClassName="custom-dropdown"
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space size={10} style={{fontWeight: "bolder"}}>...</Space>
        </a>
      </Dropdown>
    </div>
  </div>
);

export default DropdownInTabs;
