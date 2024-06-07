import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {

  return (

    <div className={styles.navContainer}>
      <Link to="/" className={styles.link}><h4>Home</h4></Link>
      <Link to="/companies" className={styles.link}><h4>Companies</h4></Link>
      <Link to="/locations" className={styles.link}><h4>Locations</h4></Link>
      <Link to="/contacts" className={styles.link}><h4>Contacts</h4></Link>
    </div>
  )
}

export default Navbar;