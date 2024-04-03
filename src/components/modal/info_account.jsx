import React, { useState, useRef } from "react";
import {
  Modal,
  Form,
  Input,
  Radio,
  DatePicker,
  Upload,
  message,
  Avatar,
  Button,
} from "antd";
import { UserOutlined, EditOutlined, CameraOutlined } from "@ant-design/icons";
import styled from "styled-components";

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CenteredRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoAccountModal = ({ visible, onCancel }) => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [imageUrl, setImageUrl] = useState();
  const hiddenFileInput = useRef(null);
  const [previewImage, setPreviewImage] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!beforeUpload(file)) {
        return;
      }
      getBase64(file, (url) => {
        setImageUrl(url);
      });
    }
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const handlePreview = async () => {
    if (!imageUrl) {
      return;
    }
    setPreviewImage(imageUrl);
    setPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setPreviewOpen(false);
  };

  const toggleFormDisable = () => {
    setComponentDisabled(!componentDisabled);
  };

  const uploadButton = (
    <Button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
      onClick={() => hiddenFileInput.current.click()}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ marginRight: 8 }}>
          <CameraOutlined />
        </div>
        <div>Upload</div>
      </div>
    </Button>
  );

  return (
    <Modal
      title={<div style={{ textAlign: "center" }}>Thông tin tài khoản</div>}
      placement="right"
      closable={true}
      onClose={onCancel}
      visible={visible}
      footer={null}
      onCancel={onCancel}
    >
      <>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          layout="horizontal"
        >
          <Form.Item style={{ marginBottom: 20 }}>
            <CenteredRow>
              <div className="avatar-uploader" onClick={handlePreview}>
                <Avatar
                  size={75}
                  icon={
                    imageUrl ? (
                      <AvatarImage src={imageUrl} alt="avatar" />
                    ) : (
                      <UserOutlined />
                    )
                  }
                />
                {imageUrl ? null : <div className="upload-text"></div>}
              </div>
              {uploadButton}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={hiddenFileInput}
                style={{ display: "none" }}
              />
            </CenteredRow>
          </Form.Item>

          <Form.Item
            label="Tên"
            style={{ marginBottom: 20 }}
            disabled={componentDisabled}
          >
            <Input disabled={componentDisabled} />
          </Form.Item>

          <Form.Item style={{ marginBottom: 20 }} disabled={componentDisabled}>
            <CenteredRow>
              <Form.Item label="Giới tính" style={{ marginBottom: 0 }}>
                <Radio.Group disabled={componentDisabled}>
                  <Radio name="gender" value="male"> Male </Radio>
                  <Radio name="gender" value="female"> Female </Radio>
                </Radio.Group>
              </Form.Item>
            </CenteredRow>
            <CenteredRow>
              <Form.Item label="Ngày sinh" style={{ marginBottom: 0 }}>
                <DatePicker disabled={componentDisabled} />
              </Form.Item>
            </CenteredRow>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button icon={<EditOutlined />} onClick={toggleFormDisable}>
              {componentDisabled ? "Enable Form" : "Disable Form"}
            </Button>
          </Form.Item>
        </Form>
      </>
      {/* Modal xem trước ảnh */}
      <Modal visible={previewOpen} onCancel={handleClosePreview} footer={null}>
        <AvatarImage src={previewImage} alt="avatar" />
      </Modal>
    </Modal>
  );
};

export default InfoAccountModal;
