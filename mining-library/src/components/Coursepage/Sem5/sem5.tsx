import React from 'react'
import './sem5.css'
import Card from '../../../utilities/courseCard/courseCard'
import mn341 from '../../../assets/images/mn341.jpg'
import mn333 from '../../../assets/images/mn333.jpg'
import mn331 from '../../../assets/images/mn331.jpg'
import mn361 from '../../../assets/images/mn361.jpg'
import mn321 from '../../../assets/images/mn321.jpg'


const Sem5 = () => {
    return (
      <div className="sem5Page">
        <h1 className="sem5Title">Semester 5</h1>
        <div className="sem5Container">

          <Card
            imgSrc={mn341}
            imgAlt="Advanced Mine Ventilation"
            title="MN 341"
            description="Advanced Mine Ventilation"
            link="mn341"
          />
          <Card
            imgSrc={mn333}
            imgAlt="Drilling & Blasting"
            title="MN 333"
            description="Drilling & Blasting"
            link="mn333"
          />
          <Card
            imgSrc={mn331}
            imgAlt="Ground Control"
            title="MN 331"
            description="Ground Control"
            link="mn331"
          />
          <Card
            imgSrc={mn361}
            imgAlt="Mine Management"
            title="MN 361"
            description="Mine Management"
            link="mn361"
          />
          <Card
            imgSrc={mn321}
            imgAlt="Surface Mining"
            title="MN 321"
            description="Surface Mining"
            link="mn321"
          />
        
        
        </div>
      </div>

    )
}

export default Sem5






  
    
  


