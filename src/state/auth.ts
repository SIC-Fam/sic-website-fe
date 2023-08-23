import { atom } from 'recoil';

const authAtom = atom({
  key: 'user',
  default: typeof window !== 'undefined' && (localStorage.getItem('accessToken') || null),
});

export { authAtom };
