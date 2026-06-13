/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Modal, Form, Input, Upload, message } from 'antd';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import type { RcFile } from 'antd/es/upload/interface';

interface EditGameModalProps {
  open: boolean;
  item: any;
  onClose: () => void;
  onSubmit: (id: string, formData: FormData) => void;
  isLoading?: boolean;
}

export function EditGameModal({ open, item, onClose, onSubmit, isLoading }: EditGameModalProps) {
  const [form] = Form.useForm();
  const [file, setFile] = useState<RcFile | null>(null);
  const [removeThumbnail, setRemoveThumbnail] = useState(false);

  // Reset form values when item changes (modal opens with new item)
  useEffect(() => {
    if (item) {
      form.setFieldsValue({
        heading: item.heading,
        title: item.title,
        subtitle: item.subtitle,
        description: item.description,
      });
    }
    // Do NOT reset file/removeThumbnail here; component is destroyed on close so state is fresh
  }, [item, form]);

  // Preview URL: uploaded file, or existing thumbnail if not removed
  const previewUrl = file
    ? URL.createObjectURL(file)
    : (removeThumbnail ? '' : (item?.thumbnail || ''));

  // Cleanup object URL
  useEffect(() => {
    return () => {
      if (previewUrl && previewUrl !== item?.thumbnail) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl, item?.thumbnail]);

  const handleFinish = async (values: any) => {
    const formData = new FormData();
    formData.append('heading', values.heading);
    formData.append('title', values.title);
    formData.append('subtitle', values.subtitle);
    formData.append('description', values.description);
    if (file) {
      formData.append('thumbnail', file);
    } else if (removeThumbnail) {
      // Send an empty string to indicate deletion
      formData.append('thumbnail', '');
    }
    await onSubmit(item.id, formData);
    form.resetFields();
    setFile(null);
    setRemoveThumbnail(false);
    onClose();
  };

  const beforeUpload = (uploadedFile: RcFile) => {
    if (!uploadedFile.type.startsWith('image/')) {
      message.error('Only image files are allowed');
      return false;
    }
    setFile(uploadedFile);
    setRemoveThumbnail(false); // new file overrides removal
    return false;
  };

  const handleRemove = () => {
    setFile(null);
    setRemoveThumbnail(true);
  };

  const uploadButton = (
    <div><PlusOutlined /><div style={{ marginTop: 8 }}>Replace</div></div>
  );

  return (
    <Modal
      title="Edit Game"
      open={open}
      onCancel={onClose}
      footer={null}
      width={620}
      destroyOnClose
      centered
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item label="Thumbnail">
          <Upload
            listType="picture-card"
            showUploadList={false}
            beforeUpload={beforeUpload}
            maxCount={1}
          >
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="preview"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
          {previewUrl && (
            <div className="mt-2 text-right">
              <button type="button" onClick={handleRemove} className="text-xs text-red-500">
                Remove image
              </button>
            </div>
          )}
        </Form.Item>
        <Form.Item name="heading" label="Heading" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="subtitle" label="Subtitle" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description" rules={[{ required: true }]}>
          <Input.TextArea rows={5} />
        </Form.Item>
        <div className="flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-black text-white rounded flex items-center gap-2"
          >
            {isLoading && <LoadingOutlined className="animate-spin" />}
            {isLoading ? 'Updating...' : 'Update'}
          </button>
        </div>
      </Form> 
    </Modal>
  );
}