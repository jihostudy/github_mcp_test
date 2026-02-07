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

-- 유저 프로필 확장 (users 1:1)
CREATE TABLE IF NOT EXISTS user_profiles (
  id                INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id           INTEGER       NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  phone             VARCHAR(20),
  gender            VARCHAR(10),
  birth_date        DATE,
  profile_image_url TEXT,
  updated_at        TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 주문
CREATE TABLE IF NOT EXISTS orders (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id       INTEGER       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  order_number  VARCHAR(20)   NOT NULL UNIQUE,
  status        VARCHAR(20)   NOT NULL DEFAULT 'pending',
  total_amount  INTEGER       NOT NULL,
  shipping_fee  INTEGER       NOT NULL DEFAULT 0,
  address_snapshot TEXT,
  ordered_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);

-- 주문 상품
CREATE TABLE IF NOT EXISTS order_items (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id      INTEGER       NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id    INTEGER       NOT NULL REFERENCES products(id),
  quantity      INTEGER       NOT NULL DEFAULT 1,
  price         INTEGER       NOT NULL,
  sale_price    INTEGER,
  created_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);

-- 좋아요
CREATE TABLE IF NOT EXISTS user_likes (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id       INTEGER       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_id    INTEGER       NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  created_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, product_id)
);

CREATE INDEX IF NOT EXISTS idx_user_likes_user_id ON user_likes(user_id);

-- 배송지
CREATE TABLE IF NOT EXISTS user_addresses (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id       INTEGER       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name          VARCHAR(50)   NOT NULL,
  phone         VARCHAR(20)   NOT NULL,
  zip_code      VARCHAR(10)   NOT NULL,
  address1      VARCHAR(255)  NOT NULL,
  address2      VARCHAR(255),
  is_default    INTEGER       NOT NULL DEFAULT 0,
  created_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_user_addresses_user_id ON user_addresses(user_id);

-- 리뷰
CREATE TABLE IF NOT EXISTS user_reviews (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id       INTEGER       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_id    INTEGER       NOT NULL REFERENCES products(id),
  order_item_id INTEGER       REFERENCES order_items(id),
  rating        INTEGER       NOT NULL CHECK(rating >= 1 AND rating <= 5),
  content       TEXT          NOT NULL,
  image_urls    TEXT,
  created_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_user_reviews_user_id ON user_reviews(user_id);

-- 쿠폰
CREATE TABLE IF NOT EXISTS coupons (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  name            VARCHAR(100)  NOT NULL,
  discount_type   VARCHAR(10)   NOT NULL CHECK(discount_type IN ('percent', 'fixed')),
  discount_value  INTEGER       NOT NULL,
  min_order_amount INTEGER      NOT NULL DEFAULT 0,
  max_discount    INTEGER,
  expires_at      TIMESTAMP     NOT NULL,
  created_at      TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 유저 쿠폰
CREATE TABLE IF NOT EXISTS user_coupons (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id       INTEGER       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  coupon_id     INTEGER       NOT NULL REFERENCES coupons(id),
  used_at       TIMESTAMP,
  created_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, coupon_id)
);

CREATE INDEX IF NOT EXISTS idx_user_coupons_user_id ON user_coupons(user_id);

-- 포인트 내역
CREATE TABLE IF NOT EXISTS point_histories (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id       INTEGER       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  amount        INTEGER       NOT NULL,
  type          VARCHAR(20)   NOT NULL CHECK(type IN ('earn', 'spend', 'expire')),
  description   VARCHAR(255)  NOT NULL,
  created_at    TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_point_histories_user_id ON point_histories(user_id);
