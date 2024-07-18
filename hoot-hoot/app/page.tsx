import Image from "next/image";
import styles from "./page.module.css";
import TaddyTest from "./TaddyTest";

export default function Home() {
  return (
    <main className={styles.main}>
      <TaddyTest />
    </main>
  );
}
