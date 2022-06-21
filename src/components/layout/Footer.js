/* eslint-disable jsx-a11y/alt-text */
import instagram from "../../img/VectorInstagram.svg"
import localizacao from "../../img/VectorLocalizacao.svg"


import styles from "./Footer.module.css"

function Footer() {
   return (
      <footer className={styles.footer_area}>

         <footer className={styles.footer_area_components}>

            <div className={styles.footer_list}>

               <div className={styles.footer_list_item}>
                  <a href="https://www.instagram.com/jaguanandi/">
                     <img src={instagram} className={styles.footer_icons} title="Clique para visitar o instagram" />
                  </a>
               </div>

               <div className={styles.footer_list_item}>
                  <a href="https://www.google.com.br/maps/place/R.+Jatobá,+416+-+Guanandi,+Campo+Grande+-+MS,+79086-410/@-20.4998295,-54.6486895,17z/data=!3m1!4b1!4m5!3m4!1s0x9486e5d16e9c4753:0x3e974a20177596c0!8m2!3d-20.4998345!4d-54.6464955">
                     <img src={localizacao} className={styles.footer_icons} title="Clique para ver a nossa localização" />
                  </a>
               </div>

            </div>

         </footer>

         <p className={styles.copy_right}>
            <span>Unity Music </span>
            &copy; 2022</p>

      </footer>
   )
}

export default Footer