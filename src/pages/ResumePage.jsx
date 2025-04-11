import {Worker, Viewer} from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';
import resumePDF from "../assets/Corbishley_Resume.pdf";

import {Link} from 'react-router-dom';


function ResumePage() {
    return (
        <>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            <Viewer fileUrl={resumePDF} />
        </Worker>
        </>
    )
}

export default ResumePage;