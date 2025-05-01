import style from '../styles/wrapper.module.css';

// using to replace other divs
const Wrapper = ({children, mode}) => {
    return <div className={`${style["section"]} ${mode ? style["darkMode"]: ""}`}> <div className={style["container"]}> {children} </div> </div>
}

export default Wrapper;