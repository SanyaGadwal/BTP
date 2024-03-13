import React from 'react'
import style from './homepage.module.css'
const Home = () => {
    return (
        <>
            <div className={style.sem2page}>
                <h1 className={style.sem2Title}>Semester II</h1>
                <div className={style.sem2Container}>
                    <div className={style.coursebutton}><a className={style.sem2} href=''>MN-111</a></div>
                    <div className={style.coursebutton}><a className={style.sem2} href=''>MN-112</a></div>
                </div>

            </div>
        </>
    )
}

export default Home