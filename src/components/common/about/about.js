import React, { Component } from 'react'
import Nav from '../nav/nav'
import { Layout,Icon } from 'antd';
import FootContainer from '../footer/index'

const { Header } = Layout;

class About extends Component {
    state = {
        color: '0,0,0,0',
        textcolor: '55, 124, 204',
        burger:'136,136,136'
      }
    
    render() { 
        return ( 
            <Layout >
                 <Header
                        className="header"
                        style={{
                            backgroundColor:`rgba(255,255,255,1)`,
                            position:"fixed",
                            with:"100%",
                            zIndex:1000,
                            top:0,
                            height:"15vh",
                            borderBottom:"1px solid #dcdcdc",
                            right:0, 
                            left:0}}>
                        <Nav color={this.state.textcolor} burger={this.state.burger}/>
                </Header>
                <div align="center">
                    <div className="privacy-policy-container" align="left" style={{borderTop:"1px solid #dcdcdc", minHeight:"120vh", paddingTop:"20vh" }}>
                    <h1><Icon type="exclamation-circle" theme="twoTone" /> About</h1>


                      <br/><br/>
                    </div>
                </div>
                <FootContainer/>
            </Layout>
         );
    }
}
 
export default About;