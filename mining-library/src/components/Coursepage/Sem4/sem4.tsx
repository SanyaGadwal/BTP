import React from 'react'
import './sem4.css'
import Card from '../../../utilities/courseCard/courseCard'
import mn231 from '../../../assets/images/mn231.jpg'
import mn221 from '../../../assets/images/mn221.jpg'
import mn241 from '../../../assets/images/mn241.jpg'


const Sem4 = () => {
    return (
      <div className="sem4Page">
        <h1 className="sem4Title">Semester 4</h1>
        <div className="sem4Container">
        
          <Card
            imgSrc={mn231}
            imgAlt="Rock Mechanics"
            title="MN 231"
            description="Rock Mechanics"
            link="mn231"
          />
          <Card
            imgSrc={mn221}
            imgAlt="Underground Coal Mining"
            title="MN 221"
            description="Underground Coal Mining"
            link="mn221"
          />
          <Card
            imgSrc={mn241}
            imgAlt="Underground Mine Environment"
            title="MN 241"
            description="Underground Mine Environment"
            link="mn241"
          />
        
        
        </div>
      </div>

    )
}

export default Sem4






  
    
  


