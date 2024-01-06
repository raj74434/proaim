import React from "react"
import {Link} from "react-router-dom"
import styles from "../comp_css/navBarDrawerModel.module.css"

const NavBarDrawerModel=(prop)=>{


return(
    <div onClick={()=>prop.setMobileMenu(false)}   className={prop.mobileMenu ?styles.back:""}>
    <div className={prop.mobileMenu ? styles.drawerContainer_open : styles.drawerContainer}>
        <div className={styles.drawerContent}>
            <div className={prop.mobileMenu ? styles.navbar_menu:styles.navRight}>
                    <div> <Link to="/"  className={styles.linkTag} > <h3>Home</h3></Link> </div>
                    <hr/>
                    <div> <Link to="/category" className={styles.linkTag}  > <h3>Products</h3></Link></div>
                    <hr/>
                    <div> <Link to="/about" className={styles.linkTag}  >  <h3>Company</h3></Link>  </div>
                    <hr/>
                    <div> <Link to="/contact"  className={styles.linkTag}  >  <h3>Contact</h3> </Link> </div>
                    <hr/>
            </div>
        </div>
        
    </div>  
     </div>
)

}

export default NavBarDrawerModel