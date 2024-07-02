import styles from "./page.module.css";
import Header from "./header/header";
import { lusitana , jim_Nightshade} from '@/app/ui/fonts';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <main>
        <p>Hola soy el main</p>
      </main>
      <footer>
        <p>Hola soy el footer</p>
      </footer>
    </main>
  );
}