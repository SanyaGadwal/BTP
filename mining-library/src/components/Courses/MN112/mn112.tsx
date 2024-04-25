import React from 'react'
import { Link } from "react-router-dom";
import style from './mn112.module.css'

const MN112 = () => {
    return (
        <>
            <div className={style.mn112page}>
                <h1 className={style.mn112Title}>MN-112</h1>
                <div className={style.mn111material}>
                <div className={style.mn112box}><a className ={style.mn112links}
                href='https://drive.google.com/file/d/1DrybhGOSizB-iwLIEC1fyCC_35lew7IB/view?usp=drive_link' >
                    <h2>Introduction to mining methods</h2>
                    </a></div>
                    <div className={style.mn112box}><a className ={style.mn112links}
                    href ='https://drive.google.com/file/d/1DdyFZfUv0Qu6e6h7bRCUd7etu0C1Su24/view?usp=drive_link'>
            <h2>Mine Surveying</h2>
                    </a></div>
                    <div className={style.mn112box}><a className ={style.mn112links}
                    href ='https://drive.google.com/file/d/1Dtzwfeggpz2gPoHniCxCjU7mvXUvpPXL/view?usp=drive_link'>
            <h2>Mine Geology</h2>
                    </a></div>
                    <div className={style.mn112box}><a className ={style.mn112links}
                    href ='https://drive.google.com/file/d/1DexLPxGebN-YPAPzr8kxjf8FYsamscIw/view?usp=drive_link'>
            <h2>Mine Machinery</h2>
                    </a></div>
            </div>
            </div>
        </>
    )
}

export default MN112