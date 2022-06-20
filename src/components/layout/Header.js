import { Link } from "react-router-dom";
import logo from "../../img/UnityLogo.svg"


import styles from './Header.module.css'


function Header() {
   return (
      <nav className={styles.header_container}>
         <div className={styles.header_container_img_area}>
            <Link to="/">
               <img className={styles.header_container_img} src={logo} alt="Unity" />
            </Link>
         </div>

         <div className={styles.header_container_list_area}>
            <ul className={styles.header_container_list}>
               <li className={styles.header_container_list_item}><Link to="/">Home</Link></li>
               <li className={styles.header_container_list_item}><Link to="/sobrenos">Sobre nós</Link></li>
               <li className={styles.header_container_list_item}><Link to="/escala">Escala</Link></li>
               <li className={styles.header_container_list_item}><Link to="/contribuicoes">Contribuições</Link></li>
               <li className={styles.header_container_list_item}><Link to="/faleconosco">Fale Conosco</Link></li>
            </ul>
         </div>
      </nav>


   )
}

export default Header