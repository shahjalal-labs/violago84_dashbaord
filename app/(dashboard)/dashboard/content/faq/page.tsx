/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Plus, Search, Edit2, Trash2, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';
import { CreateFaqModal } from '@/components/create-faq-modal';
import { EditFaqModal } from '@/components/edit-faq-modal';
import {
  useGetAllFaqsQuery,
  useCreateFaqMutation,
  useUpdateFaqMutation,
  useDeleteFaqMutation,
} from '@/redux/features/faqApi';
import { message, Spin } from 'antd';
import Swal from 'sweetalert2';

export default function FaqPage() {
  const [page, setPage] = useState(1);
  const limit = 10;
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Modals state
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<{ id: string; question: string; answer: string } | null>(null);

  // Debounce search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setPage(1); // Reset page on search
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // RTK Query hooks
  const { data: faqsData, isLoading, isFetching, refetch } = useGetAllFaqsQuery({
    searchTerm: debouncedSearch,
    page,
    limit,
  });

  const [createFaq, { isLoading: isCreating }] = useCreateFaqMutation();
  const [updateFaq, { isLoading: isUpdating }] = useUpdateFaqMutation();
  const [deleteFaq, { isLoading: isDeleting }] = useDeleteFaqMutation();

  const faqs = faqsData?.data || [];
  const meta = faqsData?.meta || { page: 1, limit: 10, total: 0, totalPages: 1 };
  const totalFaqs = meta.total;
  const totalPages = meta.totalPages;

  // Handlers
  const handleCreateSubmit = async (data: { question: string; answer: string }) => {
    try {
      await createFaq(data).unwrap();
      message.success('FAQ created successfully');
      setIsCreateOpen(false);
      refetch();
    } catch (err: any) {
      message.error(err?.data?.message || 'Failed to create FAQ');
      throw err;
    }
  };

  const handleUpdateSubmit = async (data: { question: string; answer: string }) => {
    if (!selectedFaq) return;
    try {
      await updateFaq({ id: selectedFaq.id, ...data }).unwrap();
      message.success('FAQ updated successfully');
      setIsEditOpen(false);
      setSelectedFaq(null);
      refetch();
    } catch (err: any) {
      message.error(err?.data?.message || 'Failed to update FAQ');
      throw err;
    }
  };

  const handleDelete = async (id: string, question: string) => {
    const result = await Swal.fire({
      title: 'Delete FAQ?',
      html: `Are you sure you want to delete this FAQ?<br/><br/><strong class="text-red-600">"${question}"</strong>`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        await deleteFaq(id).unwrap();
        message.success('FAQ deleted successfully');
        Swal.fire('Deleted!', 'The FAQ has been removed.', 'success');
        refetch();
      } catch (err: any) {
        message.error(err?.data?.message || 'Failed to delete FAQ');
        Swal.fire('Error!', err?.data?.message || 'Could not delete FAQ.', 'error');
      }
    }
  };

  return (
    <main className="flex-1 lg:ml-0 min-h-screen bg-gray-50 flex flex-col">
      <Header title="Content Management" />

      <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col">
        {/* Page title and Add button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <HelpCircle className="text-gray-700" size={26} />
              FAQs
            </h2>
            <p className="text-sm text-gray-500 mt-1">Manage the frequently asked questions displayed in the user application.</p>
          </div>
          <button
            onClick={() => setIsCreateOpen(true)}
            className="px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition font-medium flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <Plus size={18} />
            Add New FAQ
          </button>
        </div>

        {/* Search & Stats Bar */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search FAQs by question or answer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
            />
          </div>
          <div className="text-sm text-gray-500">
            Total FAQs: <span className="font-semibold text-gray-900">{totalFaqs}</span>
          </div>
        </div>

        {/* Content list / Loading states */}
        {isLoading || isFetching ? (
          <div className="flex-1 flex justify-center items-center py-20 bg-white rounded-xl border border-gray-200 shadow-sm">
            <Spin size="large" />
          </div>
        ) : faqs.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-gray-200 shadow-sm text-center px-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
              <HelpCircle size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">No FAQs found</h3>
            <p className="text-gray-500 text-sm mt-1 max-w-sm">
              {debouncedSearch ? "We couldn't find any FAQs matching your search query. Try another term or add a new FAQ." : "There are no FAQs yet. Create your first FAQ using the button above."}
            </p>
          </div>
        ) : (
          <div className="flex-1 flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Desktop Table View */}
            <div className="flex-1 overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-900">
                    <th className="px-6 py-4 w-12 text-center text-gray-500">#</th>
                    <th className="px-6 py-4 w-1/3">Question</th>
                    <th className="px-6 py-4">Answer</th>
                    <th className="px-6 py-4 w-28 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                  {faqs.map((faq, index) => (
                    <tr key={faq.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-center font-medium text-gray-400">
                        {(page - 1) * limit + index + 1}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 break-words">
                        {faq.question}
                      </td>
                      <td className="px-6 py-4 break-words whitespace-pre-line text-gray-600 line-clamp-3 md:line-clamp-none my-4">
                        {faq.answer}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center items-center gap-2">
                          <button
                            onClick={() => {
                              setSelectedFaq(faq);
                              setIsEditOpen(true);
                            }}
                            title="Edit FAQ"
                            className="p-2 text-gray-600 hover:bg-gray-100 hover:text-black rounded-lg transition"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(faq.id, faq.question)}
                            title="Delete FAQ"
                            className="p-2 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 border-t border-gray-200 gap-4 bg-gray-50/50">
                <span className="text-sm text-gray-500">
                  Showing <span className="font-medium text-gray-900">{(page - 1) * limit + 1}</span> to{' '}
                  <span className="font-medium text-gray-900">{Math.min(page * limit, totalFaqs)}</span> of{' '}
                  <span className="font-medium text-gray-900">{totalFaqs}</span> FAQs
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="p-2 border border-gray-200 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition bg-white"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                    className="p-2 border border-gray-200 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition bg-white"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modals */}
      <CreateFaqModal
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onSubmit={handleCreateSubmit}
        isLoading={isCreating}
      />

      <EditFaqModal
        open={isEditOpen}
        faq={selectedFaq}
        onClose={() => {
          setIsEditOpen(false);
          setSelectedFaq(null);
        }}
        onSubmit={handleUpdateSubmit}
        isLoading={isUpdating}
      />
    </main>
  );
}
