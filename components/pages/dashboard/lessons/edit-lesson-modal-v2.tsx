/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';

import { Modal, Form, Input, Upload, message } from 'antd';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState, useEffect } from 'react';
import type { RcFile } from 'antd/es/upload/interface';

const editSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
});

interface EditLessonModalV2Props {
  open: boolean;
  lesson?: any;
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}

export function EditLessonModalV2({ open, lesson, onClose, onSubmit }: EditLessonModalV2Props) {
  const [thumbnailFile, setThumbnailFile] = useState<RcFile | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [removeExisting, setRemoveExisting] = useState(false);
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(editSchema),
    defaultValues: { title: '', description: '' },
  });

  useEffect(() => {
    if (lesson) {
      setValue('title', lesson.title);
      setValue('description', lesson.description || '');
      setPreview(lesson.imageUrl || lesson.thumbnail || '');
      setThumbnailFile(null);
      setRemoveExisting(false);
    } else {
      reset();
      setPreview('');
      setThumbnailFile(null);
      setRemoveExisting(false);
    }
  }, [lesson, setValue, reset]);

  const existingUrl = lesson?.imageUrl || lesson?.thumbnail || '';

  const beforeUpload = (file: RcFile) => {
    if (!file.type.startsWith('image/')) {
      message.error('Only image files are allowed');
      return false;
    }
    if (preview && preview !== existingUrl) URL.revokeObjectURL(preview);
    setThumbnailFile(file);
    setPreview(URL.createObjectURL(file));
    setRemoveExisting(false);
    return false;
  };

  const handleRemove = () => {
    if (preview && preview !== existingUrl) URL.revokeObjectURL(preview);
    setThumbnailFile(null);
    setPreview('');
    setRemoveExisting(true);
  };

  const handleFormSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append('title', data.title);
    if (data.description) formData.append('description', data.description);
    if (thumbnailFile) {
      formData.append('thumbnail', thumbnailFile);
    } else if (removeExisting) {
      formData.append('removeThumbnail', 'true');
    }
    setLoading(true);
    try {
      await onSubmit(formData);
      handleClose();
    } catch (err) {
      message.error('Failed to update lesson');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    reset();
    setThumbnailFile(null);
    setPreview('');
    setRemoveExisting(false);
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
      title={<span className="text-2xl font-bold text-gray-900">Edit Lesson</span>}
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
              <Input {...field} className="rounded-lg" />
            </Form.Item>
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Form.Item label="Description">
              <Input.TextArea {...field} rows={4} className="rounded-lg" />
            </Form.Item>
          )}
        />

        <div className="flex justify-end gap-2 mb-0 mt-4 items-center">
          <button type="button" onClick={handleClose} className="px-6 py-2.5 border rounded-lg me-3">
            Cancel
          </button>
          <button type="submit" disabled={loading} className="px-6 py-2.5 bg-black text-white rounded-lg flex items-center gap-2">
            {loading && <LoadingOutlined className="animate-spin" />}
            {loading ? 'Updating...' : 'Update'}
          </button>
        </div>
      </Form>
    </Modal>
  );
}