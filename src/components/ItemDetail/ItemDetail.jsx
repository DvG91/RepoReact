import ItemCount from "../ItemCount/ItemCount"
import styles from './ItemDetail.module.css'

export default function ItemDetail({ item }) {


    return (
        <>
            <div  >
                <p className={styles.name}>     {item.name}     </p>
                <p className={styles["Clase"+item.category]}>       {item.category}        </p>
                <div className={styles.directionRow}>
                     <img src={item.image} className={styles.Img} alt="imagen que representa el producto (Yerba mate o Te)" />



                    <div className={styles.centrarContenido} >
                        <p className={styles.description}>      {item.description}      </p>
                        <p className={styles.price}>      $ {item.price}                    </p>
                       <  ItemCount  className={styles.iitemCount}/>                   
                    </div>
                </div>


            </div>
        </>
    )
}