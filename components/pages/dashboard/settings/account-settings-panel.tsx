/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Info, Loader2, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { message } from 'antd';
import { useChangePasswordMutation } from '@/redux/features/auth/authApi';

const schema = z
  .object({
    currentPassword: z.string().min(1, 'Current password is required'),
    newPassword: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type PasswordForm = z.infer<typeof schema>;

export function AccountSettingsPanel() {
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PasswordForm>({
    resolver: zodResolver(schema),
    defaultValues: { currentPassword: '', newPassword: '', confirmPassword: '' },
  });

  const onSubmit = async (data: PasswordForm) => {
    const payload = {
      oldPassword: data.currentPassword,
      newPassword: data.newPassword,
    };

    try {
      await changePassword(payload).unwrap();
      message.success('Password changed successfully');
      setSavedSuccess(true);
      reset();
      setTimeout(() => setSavedSuccess(false), 2000);
    } catch (err: any) {
      message.error(err?.data?.message || 'Failed to change password');
    }
  };

  return (
    <div>
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-base font-semibold text-gray-900">Account Settings</h3>
        <Info size={16} className="text-gray-400" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-lg">
        {/* Current Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Current Password
          </label>
          <div className="relative">
            <Controller
              name="currentPassword"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    type={showCurrent ? 'text' : 'password'}
                    placeholder="Enter current password"
                    className={`w-full px-4 py-2.5 border rounded-lg text-sm text-gray-900 outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition ${
                      errors.currentPassword ? 'border-red-400' : 'border-gray-300'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </>
              )}
            />
          </div>
          {errors.currentPassword && (
            <p className="mt-1 text-xs text-red-500">{errors.currentPassword.message}</p>
          )}
        </div>

        {/* New Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            New Password
          </label>
          <div className="relative">
            <Controller
              name="newPassword"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    type={showNew ? 'text' : 'password'}
                    placeholder="Enter new password"
                    className={`w-full px-4 py-2.5 border rounded-lg text-sm text-gray-900 outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition ${
                      errors.newPassword ? 'border-red-400' : 'border-gray-300'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </>
              )}
            />
          </div>
          {errors.newPassword && (
            <p className="mt-1 text-xs text-red-500">{errors.newPassword.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Confirm New Password
          </label>
          <div className="relative">
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    type={showConfirm ? 'text' : 'password'}
                    placeholder="Confirm new password"
                    className={`w-full px-4 py-2.5 border rounded-lg text-sm text-gray-900 outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition ${
                      errors.confirmPassword ? 'border-red-400' : 'border-gray-300'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </>
              )}
            />
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Save Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`px-10 py-2.5 rounded-lg font-medium text-sm transition flex items-center gap-2 ${
            savedSuccess
              ? 'bg-green-600 text-white'
              : 'bg-black text-white hover:bg-gray-800'
          } disabled:opacity-70 disabled:cursor-not-allowed`}
        >
          {isLoading && <Loader2 className="animate-spin w-4 h-4" />}
          {isLoading ? 'Saving...' : savedSuccess ? 'Saved!' : 'Save'}
        </button>
      </form>
    </div>
  );
}