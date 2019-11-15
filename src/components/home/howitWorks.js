import React, { Component } from 'react'
import {Row,Col,Steps, Popover} from 'antd'
const { Step } = Steps;
class HowItWorks extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div align="center" style={{minHeight:"20vh", marginTop:10, marginBottom:100}}>
                <div style={{minHeight:"8vh", backgroundColor:"#888", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <h2 style={{color:"#fff"}}>How it works</h2>
                </div>
                <Row justify="center" gutter={32}  align="top" type="flex" style={{width:"90%", minHeight:"30vh", paddingTop:80}}>
                    <Col span={8}>
                        <div style={{width:560, height:315, border:"1px solid #dcdcdc"}}>
                      
                        </div>
                    </Col>
                    <Col align="center" span={8}>
                        <h2>Employer</h2>
                        <Steps align="center" current={1}>
                            <Step title="Finished" description="This is a description." />
                            <Step title="In Progress" description="This is a description." />
                            <Step title="Waiting" description="This is a description." />
                        </Steps>
                    </Col>
                </Row>
                <Row justify="center" align="top" type="flex" style={{width:"90%", minHeight:"30vh",  paddingTop:80}}>
                    <Col align="center" span={8}>
                        <h2>Jobseeker</h2>
                    </Col>
                    <Col span={8}>
                        <div style={{width:560, height:315, border:"1px solid #dcdcdc"}}>
                        </div>
                    </Col>
                </Row>
            </div>
         );
    }
}
 
export default HowItWorks;