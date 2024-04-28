import React from 'react'
import style from './homepage.module.css'
import miningApp from './assets/miningapplications.jpg'

const HomePage = () => {
    return (
        <>
            <div className={style.home}>
                <div className={style.homeBg}>
                    <p className={style.homeh2}>Undergraduate Project</p>
                    <p className={style.homeh4}>Digital Resource Creation For Study Of Mining Engineering</p>
                    <h1 className={style.homeh1}>MINE MASTER</h1>
                    <p className={style.homeh2}>By</p>
                    <p className={style.homeh2}>Sanya Gadwal (Content) & Suhani Garg (Graphics)</p>
                    <p className={style.homeh2}>Under the guidance of</p>
                    <p className={style.homeh2}>Dr. A. Kumar</p>
                    <br></br>
                    <p className={style.homeh3}>We seek to provide a centralized platform containing comprehensive resources related to various courses in Mining Engineering. This includes syllabi, lecture notes, reference materials, and other information related to the subject.</p>
                </div>
            </div>

            <div>
                <div className={style.homeAbout}>
                    <h2 className={style.homeAboutTitle}>Mining: The Nation's Vital Core</h2>

                    <div className={style.homeImportance}>
                        <p className={style.homeAboutContent}>Mining engineering plays a pivotal role in the development of a nation by spearheading the sustainable extraction of mineral resources crucial for various sectors. 
                        At its core, mining engineering ensures the efficient and responsible extraction of minerals, metals, and other valuable resources essential for industrial processes, construction, energy production, 
                        and technological advancement. Through advanced techniques and technologies, mining engineers optimize resource extraction while minimizing environmental impact, ensuring the preservation of ecosystems and biodiversity. 
                        Moreover, mining engineering contributes significantly to national economies by generating revenue, creating employment opportunities, and fostering innovation in mining practices. By integrating principles of safety, 
                        environmental stewardship, and socio-economic responsibility, mining engineering not only drives economic growth but also promotes long-term sustainability, making it an indispensable component of nation-building efforts.
                        </p>
                        <img src={miningApp} alt='Mining Applications' className={style.homeAboutImage} />
                    </div>
                </div>
            </div>

            <div>
                <div className={style.homeAbout}>
                    <h2 className={style.homeAboutTitle}>Mining Engineering Education In India</h2>
                    <p className={style.homeAboutContent}>
                        The following Government colleges in India, apart from IIT (BHU) Varanasi, offer undergraduate programs in Mining Engineering:
                        <ul className={style.homeAboutList}><li>IIT Kharagpur</li>
                            <li>NIT Surathkal</li>
                            <li>NIT Rourkela</li>
                            <li>IIT Dhanbad (ISM)</li>
                            <li>IIEST Shibpur</li>
                            <li>NIT Raipur</li>
                            <li>VNIT Nagpur</li>
                            <li>Visvesvaraya Technological University</li>
                            <li>Maliana Abli Kalam Azad University of Technology</li>
                            <li>University Institute of Technology, Shahdol</li>
                            <li>College of Engineering, Anna University</li>
                            <li>Birsa Institute of Technology, Sindri</li>
                            <li>University College of Engineering, Osmania University</li>
                            <li>Rashtrasant Tukadoji Maharaj Nagpur University</li>
                            {/* <li>MBM Engineering College</li>
                            <li>Government College of Engineering, Biju Patnaik University of Technology</li>
                            <li>College of Technology and Engineering, Udaipur</li>
                            <li>Goa College of Engineering</li>
                            <li>Government Engineering College, Bilaspur</li>
                            <li>Kakatiya University</li>
                            <li>Kazi Nazrli University</li>
                            <li>Shershah Engineering College</li>
                            <li>Maharana Pratap University of Agricliture and Technology, Udaipur</li>
                            <li>Government Engineering College, Jagdalpur</li>
                            <li>Government Engineering College, Bhuj</li>
                            <li>Bikaner Technical University</li>
                            <li>College of Engineering Manthani, Jawaharlal Nehru Technological University, Hyderabad</li> */}
                        </ul>
                    </p>
                </div>
            </div>

            <div>
                <div className={style.homeAbout}>
                    <h2 className={style.homeAboutTitle}>Mining Engineering In IIT (BHU)</h2>
                    <p className={style.homeAboutContent}>IIT (BHU) follows the following semester-wise Course Structure, designed for 4-Year B.Tech. Engineering. Choose any semester given below to find the study resources for the respective courses.
                    </p>
                </div>
            </div>


        </>
    )
}

export default HomePage