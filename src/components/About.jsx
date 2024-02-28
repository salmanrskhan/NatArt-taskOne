import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ImgOne from "../assets/img/1.png";
import ImgTwo from "../assets/img/2.png";
import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {
  return (
    <div className='section'>
      <Row className='align-items-center mb-4'>
        <Col md={4} sm={6} xs={8} className='m-auto orderImg' >
          <img src={ImgOne} alt="" />
        </Col>

        <Col md={8}>
          <div>
            <h6> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h6>
            <div>
              <ul>
                <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                </li>
              </ul>
              <img src={ImgTwo} alt="" />
            </div>
            <p className='mt-3'>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default About;