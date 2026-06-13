'use client';

import { Modal, Form, Input, Upload, message } from 'antd';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import type { RcFile } from 'antd/es/upload/interface';

interface CreateGameModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
  isLoading?: boolean;
}

export function CreateGameModal({ open, onClose, onSubmit, isLoading }: CreateGameModalProps) {
  const [form] = Form.useForm();
  const [file, setFile] = useState<RcFile | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const handleFinish = async (values: { heading: string; title: string; subtitle: string; description: string }) => {
    const formData = new FormData();
    formData.append('heading', values.heading);
    formData.append('title', values.title);
    formData.append('subtitle', values.subtitle);
    formData.append('description', values.description);
    if (file) formData.append('thumbnail', file);
    await onSubmit(formData);
    form.resetFields();
    setFile(null);
    setPreviewUrl('');
    onClose();
  };

  const beforeUpload = (uploadedFile: RcFile) => {
    if (!uploadedFile.type.startsWith('image/')) {
      message.error('Only image files are allowed');
      return false;
    }
    setFile(uploadedFile);
    setPreviewUrl(URL.createObjectURL(uploadedFile));
    return false;
  };

  const handleRemove = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setFile(null);
    setPreviewUrl('');
  };

  const uploadButton = (
    <div><PlusOutlined /><div style={{ marginTop: 8 }}>Upload</div></div>
  );

  return (
    <Modal title="Create New Game" open={open} onCancel={onClose} footer={null} width={620} destroyOnClose centered>
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item label="Thumbnail" name="thumbnail" valuePropName="fileList" getValueFromEvent={(e) => e?.fileList}>
          <Upload listType="picture-card" showUploadList={false} beforeUpload={beforeUpload} maxCount={1}>
            {previewUrl ? <img src={previewUrl} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : uploadButton}
          </Upload>
          {previewUrl && <div className="mt-2 text-right"><button type="button" onClick={handleRemove} className="text-xs text-red-500">Remove</button></div>}
        </Form.Item>
        <Form.Item name="heading" label="Heading" rules={[{ required: true, message: 'Heading is required' }]}>
          <Input placeholder="e.g., Tips" />
        </Form.Item>
        <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Title is required' }]}>
          <Input placeholder="Most Common" />
        </Form.Item>
        <Form.Item name="subtitle" label="Subtitle" rules={[{ required: true, message: 'Subtitle is required' }]}>
          <Input placeholder="How to weight your dog?" />
        </Form.Item>
        <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Description is required' }]}>
          <Input.TextArea rows={5} />
        </Form.Item>
        <div className="flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
          <button type="submit" disabled={isLoading} className="px-4 py-2 bg-black text-white rounded flex items-center gap-2">
            {isLoading && <LoadingOutlined className="animate-spin" />}
            {isLoading ? 'Creating...' : 'Create'}
          </button>
        </div>
      </Form>
    </Modal>
  );
}