import styles from "./page.module.css";
import { lusitana , jim_Nightshade} from '@/app/ui/fonts';

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <p>hola soy el header</p>
      </header>
      <main>
        <p>Hola soy el main</p>
      </main>
      <footer>
        <p>Hola soy el footer</p>
      </footer>
    </main>
  );
}