import React, { Component } from 'react'
import logo from '../../../assets/image/logo.png'
import {Modal, Icon,Row,Col} from 'antd' 

import { Responsive, Segment } from 'semantic-ui-react'
class Nav extends Component {
    state = {
        visble:false,
      }
    render() { 
        return ( 
            <div style={{marginBottom:20}} >
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
                            <img style={{maxWidth:150}} src={logo} alt={logo} />
                        </div>
                        <ul className="navLinks">
                            <li><a style={{color:`rgba(${this.props.color})`}} href="#">Home</a></li>
                            <li><a style={{color:`rgba(${this.props.color})`}} href="#">About</a></li> 
                            <li><a style={{color:`rgba(${this.props.color})`}} href="#">FAQ</a></li>
                            <li><a style={{color:`rgba(${this.props.color})`}} href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
              </Responsive>
              <Responsive {...Responsive.onlyMobile}>
              <div style={{paddingTop:30}}>
                  <Row justify="center" type="flex" align="middle" style={{width:"100%", height:"100%"}}>
                    <Col xs={{span:3}} sm={{span:5}}  md={{span:5}}>
                      <a onClick={()=>console.log("sasd")} style={{color:`rgba(${this.props.burger})`}}>
                        <Icon style={{fontSize:20, fontWeight:"bold"}} type="menu"/>
                      </a>
                    </Col>
                    <Col xs={{span:19}}  sm={{span:15}} md={{span:14}}>
                      <img style={{maxWidth:200, marginLeft:30, marginRight:30}} src={logo} alt={logo} /> 
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
                      <a onClick={()=>console.log("sasd")} style={{color:`rgba(${this.props.burger})`}}>
                        <Icon style={{fontSize:20, fontWeight:"bold"}} type="menu"/>
                      </a>
                    </Col>
                    <Col xs={{span:19}}  sm={{span:15}} md={{span:14}}>
                      <img style={{maxWidth:250, marginLeft:30, marginRight:30}} src={logo} alt={logo} /> 
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
            </div>
         );
    }
}
 
export default Nav;