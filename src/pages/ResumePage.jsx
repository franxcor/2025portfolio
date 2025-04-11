import {Worker, Viewer} from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';
import resumePDF from "../assets/Corbishley_Resume.pdf";

import {Link} from 'react-router-dom';
import style from '../styles/resumepage.module.css';


function ResumePage() {
    return (
        <div className={style["root"]}>
            <div className={style["header"]}>
                        <p>FXC</p> 
                        <Link to="/About">
                          <p className={style["resLink"]}>About</p>
                        </Link>
                        <a href="https://github.com/franxcor">GitHub</a>
                      </div>
            <div className={style["resumeDiv"]}>
                <Worker className={style["resumeWorker"]} workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer className={style["resumeViewer"]} fileUrl={resumePDF} />
                </Worker>
            </div>
        </ div>
    )
}

export default ResumePage;