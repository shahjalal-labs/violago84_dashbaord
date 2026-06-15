/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';

import { Modal, Form, Input, Upload, message } from 'antd';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import type { RcFile } from 'antd/es/upload/interface';

const lessonSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
});

interface CreateLessonModalV2Props {
  open: boolean;
  title?: string;
  categoryId?: string;
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}

export function CreateLessonModalV2({
  open,
  title = 'Create New Lesson',
  categoryId,
  onClose,
  onSubmit,
}: CreateLessonModalV2Props) {
  const [thumbnailFile, setThumbnailFile] = useState<RcFile | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(lessonSchema),
    defaultValues: { title: '', description: '' },
  });

  const beforeUpload = (file: RcFile) => {
    if (!file.type.startsWith('image/')) {
      message.error('Only image files are allowed');
      return false;
    }
    if (preview) URL.revokeObjectURL(preview);
    setThumbnailFile(file);
    setPreview(URL.createObjectURL(file));
    return false;
  };

  const handleRemove = () => {
    if (preview) URL.revokeObjectURL(preview);
    setThumbnailFile(null);
    setPreview('');
  };

  const handleFormSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append('title', data.title);
    if (data.description) formData.append('description', data.description);
    if (categoryId) formData.append('categoryId', categoryId);
    if (thumbnailFile) formData.append('thumbnail', thumbnailFile);
    setLoading(true);
    try {
      await onSubmit(formData);
      handleClose();
    } catch (err) {
      message.error('Failed to create lesson');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    reset();
    if (preview) URL.revokeObjectURL(preview);
    setThumbnailFile(null);
    setPreview('');
    onClose();
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Modal
      title={<span className="text-2xl font-bold text-gray-900">{title}</span>}
      open={open}
      onCancel={handleClose}
      footer={null}
      width={600}
      destroyOnClose
    >
      <Form layout="vertical" onFinish={handleSubmit(handleFormSubmit)} className="mt-4">
        <Form.Item label="Thumbnail">
          <Upload listType="picture-card" showUploadList={false} beforeUpload={beforeUpload} maxCount={1}>
            {preview ? (
              <img src={preview} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              uploadButton
            )}
          </Upload>
          {preview && (
            <div className="mt-2 flex justify-end">
              <button type="button" onClick={handleRemove} className="text-xs text-red-500">Remove</button>
            </div>
          )}
        </Form.Item>

        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Form.Item label="Title" validateStatus={errors.title ? 'error' : ''} help={errors.title?.message}>
              <Input {...field} placeholder="Lesson title" className="rounded-lg" />
            </Form.Item>
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Form.Item label="Description">
              <Input.TextArea {...field} rows={4} placeholder="Description" className="rounded-lg" />
            </Form.Item>
          )}
        />

        <div className="flex justify-end gap-2 mb-0 mt-4">
          <button type="button" onClick={handleClose} className="px-6 py-2.5 border rounded-lg me-3">
            Cancel
          </button>
          <button type="submit" disabled={loading} className="px-6 py-2.5 bg-black text-white rounded-lg flex items-center gap-2">
            {loading && <LoadingOutlined className="animate-spin" />}
            {loading ? 'Creating...' : 'Submit'}
          </button>
        </div>
      </Form>
    </Modal>
  );
}