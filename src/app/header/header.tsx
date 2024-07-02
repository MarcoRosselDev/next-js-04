import styles from "./header.module.css"
import Mode from "@/components/mode"

export default function header() {
  return (
    <header className={styles.header}>
      hola soy el header
      <Mode />
    </header>
  )
}