# Musinsa Frontend

Next.js 15+ (App Router) + TypeScript + Vanilla Extract. ADR-0001.

## Run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## API proxy

`/api/*` is rewritten to `http://localhost:3001/api/*`. Start the backend on port 3001 for API calls.
