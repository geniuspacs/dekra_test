export class User {
  name: string;
  surname1: string;
  surname2?: string;
  country: string;
  username: string;
  password?: string;

  constructor(
    name: string,
    surname1: string,
    country: string,
    username: string,
    password?: string,
    surname2?: string,
  ) {
    this.name = name;
    this.surname1 = surname1;
    this.country = country;
    this.username = username;
    this.password = password;
    this.surname2 = surname2;
  }
}
