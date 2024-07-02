import styles from './main.module.css'
import Link from 'next/link'

export default function Main() {
  
  return (
    <main className={styles.main}>
      <Link href="http://localhost:3000/proyectos"><p>proyectos</p> </ Link >
      <p>modelo 3d en un futuro</p>
      <canvas id='c'></canvas>
    </main>
  )
}