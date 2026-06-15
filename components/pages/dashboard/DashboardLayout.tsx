'use client';

import { Sidebar } from '@/components/sidebar';
import { selectCurrentToken } from '@/redux/features/auth/authSlice';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const token = useAppSelector(selectCurrentToken);
  const router = useRouter();
  
  useEffect(() => {
    if (!token) {
      router.replace('/auth/login');
    }
  }, [token]);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}