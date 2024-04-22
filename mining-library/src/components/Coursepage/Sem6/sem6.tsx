import React from 'react'
import './sem6.css'
import Card from '../../../utilities/courseCard/courseCard'
import mn342 from '../../../assets/images/mn342.jpg'
import mn332 from '../../../assets/images/mn332.jpg'
import mn322 from '../../../assets/images/mn322.jpg'


const Sem6 = () => {
    return (
      <div className="sem6Page">
        <h1 className="sem6Title">Semester 6</h1>
        <div className="sem6Container">
        
          <Card
            imgSrc={mn342}
            imgAlt="Environmental Management"
            title="MN 342"
            description="Environmental Management in Surface Mines"
            link="card1"
          />
          <Card
            imgSrc={mn332}
            imgAlt="Card Image 2"
            title="MN 332"
            description="Fundamentals of Rock Mechanics Instrumentation"
            link="card2"
          />
          <Card
            imgSrc={mn322}
            imgAlt="Card Image 3"
            title="MN 322"
            description="Metalliferous Mining"
            link="card2"
          />
        
        
        </div>
      </div>

    )
}

export default Sem6






  
    
  


