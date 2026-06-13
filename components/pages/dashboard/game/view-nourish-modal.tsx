/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Modal } from 'antd';
import Image from 'next/image';

interface ViewGameModalProps {
  open: boolean;
  item: any;
  onClose: () => void;
}

export function ViewGameModal({ open, item, onClose }: ViewGameModalProps) {
  if (!item) return null;

  return (
    <Modal title="View Game" open={open} onCancel={onClose} footer={<button onClick={onClose} className="px-4 py-2 border rounded">Close</button>} width={620} destroyOnClose>
      <div className="space-y-4 mt-4">
        {item.thumbnail && (
          <div className="relative w-full h-48 rounded-lg overflow-hidden">
            <Image src={item.thumbnail} alt={item.title} fill className="object-cover" />
          </div>
        )}
        <div className="grid grid-cols-2 gap-4">
          <div><p className="text-xs text-gray-500">Heading</p><p className="text-sm font-medium">{item.heading}</p></div>
          <div><p className="text-xs text-gray-500">Title</p><p className="text-sm font-medium">{item.title}</p></div>
          <div><p className="text-xs text-gray-500">Subtitle</p><p className="text-sm font-medium">{item.subtitle}</p></div>
        </div>
        <div><p className="text-xs text-gray-500">Description</p><p className="text-sm text-gray-700">{item.description}</p></div>
      </div>
    </Modal>
  );
}