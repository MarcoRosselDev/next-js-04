import styles from "./sidenav.module.css"

export default function SideNav() {
  return (
    <div className={styles.side_nav}>
      <p>sidenav</p>
      <p>todo lo que coloque en este div sera perpetuo en los siguientes url's</p>
      <a href="http://localhost:3000/dashboard/invoices">invoices</a>
      <a href="http://localhost:3000/dashboard/customers">customers</a>
    </div>
  )
}