import React, { Component } from 'react'
import {Row,Col} from 'antd'
class HowItWorks extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div align="center" style={{minHeight:"20vh"}}>
                <div style={{minHeight:"8vh", backgroundColor:"#888", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <h2 style={{color:"#fff"}}>How it works</h2>
                </div>
                <Row justify="center" align="top" type="flex" style={{width:"90%", minHeight:"30vh", backgroundColor:"pink", paddingTop:50}}>
                    <Col span={12}>

                    </Col>
                    <Col align="center" span={12}>
                        <h2>Employer</h2>
                    </Col>
                </Row>
                <Row justify="center" align="top" type="flex" style={{width:"90%", minHeight:"30vh", backgroundColor:"pink", paddingTop:50}}>
                    <Col align="center" span={12}>
                        <h2>Jobseeker</h2>
                    </Col>
                    <Col span={12}>

                    </Col>
                </Row>
            </div>
         );
    }
}
 
export default HowItWorks;