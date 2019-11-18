import React, { Component } from 'react';
import {Row, Col} from 'antd'
import fb from '../../../assets/image/Facebook.png'
import ig from '../../../assets/image/InstaLogo.png'
import In from '../../../assets/image/LinkedIn.png'
import twt from '../../../assets/image/twitter.png'
import CopyRight from './components/copyright'

import { Responsive, Segment } from 'semantic-ui-react'
class FootContainer extends Component {
   
    render() { 
        return ( 
            <div>
                <Responsive  {...Responsive.onlyComputer}>
                    <div className="footer-container">
                        <div className="footer-content-container">
                            <Row type="flex" gutter={32} style={{width:"100%"}}>
                                <Col align="left"  lg={{span:8}} md={{span:8}} sm={{span:12}} xs={{span:24}}>
                                    <h3 style={{color:"#fff"}} >About Online Jobfair</h3>
                                    <ul className="footer-links">
                                        <li>
                                            <a>
                                            asd
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            asd
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            asd
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col align="left" style={{color:"#fff"}} lg={{span:8}} md={{span:10}} sm={{span:12}} xs={{span:24,align:"center"}}>
                                    <h3 style={{color:"#fff"}} >Terms of use and Privacy</h3>
                                    <ul className="footer-links">
                                        <li>
                                            <a>
                                            asd
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            asd
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            asd
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col align="center"  style={{color:"#fff"}} lg={{span:8}} md={{span:6}}  sm={{span:24}} xs={{span:24, align:"center"}}>
                                    <h3 style={{color:"#fff"}} >Follow us:</h3>
                                <div className="social-media">
                                    <a target="_blank" href="https://www.facebook.com/JobStreamApp.PH/">
                                        <img className="icon" style={{ margin:5,}} src={fb} alt="Co image"/>
                                    </a>
                                    <a target="_blank" href="https://www.instagram.com/jobstreamapp/">
                                        <img className="icon" style={{margin:5}} src={ig} alt="Co image"/>
                                    </a>
                                    <a target="_blank" href="https://twitter.com/jobstream_app">
                                        <img className="icon" style={{margin:5}} src={twt} alt="Co image"/>
                                    </a>
                                    <a target="_blank" href="https://www.linkedin.com/company/jobstream-app/">
                                        <img className="icon" style={{margin:5}} src={In} alt="Co image"/>
                                    </a>
                                </div> 
                                </Col>
                            </Row>
                        </div>
                        
                    </div>
                </Responsive>
                <Responsive  {...Responsive.onlyTablet}>
                    <div className="footer-container">
                        <div className="footer-content-container">
                            <Row type="flex" gutter={32} style={{width:"100%"}}>
                                <Col align="left"  lg={{span:8}} md={{span:8}} sm={{span:12}} xs={{span:24}}>
                                    <h3 style={{color:"#fff"}} >About Online Jobfair</h3>
                                    <ul className="footer-links">
                                        <li>
                                            <a>
                                            asd
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            asd
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            asd
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col align="left" style={{color:"#fff"}} lg={{span:8}} md={{span:10}} sm={{span:12}} xs={{span:24,align:"center"}}>
                                    <h3 style={{color:"#fff"}} >Terms of use and Privacy</h3>
                                    <ul className="footer-links">
                                        <li>
                                            <a>
                                            asd
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            asd
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                            asd
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col align="center"  style={{color:"#fff"}} lg={{span:8}} md={{span:6}}  sm={{span:24}} xs={{span:24, align:"center"}}>
                                    <h3 style={{color:"#fff"}} >Follow us:</h3>
                                <div className="social-media">
                                    <a target="_blank" href="https://www.facebook.com/JobStreamApp.PH/">
                                        <img className="icon" style={{ margin:5,}} src={fb} alt="Co image"/>
                                    </a>
                                    <a target="_blank" href="https://www.instagram.com/jobstreamapp/">
                                        <img className="icon" style={{margin:5}} src={ig} alt="Co image"/>
                                    </a>
                                    <a target="_blank" href="https://twitter.com/jobstream_app">
                                        <img className="icon" style={{margin:5}} src={twt} alt="Co image"/>
                                    </a>
                                    <a target="_blank" href="https://www.linkedin.com/company/jobstream-app/">
                                        <img className="icon" style={{margin:5}} src={In} alt="Co image"/>
                                    </a>
                                </div> 
                                </Col>
                            </Row>
                        </div>
                        
                    </div>
                </Responsive>
                <Responsive  {...Responsive.onlyMobile}>
                    <div style={{backgroundColor:"#377ccc", padding:20}}>
                        <div align="center">
                            <h3 style={{color:"#fff"}} >Follow us:</h3>
                            <div className="social-media">
                                <a target="_blank" href="https://www.facebook.com/JobStreamApp.PH/">
                                    <img  style={{ margin:5,maxWidth:50}} src={fb} alt="Co image"/>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/jobstreamapp/">
                                    <img  style={{margin:5,maxWidth:50}} src={ig} alt="Co image"/>
                                </a>
                                <a target="_blank" href="https://twitter.com/jobstream_app">
                                    <img  style={{margin:5,maxWidth:50}} src={twt} alt="Co image"/>
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/company/jobstream-app/">
                                    <img  style={{margin:5,maxWidth:50}} src={In} alt="Co image"/>
                                </a>
                            </div> 
                        </div>
                       
                    </div>
                    
                </Responsive>
                <CopyRight/>
            </div>
         );
    }
}
 
export default FootContainer;

