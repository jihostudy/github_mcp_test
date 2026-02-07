-- Initial schema: PostgreSQL-compatible types for SQLite
-- Pg migration: replace INTEGER PRIMARY KEY AUTOINCREMENT → SERIAL PRIMARY KEY

CREATE TABLE IF NOT EXISTS categories (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  name          VARCHAR(100)  NOT NULL,
  slug          VARCHAR(100)  NOT NULL UNIQUE,
  parent_id     INTEGER       REFERENCES categories(id),
  sort_order    INTEGER       NOT NULL DEFAULT 0,
  created_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  category_id   INTEGER       NOT NULL REFERENCES categories(id),
  brand         VARCHAR(100)  NOT NULL,
  name          VARCHAR(255)  NOT NULL,
  price         INTEGER       NOT NULL,
  sale_price    INTEGER,
  thumbnail_url TEXT,
  description   TEXT,
  created_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
  id                    INTEGER PRIMARY KEY AUTOINCREMENT,
  email                 VARCHAR(255)  NOT NULL UNIQUE,
  password_hash         VARCHAR(255)  NOT NULL,
  nickname              VARCHAR(50)   NOT NULL UNIQUE,
  failed_login_attempts INTEGER       NOT NULL DEFAULT 0,
  locked_until          TIMESTAMP,
  created_at            TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS refresh_tokens (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id     INTEGER       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash  VARCHAR(64)   NOT NULL UNIQUE,
  expires_at  TIMESTAMP     NOT NULL,
  created_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  revoked_at  TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_refresh_tokens_user_id ON refresh_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_refresh_tokens_token_hash ON refresh_tokens(token_hash);
