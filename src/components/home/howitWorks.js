import React, { Component } from 'react'
import {Row,Col,Steps, Popover} from 'antd'
import Signup from '../../assets/image/Signup.mp4'
const { Step } = Steps;

class HowItWorks extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{minHeight:"20vh", marginTop:30, marginBottom:100}}>
                <div  align="center"  style={{minHeight:"5vh", backgroundColor:"#f26725", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <h2 style={{color:"#fff"}}>How it works</h2>
                </div>
                <Row justify="center" gutter={8}  align="top" type="flex" style={{minHeight:"30vh", paddingTop:100}}>
                    <Col align="center" span={12}>
                        <div style={{maxWidth:"600px", borderRadius:12}} >
                            <video width="100%" style={{borderRadius:12}}  controls>
                                <source src={Signup} type="video/mp4"/>
                            </video>
                        </div>
                    </Col>
                    <Col    span={12}>
                        <h2>Employer</h2>
                    </Col>
                </Row>
                <div style={{height:"25vh"}}/>
                <Row justify="center" align="top" type="flex" style={{minHeight:"30vh"}}>
                    <Col  span={12}>
                        <h2>Jobseeker</h2>
                    </Col>
                    <Col span={12}>
                        <div style={{maxWidth:"600px"}} >
                            <video  style={{borderRadius:12}}  width="100%"  controls>
                                <source src={Signup} type="video/mp4"/>
                            </video>
                        </div>
                    </Col>
                </Row>
            </div>
         );
    }
}
 
export default HowItWorks;