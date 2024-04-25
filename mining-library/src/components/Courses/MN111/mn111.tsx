import React from 'react'
import { Link } from "react-router-dom";
import style from './mn111.module.css'

const MN111 = () => {
    return (
        <>
            <div className={style.mn111page}>
                <h1 className={style.mn111Title}>MN-111</h1>
                <div className={style.mn111material}><a className ={style.mn111links}
                href='https://drive.google.com/file/d/1DU7Uvmd7wdH35AazeYg31Wq-GYecyMIP/view?usp=drive_link' >
                    <h2>Material</h2>
                    </a></div>
<p className ={style.mn111lines}>jvhv</p>
            </div>
        </>
    )
}

export default MN111