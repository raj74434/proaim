import React, { useState } from "react";
import {Link} from "react-router-dom"
import styles from '../comp_css/navbar.module.css';
import NavBarDrawerModel from "./NavBarDrawerModel";






function NavBar(){
    const [mobileMenu,setMobileMenu]= useState(false);


    return(
    <div  >
       

    <div className={styles.navBar} >
        <div className={styles.innerNavBar} >
       
        <div className={styles.navLeft}>
            <h1>ProAimHub</h1>
           {/* <Link to="/" className={styles.navLeft}><img className={styles.navLogo} 
            src={require('../images/medi_logo.jpg')} alt="company logo" /> </Link>  */}
        </div>
        <div className={styles.navRight}>
           
            <div> <Link to="/" className={styles.linkTag}  > <h3>Home</h3></Link> </div>
            <div> <Link to="/about"  className={styles.linkTag}>  <h3>About Us</h3></Link>  </div>
            <div> <Link to="/contact" className={styles.linkTag}>  <h3>Contact Us</h3> </Link> </div>
            <div> <Link to="/signup" className={styles.linkTag}>  <h3>SignUp / LogIn</h3> </Link> </div>
            
           
        </div>
        {/* Nav right ended */}
        </div>



        {/* ===================================================== */}

        <div className={styles.hamberger}>      
                
                {mobileMenu==false?
            
                 <img onClick={()=>setMobileMenu(!mobileMenu)}  src={require("../assets/images/hamburger.png")} alg="menu icon"/>
                
                :
                
                <img  onClick={()=>setMobileMenu(!mobileMenu)}  src={require("../assets/images/cross.jpg")} alg="cross icon"/>
                }



                {/* <div className={mobileMenu ? styles.navbar_menu:styles.navRight}>
                    <div> <Link to="/"  className={styles.linkTag} > <h3>Home</h3></Link> </div>
                    <div> <Link to="/category" className={styles.linkTag}  > <h3>Products</h3></Link></div>
                    <div> <Link to="/about" className={styles.linkTag}  >  <h3>Company</h3></Link>  </div>
                    <div> <Link to="/contact"  className={styles.linkTag}  >  <h3>Contact</h3> </Link> </div>
                </div> */}





        </div>


    {/* ========================================================= */}

    </div>

   <div className={styles.navdrawer}>
    <NavBarDrawerModel mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    
    </div>

    </div>

    );

}



export default NavBar;