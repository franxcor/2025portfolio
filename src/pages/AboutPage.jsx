import { useState } from "react"
import {Link} from "react-router";

import style from "../styles/aboutpage.module.css"
import background from "../assets/aboutBackground.png"
import frame from "../assets/photo.png"
import education from "../assets/education.png"
import skills from "../assets/skills.png"
import experience from "../assets/experience.png"

function AboutPage() {

    return (
      <>
        <div className={style["root"]}>
          <div className={style["header"]}>
            <p>FXC</p> 
            <Link to="/Resume">
              <p className={style["resLink"]}>Resume</p>
            </Link>
            <a href="https://github.com/franxcor">GitHub</a>
          </div>
          <div className={style["rootTop"]}>
            <img src={frame} className={style["frame"]} />
            <div className={style["title"]}>
              <h1>Francesca Corbishley</h1>
              <h2>Full-Stack Engineer</h2>
            </div>
          </div>
          
          <div className={style["rootBottom"]}>
            <div className={style["rootBottomLeft"]}>
              <div className={style["educationDiv"]}>
                <img src={education} className={style["education"]} />
              </div>
              <div className={style["skillsDiv"]}>
                <img src={skills} className={style["skills"]} />
              </div>
            </div>
            
            <div className={style["experienceDiv"]}>
              <img src={experience} className={style["experience"]} />
            </div>
          </div>
          
          
        </div>
      </>
    )
  }
  
  export default AboutPage