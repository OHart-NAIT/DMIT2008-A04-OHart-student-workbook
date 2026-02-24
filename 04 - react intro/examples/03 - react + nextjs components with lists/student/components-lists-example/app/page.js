
import styles from "./page.module.css";

// Components
import SimpsonsCharacters from "./components/SimpsonsCharacters"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Here's my title.</h1>
        <SimpsonsCharacters/>
      </main>
    </div>
  );
}
