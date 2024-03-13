import React from 'react'
import style from './choices.module.css'
const Choices = () => {
    return (
        <>
            <div className={style.chooseSem}>
                <h1 className={style.semTitle}>Choose Semester</h1>
                <div className={style.semContainer}>
                    <div className={style.sembutton}><a className={style.sem} href=''>SEMESTER I</a></div>
                    <div className={style.sembutton}><a className={style.sem} href=''>SEMESTER II</a></div>
                    <div className={style.sembutton}><a className={style.sem} href=''>SEMESTER III</a></div>
                    <div className={style.sembutton}><a className={style.sem} href=''>SEMESTER IV</a></div>
                    <div className={style.sembutton}><a className={style.sem} href=''>SEMESTER V</a></div>
                    <div className={style.sembutton}><a className={style.sem} href=''>SEMESTER VI</a></div>
                    <div className={style.sembutton}><a className={style.sem} href=''>SEMESTER VII</a></div>
                    <div className={style.sembutton}><a className={style.sem} href=''>SEMESTER VIII</a></div>
                </div>

            </div>
        </>
    )
}

export default Choices