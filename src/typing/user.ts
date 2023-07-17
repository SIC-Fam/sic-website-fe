export interface UserType {
  user: {
    id: number;
    fullname: string;
    username: string;
    password: null;
    email: string;
    gender: number;
    role: string;
    createdAt: string;
    updatedAt: string;
  };
  accessToken: string;
}
