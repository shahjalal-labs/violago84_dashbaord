/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { Header } from '@/components/header';

import { Spin, message } from 'antd';
import Swal from 'sweetalert2';
import { CreateGameModal } from '@/components/pages/dashboard/game/create-nourish-modal';
import { GamesTable } from '@/components/pages/dashboard/game/nourish-table';
import { EditGameModal } from '@/components/pages/dashboard/game/edit-nourish-modal';
import { ViewGameModal } from '@/components/pages/dashboard/game/view-nourish-modal';
import { useCreateGameMutation, useDeleteGameMutation, useGetGamesQuery, useUpdateGameMutation } from '@/redux/features/gameApi';

export default function PlayingGamePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const { data, isLoading, isFetching, refetch } = useGetGamesQuery({
    page: currentPage,
    limit: pageSize,
  });

  const [createGame, { isLoading: isCreating }] = useCreateGameMutation();
  const [updateGame, { isLoading: isUpdating }] = useUpdateGameMutation();
  const [deleteGame, { isLoading: isDeleting }] = useDeleteGameMutation();

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const games = data?.data || [];
  const totalPages = data?.meta?.totalPages || 1;

  const handleCreate = async (formData: FormData) => {
    try {
      await createGame(formData).unwrap();
      message.success('Game created successfully');
      setIsCreateOpen(false);
      refetch();
    } catch (err: any) {
      message.error(err?.data?.message || 'Failed to create game');
    }
  };

  const handleUpdate = async (id: string, formData: FormData) => {
    try {
      await updateGame({ id, formData }).unwrap();
      message.success('Game updated successfully');
      setIsEditOpen(false);
      setSelectedItem(null);
      refetch();
    } catch (err: any) {
      message.error(err?.data?.message || 'Failed to update game');
    }
  };

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: 'Delete Game?',
      text: 'This game item will be permanently removed.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });
    if (result.isConfirmed) {
      try {
        await deleteGame(id).unwrap();
        message.success('Game deleted');
        refetch();
      } catch (err: any) {
        message.error(err?.data?.message || 'Failed to delete game');
      }
    }
  };

  const handleEdit = (item: any) => {
    setSelectedItem(item);
    setIsEditOpen(true);
  };

  const handleView = (item: any) => {
    setSelectedItem(item);
    setIsViewOpen(true);
  };

  if (isLoading || isFetching) {
    return (
      <main className="flex-1 lg:ml-0">
        <Header title="Content Management" />
        <div className="flex justify-center items-center py-20">
          <Spin size="large" />
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 lg:ml-0">
      <Header title="Content Management" />
      <div className="p-4 sm:p-6 lg:p-8 mx-auto">
        <GamesTable
          items={games}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          onCreateNew={() => setIsCreateOpen(true)}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
        />
      </div>

      <CreateGameModal
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onSubmit={handleCreate}
        isLoading={isCreating}
      />
      <EditGameModal
        open={isEditOpen}
        item={selectedItem}
        onClose={() => {
          setIsEditOpen(false);
          setSelectedItem(null);
        }}
        onSubmit={handleUpdate}
        isLoading={isUpdating}
      />
      <ViewGameModal
        open={isViewOpen}
        item={selectedItem}
        onClose={() => {
          setIsViewOpen(false);
          setSelectedItem(null);
        }}
      />
    </main>
  );
}