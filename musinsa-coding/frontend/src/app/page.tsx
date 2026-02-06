import { page, main } from "./page.css";

export default function Home() {
  return (
    <div className={page}>
      <main className={main}>
        <h1>Musinsa</h1>
        <p>Frontend is running. API proxy: /api/* → localhost:3001</p>
      </main>
    </div>
  );
}
