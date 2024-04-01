import React from 'react'
import { Link } from "react-router-dom";
import style from './sem2.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';



const Sem2 = () => {
    return (
        <>
            <div className={style.sem2page}>
                <h1 className={style.sem2Title}>Semester II</h1>

                <div className={style.sem2Container}>
                
 <div className ={style.card}>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <div className ={style.tab}><Card.Body>
        <Card.Title>MA-101</Card.Title>
        <Card.Text>
          ENGINEERING MATHEMATICS-I
        </Card.Text>
        <Button variant="primary">
          <div className={style.coursebutton}>
          <Link to="/mn111" style={{ textDecoration: 'none' }}><div className ={style.seeme}>See more</div></Link>
          </div>
          </Button>
      </Card.Body>
      </div>
    </Card>
    </div>

    <div className ={style.card}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <div className ={style.tab}><Card.Body>
        <Card.Title>ME-104</Card.Title>
        <Card.Text>
          ENGINEERING DRAWING
        </Card.Text>
        <Button variant="primary">
          <div className={style.coursebutton}>
            <Link to="/mn112" style={{ textDecoration: 'none' }}><div className ={style.seeme}>See more</div></Link>
            </div>
          
          </Button>
      </Card.Body>
      </div>
    </Card>
    </div>


    <div className ={style.card}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <div className ={style.tab}>
        <Card.Body>
        <Card.Title>CS0-101</Card.Title>
        <Card.Text>
          COMPUTER PROGRAMMING
        </Card.Text>
        <Button variant="primary">
          <div className={style.coursebutton}>
          <Link to="/mn111" style={{ textDecoration: 'none' }}><div className ={style.seeme}>See more</div></Link>
          </div>
          </Button>
      </Card.Body>
      </div>
    </Card>
    </div>

    <div className ={style.card}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <div className ={style.tab}><Card.Body>
        <Card.Title>MN-111</Card.Title>
        <Card.Text>
          MINE DEVELOPMENT
        </Card.Text>
        <Button variant="primary">
          <div className={style.coursebutton}>
          <Link to="/mn111" style={{ textDecoration: 'none' }}><div className ={style.seeme}>See more</div></Link>
          </div>
          </Button>
      </Card.Body>
      </div>
    </Card>
    </div>

    <div className ={style.card}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <div className ={style.tab}><Card.Body>
        <Card.Title>MN-112</Card.Title>
        <Card.Text>
          MINE PRACTICES
        </Card.Text>
        <Button variant="primary">
          <div className={style.coursebutton}>
          <Link to="/mn111" style={{ textDecoration: 'none' }}><div className ={style.seeme}>See more</div></Link>
          </div>
          </Button>
      </Card.Body></div>
    </Card>
    </div>


    <div className ={style.card}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <div className ={style.tab}>
        <Card.Body>
        <Card.Title>ME-106</Card.Title>
        <Card.Text>
          MANUFACTURING PRACTICES-II
        </Card.Text>
        <Button variant="primary">
          <div className={style.coursebutton}>
          <Link to="/mn111" style={{ textDecoration: 'none' }}><div className ={style.seeme}>See more</div></Link>
          </div>
          </Button>
      </Card.Body>
      </div>
    </Card>
    </div>

    <div className ={style.card}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <div className ={style.tab}><Card.Body>
        <Card.Title>H-104</Card.Title>
        <Card.Text>
          HISTORY AND CIVILIZATION
        </Card.Text>
        <Button variant="primary">
          <div className={style.coursebutton}>
          <Link to="/mn111" style={{ textDecoration: 'none' }}><div className ={style.seeme}>See more</div></Link>
          </div>
          </Button>
      </Card.Body></div>
    </Card>
    </div>

    </div> 

    </div>

    </>

    )
}

export default Sem2






  
    
  


