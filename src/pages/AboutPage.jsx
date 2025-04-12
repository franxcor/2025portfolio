import { useState } from "react"
import {Link} from "react-router";

import style from "../styles/aboutpage.module.css"
import frame from "../assets/framedPhoto.png"
import bio from "../assets/bio.png"
import education from "../assets/eduGroup.png"
import skills from "../assets/skillsGroup.png"
import experience from "../assets/ExpGroup.png"
import fxc from "../assets/FXC.png"
import home from "../assets/Home.png"
import linked from "../assets/LinkedIn.png"
import resume from "../assets/Resume.png"
import github from "../assets/Github.png"

function AboutPage() {

    return (
      <>
        <div className={style["root"]}>
          <div className={style["header"]}>
            <ul className={style["headList"]}>
              <li className={style["listItem"]}><img src={fxc} className={style["fxc"]} style={{ marginRight: '80%' }} /> </li>
              <li className={style["listItem"]}><img src={home} className={style["home"]} /></li>
              
              <li className={style["listItem"]}>
                <Link to="/Resume">
                <img src={resume} className={style["resume"]} /> 
                </Link>
              </li>
              <li className={style["listItem"]}> 
                <a href="https://www.linkedin.com/in/francesca-corbishley/">
                <img src={linked} className={style["linked"]} /> </a>
              </li>
              <li className={style["listItem"]}>
                <a href="https://github.com/franxcor">
                <img src={github} className={style["github"]} />
                </a>
              </li>
            </ul>
            
          </div>
          
          <div className={style["mainContent"]}>
          <img src={frame} className={style["photo"]} />
          <img src={bio} className={style["bio"]} />
          </div>
          
          <img src={education} className={style["education"]}/>
          <img src={skills} className={style["skills"]}/>
          <img src={experience} className={style["experience"]}/>

          {/*
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
          
          */}
        </div>
        
      </>
    )
  }
  
  export default AboutPage