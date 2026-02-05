import { Outlet } from "react-router"
import styles from "./AppLayout.module.css"

const AppLayout = () => {
  return (
    <div className={styles.appLayout}><Outlet /></div>
  )
}

export default AppLayout
