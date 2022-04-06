export interface User {
  id: number;
  username: string;
  name: string;
  surname1: string;
  surname2?: string;
  email: string;
  password?: string;
  age: number;
  active: boolean;
  lastLoggin: Date;
  creationDate: Date;
}
