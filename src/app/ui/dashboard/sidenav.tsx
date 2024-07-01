import Link from "next/link" // reemplazamos a href por Link href y no se recarga la pagina a navegar por los links
import styles from "./sidenav.module.css"

export default function SideNav() {
  return (
    <div className={styles.side_nav}>
      <p>sidenav</p>
      <p>todo lo que coloque en este div sera perpetuo en los siguientes url's</p>
      <Link href="http://localhost:3000/dashboard/invoices"><p>invoices</p> </ Link >
      <Link href="http://localhost:3000/dashboard/customers"><p>customers</p> </ Link >
      <Link href="http://localhost:3000"><p>home</p> </ Link >
      <Link href="http://localhost:3000/characters"><p>rick and morty data</p> </ Link >
    </div>
  )
}