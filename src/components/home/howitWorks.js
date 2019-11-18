import React, { Component } from 'react'
import {Row,Col,Steps, Popover} from 'antd'
import Signup from '../../assets/image/Signup.mp4'
const { Step } = Steps;

class HowItWorks extends Component {
    render() { 
        return ( 
            <div align="center"  style={{minHeight:"20vh", marginTop:"10vh", marginBottom:100}}>
                <div  align="center"  style={{minHeight:"5vh", display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center",maxWidth:"90vw"}}>
                    <h1>How it works</h1>
                    <p style={{color:"#888"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's </p>
                </div>
                <Row justify="center" gutter={32}  align="middle" type="flex" style={{minHeight:"30vh", paddingTop:50, maxWidth:"80vw"}}>
                    <Col align="center" lg={{span:12}} md={{ span:12}} sm={{span:24}}>
                        <div style={{maxWidth:"600px", borderRadius:12}} >
                            <video width="100%" style={{borderRadius:12, }}  controls>
                                <source src={Signup} type="video/mp4"/>
                            </video>
                        </div>
                    </Col>
                    <Col   align="center" style={{marginTop:20, marginBottom:20}}  lg={{span:12}} md={{ span:12}} sm={{span:24}}>
                        <h1>Employer</h1>
                        <h3 style={{color:"#888"}}>Lorem Ipsum is simply dummy text of the  printing<br/> and typesetting industry. Lorem</h3>
                    </Col>
                </Row>
                <div style={{height:"3vh"}}/>
                <Row justify="center" gutter={32}  align="middle" type="flex" style={{minHeight:"30vh", paddingTop:100, maxWidth:"80vw"}}>
                    <Col style={{marginTop:20, marginBottom:20}}   align="center"  lg={{span:12}} md={{ span:12}} sm={{span:24}}>
                        <h1>Jobseeker</h1>
                        <h3 style={{color:"#888"}}>Lorem Ipsum is simply dummy text of the  printing<br/> and typesetting industry. Lorem</h3>
                    </Col>
                    <Col align="center" lg={{span:12}} md={{ span:12}} sm={{span:24}}>
                        <div style={{maxWidth:"600px", borderRadius:12}} >
                            <video width="100%" style={{borderRadius:12}}  controls>
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