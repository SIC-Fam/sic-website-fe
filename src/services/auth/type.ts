import { GenderType } from '@constants/enum';

export interface LoginBody {
  username: string;
  password: string;
}

export interface RegisterBody {
  fullname: string;
  usernane: string;
  password: string;
  email: string;
  gender: GenderType;
}
