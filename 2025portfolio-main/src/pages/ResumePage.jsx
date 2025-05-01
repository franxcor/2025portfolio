import {Worker, Viewer} from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';
import resumePDF from "../assets/Corbishley_Resume.pdf";

import {Link} from 'react-router-dom';
import style from '../styles/resumepage.module.css';

import fxc from "../assets/FXC.png"
import home from "../assets/Home.png"
import linked from "../assets/LinkedIn.png"
import About from "../assets/About.png"
import github from "../assets/Github.png"



function ResumePage() {
    return (
        <div className={style["root"]}>
            <div className={style["header"]}>
                        <ul className={style["headList"]}>
                          <li className={style["listItem"]}><img src={fxc} className={style["fxc"]} style={{ marginRight: '80%' }} /> </li>
                          <li className={style["listItem"]}><Link to="/"><img src={home} className={style["home"]} /></Link></li>
                          
                          <li className={style["listItem"]}>
                            <Link to="/About">
                            <img src={About} className={style["resume"]} /> 
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
            <div className={style["resumeDiv"]}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
    <Viewer className={style["resumeWorker"]} fileUrl={resumePDF} />
</Worker>
            </div>
        </ div>
    )
}

export default ResumePage;