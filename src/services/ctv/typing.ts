import { HttpStatusCode } from 'axios';

export interface CtvServicesBody {
  msv: string;
  name: string;
  birthday: Date;
  numberPhone?: string;
  linkFb?: string;
  email: string;
  idClass: string;
  team: string[];
}

export interface CommonResponse<T> {
  currentPage: number;
  data: T;
  description: string;
  httpCode: HttpStatusCode;
  responseCode: string;
  totalItems: number;
  totalPages: number;
}
export interface CtvServicesResponse extends CommonResponse<CTV> {}

export interface CTV {
  msv: string;
  name: string;
  birthday: Date;
  numberPhone: string | null;
  linkFb: string | null;
  email: string;
  idClass: string;
  team: string[];
}
