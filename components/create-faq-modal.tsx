'use client';

import { Modal, Form, Input } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const faqSchema = z.object({
  question: z.string().min(1, 'Question is required').min(5, 'Question must be at least 5 characters'),
  answer: z.string().min(1, 'Answer is required').min(5, 'Answer must be at least 5 characters'),
});

type FaqFormData = z.infer<typeof faqSchema>;

interface CreateFaqModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: FaqFormData) => Promise<void>;
  isLoading?: boolean;
}

export function CreateFaqModal({ open, onClose, onSubmit, isLoading = false }: CreateFaqModalProps) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FaqFormData>({
    resolver: zodResolver(faqSchema),
    defaultValues: { question: '', answer: '' },
  });

  const handleFormSubmit = async (data: FaqFormData) => {
    try {
      await onSubmit(data);
      reset();
    } catch (err) {
      // handled by parent page
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal
      title="Create New FAQ"
      open={open}
      onCancel={handleClose}
      footer={null}
      width={600}
      destroyOnClose
    >
      <Form layout="vertical" onFinish={handleSubmit(handleFormSubmit)}>
        <Controller
          name="question"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="Question"
              required
              validateStatus={errors.question ? 'error' : ''}
              help={errors.question?.message}
            >
              <Input {...field} placeholder="Enter the question" size="large" />
            </Form.Item>
          )}
        />

        <Controller
          name="answer"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="Answer"
              required
              validateStatus={errors.answer ? 'error' : ''}
              help={errors.answer?.message}
            >
              <Input.TextArea {...field} placeholder="Enter the answer" rows={5} size="large" />
            </Form.Item>
          )}
        />

        <Form.Item className="flex justify-end gap-3 mb-0 pt-4">
          <button
            type="button"
            onClick={handleClose}
            disabled={isLoading}
            className="px-4 py-2 me-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {isLoading ? 'Creating...' : 'Submit'}
          </button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
