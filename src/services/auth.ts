import { signinApi, signup, userApi } from '@/pages/api/authApi';

const TOKEN_KEY = '_t4gd-*-';
interface IResolved {
  data: any;
  error: IError | null;
}

interface IError {
  error: string;
  message: string;
  statusCode: number;
}

async function login(body: any) {
  const res = await signinApi(body);

  const resolved: IResolved = {
    data: null,
    error: null,
  };

  if (res.status === 201) {
    localStorage.setItem('accessToken', res.data.accessToken);
    resolved.data = res.data;
  }

  resolved.error = res.data;
  return resolved;
}

async function register(body: any) {
  const res = await signup(body);

  if (res.status === 201) {
    // Add token to localStorage
    return {
      type: 'success',
    };
  }

  return {
    type: 'error',
    error: res.data.error,
  };
}

async function user() {
  const res = await userApi();

  if (res.status === 200) {
    return {
      type: 'success',
    };
  }

  return {
    type: 'error',
    error: res.data.error,
  };
}

function getToken() {
  return sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY);
}

function isAuthenticated() {
  return !!getToken();
}

export const auth = {
  isAuthenticated,
  getToken,
  login,
  register,
  user,
};

// async function logout() {
//   await signout();
//   sessionStorage.removeItem(TOKEN_KEY);
//   localStorage.removeItem(TOKEN_KEY);
// }
