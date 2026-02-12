import styles from "./page.module.css";
import Hello from "./components/hello.js"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>This is my page</h1>
        <Hello />

      </main>
    </div>
  );
}
