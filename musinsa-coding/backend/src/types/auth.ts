export interface User {
  id: number;
  email: string;
  password_hash: string;
  nickname: string;
  failed_login_attempts: number;
  locked_until: string | null;
  created_at: string;
}

export interface UserPublic {
  id: number;
  email: string;
  nickname: string;
  created_at: string;
}

export interface RefreshTokenRow {
  id: number;
  user_id: number;
  token_hash: string;
  expires_at: string;
  created_at: string;
  revoked_at: string | null;
}

export interface JwtPayload {
  sub: number;
  nickname: string;
  jti: string;
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}
