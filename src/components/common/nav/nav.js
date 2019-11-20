import React, { Component } from 'react'
import logo from '../../../assets/image/logo.png'
import logo2 from '../../../assets/image/Icon-design-registered.png'
import {Modal, Icon,Row,Col, Drawer} from 'antd' 
import { Responsive } from 'semantic-ui-react'
import { BrowserRouter as  Link } from "react-router-dom";


class Nav extends Component {
    state = {
        visble:false,
        drawerVisible:false
      }
    render() { 
        return ( 
            <div style={{marginBottom:15}} >
               <Responsive  {...Responsive.onlyComputer}>
               <div>
                    <div className="nav-btn" align="right" style={{display:"flex", flexDirection:"row-reverse",paddingTop:6, fontWeight:"bold"}}>
                      <a role="button" onClick={()=>this.setState({visble:true})} style={{color:"#fff",margin:6, backgroundColor:"#f26725", width:100, height:38,display:"flex", justifyContent:'center', alignItems:'center'}}>
                            LOGIN
                        </a>
                        <a href="https://www.jobstreamapp.com/signup" role="button" style={{color:"#fff",margin:6, backgroundColor:"#f26725", width:100, height:38,display:"flex", justifyContent:'center', alignItems:'center'}}>
                           SIGN UP
                        </a>
                    </div >
                    <div className="navContainer" style={{display:"flex", flexDirection:"row", paddingTop:10}}>
                        <div>
                        <a href="https://www.jobstreamapp.com/"> <img style={{maxWidth:150}} src={logo} alt={logo} /></a>
                        </div>
                        <ul className="navLinks">
                            <li> <a  style={{color:`rgba(${this.props.color})`}} href="/">Home</a></li>
                            <li><a  style={{color:`rgba(${this.props.color})`}} href="/about">About</a></li> 
                            {/* <li><Link style={{color:`rgba(${this.props.color})`}} to="/faq">FAQ</Link></li> */}
                            <li><a style={{color:`rgba(${this.props.color})`}} href="https://www.jobstreamapp.com/contactus">Contact</a></li>
                            <li><a style={{color:`rgba(${this.props.color})`}} href="https://www.jobstreamapp.com"><span style={{color:"#f26725", fontWeight:"bold"}}>Job</span>Stream</a></li>
                        </ul>
                    </div>
                </div>
              </Responsive>
              <Responsive {...Responsive.onlyMobile}>
              <div style={{paddingTop:30}}>
                  <Row justify="center" type="flex" align="middle" style={{width:"100%", height:"100%"}}>
                    <Col xs={{span:2}} sm={{span:5}}  md={{span:5}}>
                      <a onClick={()=>this.setState({drawerVisible:true})} style={{color:`rgba(${this.props.burger})`}}>
                        <Icon style={{fontSize:20, fontWeight:"bold"}} type="menu"/>
                      </a>
                    </Col>
                    <Col xs={{span:19}}  sm={{span:15}} md={{span:14}}>
                    <a href="https://www.jobstreamapp.com/"> <img style={{maxWidth:200, marginLeft:30, marginRight:30}} src={logo} alt={logo} /> </a>
                    </Col>
                    <Col xs={{span:2}}  sm={{span:4}} md={{span:5}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG1troYX9mXKSRKLOwbyC5lRFzQ4Vzvu_-HLrhTtaqB004zyvn" style={{maxWidth:20}} />
                    </Col>
                  </Row>
                </div>
              </Responsive>
              <Responsive {...Responsive.onlyTablet}>
                <div style={{paddingTop:30}}>
                  <Row justify="center" type="flex" align="middle" style={{width:"100%", height:"100%"}}>
                    <Col xs={{span:3}} sm={{span:5}}  md={{span:5}}>
                      <a onClick={()=>this.setState({drawerVisible:true})} style={{color:`rgba(${this.props.burger})`}}>
                        <Icon style={{fontSize:20, fontWeight:"bold"}} type="menu"/>
                      </a>
                    </Col>
                    <Col xs={{span:19}}  sm={{span:15}} md={{span:14}}>
                    <a href="https://www.jobstreamapp.com/"> <img style={{maxWidth:250, marginLeft:30, marginRight:30}} src={logo} alt={logo} /> </a>
                    </Col>
                    <Col xs={{span:2}}  sm={{span:4}} md={{span:5}}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG1troYX9mXKSRKLOwbyC5lRFzQ4Vzvu_-HLrhTtaqB004zyvn" style={{maxWidth:20}} />
                    </Col>
                  </Row>
                </div>
              </Responsive>
                
                <Modal
                  visible={this.state.visble}
                  onCancel={()=>this.setState({visble:false})}
                  footer={null}
                  title={<small>Log in</small>}
                  >
                </Modal>


                <Drawer
                    title={<a href="https://www.jobstreamapp.com/"> <img style={{maxWidth:200,}} src={logo} alt={logo} /> </a>}
                    placement="left"
                    closable={false}
                    onClose={()=>this.setState({drawerVisible:false})}
                    visible={this.state.drawerVisible}
                  >
                     <li align="center" style={{listStyle:"none",height:"7vh" }}>
                        <a  href="https://www.jobstreamapp.com/"
                            style={{
                              display:"flex", 
                              flexDirection:"row",
                              alignItems:"center",
                              fontSize:20}}>
                             <img style={{maxWidth:20}} src={logo2} alt={logo2} />
                              <p style={{color:"rgba(55, 124, 204)", marginLeft:20, fontWeight:"bold"}}>
                              <span style={{color:"#f26725"}}>Job</span>Stream
                              </p>
                        </a>
                      </li>
                      <li style={{listStyle:"none",height:"7vh" }}>
                        <a  href="#"
                            style={{
                              display:"flex", 
                              flexDirection:"row",
                              alignItems:"center",
                              fontSize:20}}>
                              <Icon type="user"/>
                              <p style={{color:"#000", marginLeft:20}}>
                                Login
                              </p>
                        </a>
                      </li>
                      <li style={{listStyle:"none",height:"7vh" }}>
                        <a  href="#"
                            style={{
                              display:"flex", 
                              flexDirection:"row",
                              alignItems:"center",
                              fontSize:20}}>
                              <Icon type="user-add"  />
                              <p style={{color:"#000", marginLeft:20}}>
                                Sign Up
                              </p>
                        </a>
                      </li>
                      <li style={{listStyle:"none",height:"7vh" }}>
                        <a  href="/"
                            style={{
                              display:"flex", 
                              flexDirection:"row",
                              alignItems:"center",
                              fontSize:20}}>
                              <Icon type="home" theme="filled" />
                              <p style={{color:"#000", marginLeft:20}}>
                                Home
                              </p>
                        </a>
                      </li>
                      <li style={{listStyle:"none",height:"7vh" }}>
                        <a  href="/about"
                            style={{
                              display:"flex", 
                              flexDirection:"row",
                              alignItems:"center",
                              fontSize:20}}>
                              <Icon type="info-circle" theme="filled" />
                              <p style={{color:"#000", marginLeft:20}}>
                                About
                              </p>
                        </a>
                      </li>
                      <li style={{listStyle:"none",height:"7vh" }}>
                        <a  href="/privacy-policy"
                            style={{
                              display:"flex", 
                              flexDirection:"row",
                              alignItems:"center",
                              fontSize:20}}>
                              <Icon type="safety-certificate" theme="filled" />
                              <p style={{color:"#000", marginLeft:20}}>
                                Privacy Policy
                              </p>
                        </a>
                      </li>
                      <li style={{listStyle:"none",height:"7vh" }}>
                        <a  href="https://www.jobstreamapp.com/contactus"
                            style={{
                              display:"flex", 
                              flexDirection:"row",
                              alignItems:"center",
                              fontSize:20}}>
                              <Icon type="phone" theme="filled" />
                              <p style={{color:"#000", marginLeft:20}}>
                                Contact Us
                              </p>
                        </a>
                      </li>
                      {/* <li style={{listStyle:"none",height:"7vh" }}>
                        <a  href="/faq"
                            style={{
                              display:"flex", 
                              flexDirection:"row",
                              alignItems:"center",
                              fontSize:20}}>
                             <Icon type="bulb" theme="filled" />
                              <p style={{color:"#000", marginLeft:20}}>
                                FAQ
                              </p>
                        </a>
                      </li> */}
                      <li style={{listStyle:"none",height:"7vh" }}>
                        <a  href="/safety-tips"
                            style={{
                              display:"flex", 
                              flexDirection:"row",
                              alignItems:"center",
                              fontSize:20}}>
                              <Icon type="file-protect" />
                              <p style={{color:"#000", marginLeft:20}}>
                                Safety Tips
                              </p>
                        </a>
                      </li>
                      <li style={{listStyle:"none",height:"7vh" }}>
                        <a  href="/Terms&agreement"
                            style={{
                              display:"flex", 
                              flexDirection:"row",
                              alignItems:"center",
                              fontSize:20}}>
                              <Icon type="audit" />
                              <p style={{color:"#000", marginLeft:20}}>
                                Terms And Agreement
                              </p>
                        </a>
                      </li>
                     
                     
              </Drawer>
              {/* safety-tips */}
              {/* Terms&agreement */}
            </div>
         );
    }

}

const links= [
  {
    name:"Login",
    icon:"home",
    link:"/"
  },
  {
    name:"Sign Up",
    icon:"home",
    link:"/"
  },
  {
    name:"Home",
    icon:"home",
    link:"/"
  },
  {
    name:"About",
    icon:"home",
    link:"/"
  },
  {
    name:"Terms and Agreement",
    icon:"home",
    link:"/"
  },
  {
    name:"Privacy policy",
    icon:"home",
    link:"/"
  }
]
 
export default Nav;