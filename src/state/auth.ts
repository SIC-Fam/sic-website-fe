import { atom } from 'recoil';

const authAtom = atom({
  key: 'auth',
  default: typeof window !== 'undefined' && (localStorage.getItem('accessToken') || null),
});

export { authAtom };
