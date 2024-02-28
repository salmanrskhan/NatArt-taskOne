import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='section mb-2 mt-4 text-center'>
            <h6>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h6>
            <p className='mt-3'>CHEMICALS & PROCESS <span className='pipe'>|</span> POWER <span className='pipe'>|</span> WATER & WASTE WATER <span className='pipe'>|</span> OILS & GAS <span className='pipe'>|</span> PHARMA <span className='pipe'>|</span> SUGARS & DISTILLERIES <span className='pipe'>|</span> PAPER & PULP <span className='pipe'>|</span> MARINE & DEFENCE <span className='pipe'>|</span> METAL & MINING <span className='pipe'>|</span> FOOD & BEVERAGE <span className='pipe'>|</span> PETROCHEMICAL & REFINERIES <span className='pipe'>|</span> SOLAR <span className='pipe'>|</span> BUILDING <span className='pipe'>|</span> HVAC <span className='pipe'>|</span> FIRE FIGHTING <span className='pipe'>|</span> AGRICULTURE & RESIDENTIAL</p>
            <div className='footerBtm'>
                <Row className='g-3'>
                    <Col sm={4}>
                        <FaPhoneSquareAlt /><span>Tolle Free 123456798</span>
                    </Col>
                    <Col sm={4}>
                        <FaFacebookSquare /><span>www.facebook.com</span>
                    </Col>
                    <Col sm={4}>
                        <FaGlobe /><span>www.globe.com</span>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Footer