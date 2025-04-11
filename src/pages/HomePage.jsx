import style from "../styles/homepage.module.css"
import welcome from "../assets/welcome.png"
import name from "../assets/nameTag.png"
import enter from "../assets/enterTicket.png"
import button from "../assets/button.png"
import loveLetter from "../assets/loveLetter.png"

function HomePage() {

    return (
      <div className={style["root"]}>
        <img src={welcome} className={style["welcome"]} />
        <img src={loveLetter} className={style["loveLetter"]} />
        <img src={name} className={style["name"]} />
        <img src={enter} className={style["enter"]} />
        <img src={button} className={style["button"]} />
      </div>
    )
  }
  
  export default HomePage