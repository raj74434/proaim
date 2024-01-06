import React from "react";
import style from "../pages_css/homepage.module.css"
import NavBar  from "../components/NavBar"
import Footer from "../components/Footer"




const HomePage=()=>{

return(
    <div style={{backgroundColor:"#33333b"}}>
        <div className={style.homepage_intro}>
        <NavBar/>
        <div className={style.homepage_img_and_button}>
        <div className={style.homepage_soldier_img}>
            <img src={require("../assets/images/homepage/proaimhubSoilder.jpg")}/>
        </div>
        <div className={style.homepage_soldier_img_btns}>
            <button className={style.homepage_soldier_img_playBtn}><h2> Play Now </h2></button>
            <br/>
            <button className={style.homepage_soldier_img_earnBtn}><h2> Earn Tickets </h2></button>
        </div>
        </div>
        </div>
{/* Intro ended */}
        <div className={style.homepage_desc}>
            <div className={style.homepage_desc_heading_div}>
            <div className={style.homepage_desc_content}>

                <div className={style.homepage_desc_desc}>
                <h1>Earn Tickets - Play Tornaments - Get Rewarded</h1>
                <h2>Read and Answer simple questions</h2>
                <h2>Get tickets for every answered quention</h2>
                <h2>No Matter Right Or Wrong </h2>
                <h2>Participate in tornament and win big prizes</h2>
                </div>


                <div className={style.homepage_desc_all_imgs}>
                    <div className={style.homepage_desc_img_div}>
            <img className={style.homepage_desc_img} src={require("../assets/images/homepage/proaimpic2.jpg")}/>
                    </div>
                    <div className={style.homepage_desc_pubg_img_div}>
            <img className={style.homepage_desc_pubg_img} src={require("../assets/images/homepage/proaimpubg.jpg")}/>
                    </div>
                </div>
           
            </div>
            </div>
        </div>
   <Footer></Footer>
    </div>
);

}

export default HomePage;