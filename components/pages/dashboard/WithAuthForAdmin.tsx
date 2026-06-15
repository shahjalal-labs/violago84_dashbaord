/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logout, selectCurrentToken } from '@/redux/features/auth/authSlice';
import { verifyToken } from '@/utils/verifyToken';

const WithAuthForAdmin = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const token = useAppSelector(selectCurrentToken);
  const user: any = token ? verifyToken(token) : null;

  const isAdmin = user?.role === 'ADMIN';
  const isSuperAdmin = user?.role === 'SUPER_ADMIN';

  useEffect(() => {
    if (!token) {
      dispatch(logout());
      router.replace('/auth/login');
      return;
    }

    if (!isAdmin && !isSuperAdmin) {
      dispatch(logout());
      router.replace('/auth/login');
      return;
    }
  }, [token, isAdmin, dispatch, router]);

  // Optional fallback UI (no state needed)
  if (!token || !isAdmin) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default WithAuthForAdmin;