import { Link } from "react-router"
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <div className={styles.stack}>
      <div className={styles.textGroup}>
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      <div className={styles.buttonGroup}>
        <Link to="/auth/signup" className={styles.signupButton}>
          Create Account
        </Link>
        <Link to="/auth/login" className={styles.loginButton}>
          Already Registered? Login
        </Link>
      </div>
    </div>
  )
}

export default Landing
