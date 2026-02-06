# Backend

Node.js + Express + TypeScript API (Issue #3, ADR-0001).

## 로컬 실행

```bash
pnpm install
pnpm dev
```

서버는 `http://localhost:3001`에서 동작합니다.

## 확인

- Health: `GET http://localhost:3001/api/health` → `{ "status": "ok" }`

```bash
curl http://localhost:3001/api/health
```
