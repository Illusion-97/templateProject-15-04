export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}
