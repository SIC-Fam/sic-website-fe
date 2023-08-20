import { atom } from 'recoil';

const authAtom = atom({
  key: 'auth/user',
  default: typeof window !== 'undefined' && (localStorage.getItem('accessToken') || null),
});

export { authAtom };
