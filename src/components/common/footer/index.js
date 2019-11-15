import React, { Component } from 'react';
import {Row, Col} from 'antd'
import fb from '../../../assets/image/Facebook.png'
import ig from '../../../assets/image/InstaLogo.png'
import In from '../../../assets/image/LinkedIn.png'
import twt from '../../../assets/image/twitter.png'
import CopyRight from './components/copyright'
class FootContainer extends Component {
   
    render() { 
        return ( 
            <div>
            <div className="footer-container">
                <div className="footer-content-container">
                    <Row type="flex" gutter={8} style={{width:"100%"}}>
                        <Col align="left"  span={8}>
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
                        <Col align="left" style={{color:"#fff"}} span={8}>
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
                        <Col align="left"  style={{color:"#fff"}} span={8}>
                            <h3 style={{color:"#fff"}} >Follow us</h3>
                         <div className="social-media">
                            <a target="_blank" href="https://www.facebook.com/JobStreamApp.PH/">
                                <img style={{maxWidth:"35px", margin:5,}} src={fb} alt="Co image"/>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/jobstreamapp/">
                                <img style={{maxWidth:"35px", margin:5}} src={ig} alt="Co image"/>
                            </a>
                            <a target="_blank" href="https://twitter.com/jobstream_app">
                                <img style={{maxWidth:"35px", margin:5}} src={twt} alt="Co image"/>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/company/jobstream-app/">
                                <img style={{maxWidth:"35px", margin:5}} src={In} alt="Co image"/>
                            </a>
                           </div> 
                        </Col>
                    </Row>
                </div>
                
            </div>
            <CopyRight/>
            </div>
         );
    }
}
 
export default FootContainer;

