/* eslint-disable jsx-a11y/alt-text */
import pds from "../../img/Component 4.svg"
import styles from "./SobreNos.module.css"

function SobreNos() {
   return (
      <main className={styles.container}>

         <div className={styles.banner}>
            <img className={styles.banner_image} src={pds} title="Big Picture" />
            <h1 className={styles.banner_heading}>Nossa história</h1>
            <p className={styles.banner_text}>Lorem ipsum dolor sit amet,consectet-ur adipiscing elit. Curabitur ut odio ur-na.
               Sed scelerisque nisi suscipit lorem maximus tempor. Aenean viverra nibh nisl,
               sed pretium est cursus non. Donec tempus metus a ante pulvinar dignis-sim.
               Donec sed ullamcorper turpis, sit amet tincidunt magna. In sit amet sa-pien eget leo
               scelerisque aliquet at us.</p>
         </div>

         <div className={styles.sobrenos}>
            <h1 className={styles.sobrenos_heading}>Sobre nós</h1>
            <div>
               <div>
                  <p className={styles.sobrenos_text}>Lorem ipsum dolor sit amet,consectet-ur adipiscing elit. Curabitur ut odio ur-na.
                     Sed scelerisque nisi suscipit lorem maximus tempor. Aenean viverra nibh nisl,
                     sed pretium est cursus non. Donec tempus metus a ante pulvinar dignis-sim.
                     Donec sed ullamcorper turpis, sit amet tincidunt magna. In sit amet sa-pien eget leo
                     scelerisque aliquet at us.</p>
               </div>
               <div>
                  
               </div>
            </div>
         </div>


      </main>
   )
}

export default SobreNos