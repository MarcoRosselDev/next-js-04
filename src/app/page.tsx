import styles from "./page.module.css";
import Header from "./header/header";
import Main from "./main/main";
import { lusitana , jim_Nightshade} from '@/app/ui/fonts';

export default function Home() {
  return (
    <main className={`${styles.main} ${lusitana.className}`}>
      <Header />
      <Main />
      <footer>
        <p>Hola soy el footer</p>
      </footer>
    </main>
  );
}