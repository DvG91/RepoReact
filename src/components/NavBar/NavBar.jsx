import CartWidget from '../CartWidget.jsx'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
function NavBar(p){
    return(

    <div className={styles.navBar}>       
        <nav className={styles.navBarNav}> 
            <Link to='/' >{p.label}</Link>
            <Link to='/category/yerba'>Yerba mate</Link>
            <Link to='/category/te'>Te</Link>
        </nav>

        <CartWidget label='1'/>
    </div>
    )
}
export default NavBar