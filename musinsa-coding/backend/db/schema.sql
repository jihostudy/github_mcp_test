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
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  email         VARCHAR(255)  NOT NULL UNIQUE,
  password_hash VARCHAR(255)  NOT NULL,
  nickname      VARCHAR(50)   NOT NULL,
  created_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
);
