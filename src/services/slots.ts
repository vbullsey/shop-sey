import { slotsApi } from '@/pages/api/slotsApi';
import type { IFilters } from '@/redux/features/Slots/interfaces';

interface IResolved {
  data: any;
  error: IError | null;
}

interface IError {
  error: string;
  message: string;
  statusCode: number;
}

async function getSlots(filters: IFilters) {
  const res = await slotsApi(filters);

  const resolved: IResolved = {
    data: null,
    error: null,
  };

  if (res.status === 200) {
    resolved.data = res.data;
  }

  resolved.error = res.data;
  return resolved;
}

export const slots = {
  getSlots,
};

// async function logout() {
//   await signout();
//   sessionStorage.removeItem(TOKEN_KEY);
//   localStorage.removeItem(TOKEN_KEY);
// }
