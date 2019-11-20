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
                <div style={{backgroundColor:"#377ccc", padding:20}}>
                        <div align="center">
                            <span style={{color:"#fff"}} className="footer-links">
                                <a href="/about">About </a>
                                 | 
                                <a href="/Terms&agreement"> Terms and agreement </a> 
                                 | 
                                <a href="/privacy-policy"> Privacy policy </a>
                                 |  
                                <a href="/safety-tips"> Safety tips </a>
                            </span>
                            <h3 style={{color:"#fff"}} >Follow us:</h3>
                            <div className="social-media">
                                <a target="_blank" href="https://www.facebook.com/JobStreamApp.PH/">
                                    <img  style={{ margin:5,maxWidth:40}} src={fb} alt="Co image"/>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/jobstreamapp/">
                                    <img  style={{margin:5,maxWidth:40}} src={ig} alt="Co image"/>
                                </a>
                                <a target="_blank" href="https://twitter.com/jobstream_app">
                                    <img  style={{margin:5,maxWidth:40}} src={twt} alt="Co image"/>
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/company/jobstream-app/">
                                    <img  style={{margin:5,maxWidth:40}} src={In} alt="Co image"/>
                                </a>
                            </div> 
                        </div>
                       
                    </div>
                </Responsive>


                <Responsive  {...Responsive.onlyTablet}>
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

