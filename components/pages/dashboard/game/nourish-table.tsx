'use client';

import { Eye, Edit2, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

interface GameItem {
  id: string;
  heading: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail?: string;
}

interface GamesTableProps {
  items: GameItem[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onCreateNew: () => void;
  onEdit: (item: GameItem) => void;
  onDelete: (id: string) => void;
  onView: (item: GameItem) => void;
}

export function GamesTable({
  items,
  currentPage,
  totalPages,
  onPageChange,
  onCreateNew,
  onEdit,
  onDelete,
  onView,
}: GamesTableProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Games</h2>
        <button
          onClick={onCreateNew}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition font-medium text-sm"
        >
          Create New Game
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-700 w-28">Heading</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-700 w-36">Title</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-700 w-52">Subtitle</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">Description</th>
              <th className="text-right px-6 py-3 text-sm font-medium text-gray-700 w-32">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id} className={`border-b border-gray-100 hover:bg-gray-50 transition ${index === items.length - 1 ? 'border-b-0' : ''}`}>
                <td className="px-6 py-4 text-sm text-gray-700">{item.heading}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.title}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.subtitle}</td>
                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs"><span className="line-clamp-1">{item.description}</span></td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-3">
                    <button onClick={() => onView(item)} className="text-yellow-500 hover:text-yellow-600 transition"><Eye size={18} /></button>
                    <button onClick={() => onEdit(item)} className="text-blue-500 hover:text-blue-600 transition"><Edit2 size={18} /></button>
                    <button onClick={() => onDelete(item.id)} className="text-red-500 hover:text-red-600 transition"><Trash2 size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4 p-4">
        {items.map((item) => (
          <div key={item.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div><p className="text-xs text-gray-500">Heading</p><p className="font-medium text-gray-900">{item.heading}</p></div>
                <div className="flex gap-2">
                  <button onClick={() => onView(item)} className="p-1 text-yellow-600"><Eye size={18} /></button>
                  <button onClick={() => onEdit(item)} className="p-1 text-blue-600"><Edit2 size={18} /></button>
                  <button onClick={() => onDelete(item.id)} className="p-1 text-red-600"><Trash2 size={18} /></button>
                </div>
              </div>
              <div><p className="text-xs text-gray-500">Title</p><p className="text-sm text-gray-900">{item.title}</p></div>
              <div><p className="text-xs text-gray-500">Subtitle</p><p className="text-sm text-gray-900">{item.subtitle}</p></div>
              <div><p className="text-xs text-gray-500">Description</p><p className="text-sm text-gray-700 line-clamp-2">{item.description}</p></div>
            </div>
          </div>
        ))}
        {items.length === 0 && <div className="text-center py-8 text-gray-500">No game items found.</div>}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-1.5 px-6 py-4 border-t border-gray-200">
        <button onClick={() => onPageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="p-1.5 rounded hover:bg-gray-100 disabled:opacity-40"><ChevronLeft size={18} className="text-gray-600" /></button>
        {getPageNumbers().map((page, idx) => page === '...' ? <span key={`ellipsis-${idx}`} className="px-2 text-gray-500 text-sm">...</span> : (
          <button key={page} onClick={() => onPageChange(page as number)} className={`w-8 h-8 rounded text-sm font-medium transition ${currentPage === page ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}>{page}</button>
        ))}
        <button onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="p-1.5 rounded hover:bg-gray-100 disabled:opacity-40"><ChevronRight size={18} className="text-gray-600" /></button>
      </div>
    </div>
  );
}