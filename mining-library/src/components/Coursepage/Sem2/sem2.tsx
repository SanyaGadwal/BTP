import React from 'react'
import './sem2.css'
import Card from '../../../utilities/courseCard/courseCard'
import mn111 from '../../../assets/images/mn111.jpg'
import mn112 from '../../../assets/images/mn112.jpg'


const Sem2 = () => {
    return (
      <div className="sem2Page">
        <h1 className="sem4Title">Semester 2</h1>
        <div className="sem4Container">
        
          <Card
            imgSrc={mn111}
            imgAlt="Mine Development"
            title="MN 111"
            description="Mine Development"
            link="mn111"
          />
          <Card
            imgSrc={mn112}
            imgAlt="Mine Practice"
            title="MN 112"
            description="Mine Practice"
            link="mn112"
          />
        
        
        </div>
      </div>

    )
}

export default Sem2






  
    
  


