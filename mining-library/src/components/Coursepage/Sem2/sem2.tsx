import React from 'react'
import { Link } from "react-router-dom";
import style from './sem2.module.css'

const Sem2 = () => {
    return (
        <>
            <div className={style.sem2page}>
                <h1 className={style.sem2Title}>Semester II</h1>
                <div className={style.sem2Container}>
                    <div className={style.coursebutton}><Link to="/mn111" style={{ textDecoration: 'none' }}>MN-111</Link></div>
                    <div className={style.coursebutton}><Link to="/mn112" style={{ textDecoration: 'none' }}>MN-112</Link></div>
                </div>

            </div>
        </>
    )
}

export default Sem2