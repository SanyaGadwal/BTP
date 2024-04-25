import React from 'react'
import './sem3.css'
import Card from '../../../utilities/courseCard/courseCard'
import mn211 from '../../../assets/images/mn211.jpg'
import mn212 from '../../../assets/images/mn212.jpg'
import mn251 from '../../../assets/images/mn251.jpg'

const Sem3 = () => {
    return (
      <div className="sem3Page">
        <h1 className="sem3Title">Semester 3</h1>
        <div className="sem3Container">
        
          <Card
            imgSrc={mn211}
            imgAlt="Mine Geology"
            title="MN 211"
            description="Mine Geology"
            link="mn211"
          />
          <Card
            imgSrc={mn212}
            imgAlt="Mine Surveying"
            title="MN 212"
            description="Mine Surveying"
            link="mn212"
          />
        <Card
            imgSrc={mn251}
            imgAlt="Mine Machinery"
            title="MN 251"
            description="Mine Machinery"
            link="mn251"
          />
        
        </div>
      </div>

    )
}

export default Sem3