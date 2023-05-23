import { STATUS } from '../enums';

export interface User {
  id?: string;
  username: string;
  email: string;
  password: string;
  registration_date?: string;
  last_visit?: string | null;
  status?: STATUS;
}
