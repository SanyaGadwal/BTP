import { Link } from "react-router-dom";
import React from 'react'
import style from './choices.module.css'

const Choices = () => {
    return (
        <>
            <div className={style.chooseSem}>
                <h1 className={style.semTitle}>Choose Semester</h1>
                <div className={style.semContainer}>
                    {/* <div className={style.sembutton}><Link to="/sem1" style={{ textDecoration: 'none' }}><div className={style.sem}>SEMESTER I</div></Link></div> */}
                    <div className={style.sembutton}><Link to="/sem2" style={{ textDecoration: 'none' }}><div className={style.sem}>SEMESTER II</div></Link></div>
                    <div className={style.sembutton}><Link to="/sem3" style={{ textDecoration: 'none' }}><div className={style.sem}>SEMESTER III</div></Link></div>
                    <div className={style.sembutton}><Link to="/sem4" style={{ textDecoration: 'none' }}><div className={style.sem}>SEMESTER IV</div></Link></div>
                    <div className={style.sembutton}><Link to="/sem5" style={{ textDecoration: 'none' }}><div className={style.sem}>SEMESTER V</div></Link></div>
                    <div className={style.sembutton}><Link to="/sem6" style={{ textDecoration: 'none' }}><div className={style.sem}>SEMESTER VI</div></Link></div>
                    <div className={style.sembutton}><Link to="/sem7" style={{ textDecoration: 'none' }}><div className={style.sem}>SEMESTER VII</div></Link></div>
                    <div className={style.sembutton}><Link to="/sem8" style={{ textDecoration: 'none' }}><div className={style.sem}>SEMESTER VIII</div></Link></div>
                </div>

            </div>
        </>
    )
}

export default Choices