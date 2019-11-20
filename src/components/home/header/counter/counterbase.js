import React, { Component } from 'react';
import { Row, Col } from 'antd'
class Counter extends Component {
    render() { 
        return ( 
            <div style={{color:"#f26725"}} className="CounterContainer">
                <Row type="flex" justify="center" align="top" style={{ width:"100%"}}  gutter={8}>
                    <Col id="next-cont" align="center" xl={{span:5, pull:1}}   style={{margin:15}} >
                        <div style={{width:"100%",justifyContent:'center', alignItems:"center"}}>
                           <h1 style={{color:"#fff", fontSize:40}}>Next Event:</h1>
                           <h2 style={{color:"#fff", fontSize:35}}>Sep 27, 2019</h2>
                        </div>
                    </Col>
                    <Col xl={{span:12, pull:1}} lg={{span:18}} md={{span:24}} sm={{span:24}} xs={{span:24}}  className="try" style={{margin:15}} >
                            <Col span={6}>
                                <div align="center" className="gutter-box" style={{justifyContent:'center', alignItems:"center"}}>
                                    <h1 style={{color:"#fff", fontSize:40}}>{this.props.cdata.days}</h1>
                                    <h2 style={{color:"#fff", fontSize:35}}>day/s</h2>
                                </div>
                            </Col>
                            <Col  span={6}>
                                <div align="center" className="gutter-box" style={{justifyContent:'center', alignItems:"center"}}>
                                    <h1 style={{color:"#fff", fontSize:40}}>{this.props.cdata.hours}</h1>
                                    <h2 style={{color:"#fff", fontSize:35}}>hr/s</h2>
                                </div>
                            </Col>
                            <Col  span={6}>
                                <div align="center" className="gutter-box" style={{justifyContent:'center', alignItems:"center"}}>
                                     <h1 style={{color:"#fff", fontSize:40}}>{this.props.cdata.minutes}</h1>
                                    <h2 style={{color:"#fff", fontSize:35}}>min/s</h2>
                                </div>
                            </Col>
                            <Col  span={6}>
                                <div align="center" className="gutter-box" style={{justifyContent:'center', alignItems:"center"}}>
                                     <h1 style={{color:"#fff", fontSize:40}}>{this.props.cdata.seconds}</h1>
                                    <h2 style={{color:"#fff", fontSize:35}}>sec/s</h2>
                                </div>
                            </Col>
                    </Col>
                </Row>
            </div>
         );
    }
}
 
export default Counter;