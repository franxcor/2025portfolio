import { useState } from "react"
import {Link} from "react-router";

import style from "../styles/aboutpage.module.css"
import welcome from "../assets/welcome.png"
import name from "../assets/nameTag.png"
import enter from "../assets/enterTicket.png"
import enterShadow from "../assets/enterTicketShadow.png"
import button from "../assets/button.png"
import loveLetter from "../assets/loveLetter.png"

function AboutPage() {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOut = () => {
        setIsHovering(false);
    }

    const handleMouseOver = () => {
        setIsHovering(true);
    }

    return (
      <div className={style["root"]}>
        <img src={welcome} className={style["welcome"]} />
        <img src={loveLetter} className={style["loveLetter"]} />
        <img src={name} className={style["name"]} />
        {isHovering && (    
        <img src={enterShadow} 
            className={style["enterShadow"]} 
        />
        )}
        <Link to="/About">
            <img src={enter} className={style["enter"]} 
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut} />
        </Link>
        
        
        <img src={button} className={style["button"]} />
      </div>
    )
  }
  
  export default AboutPage