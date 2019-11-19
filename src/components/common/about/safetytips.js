import React, { Component } from 'react'
import Nav from '../nav/nav'
import { Layout } from 'antd';
import { Responsive } from 'semantic-ui-react';
import FootContainer from '../footer/index'

const { Header, Sider, Content } = Layout;

class SafetyTips extends Component {
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
                    <div className="safetips-container"  align="left" style={{borderTop:"1px solid #dcdcdc", minHeight:"120vh", paddingTop:"20vh" }}>
                        <h1>Safety Tips</h1>
                       <p>The safety of our users is very important to us. There are steps that everyone can follow to ensure their safety while using JobStream. Please take a few minutes to read these tips.</p>
                        <strong><p>Keep your financial information private </p></strong>
                        <br/>
                        <p>Ignore any request to send money – even if the person claims to be in an emergency – and report it to us immediately. Never give out financial information such as you social security number, credit card number or bank information.</p>
                        <br/>
                        <strong><p>Keep your personal information </p></strong>
                        <br/>
                        <p>You are in control of your JobStream experience at all times. JobStream will never send you an email asking for your username and password information. Any such communication should be reported immediately.</p>
                        <br/>
                        <strong><p>Spam/Scammers There are red flags to watch out for that may indicate you're dealing with a scammer. Be aware of anyone who: </p></strong>
                        <br/>
                        <ul>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                Sends you messages containing links to third-party websites;
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                Quickly asks to talk or chat on or in a forum outside of JobStream;
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                Asks you for money;
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                Vanishes mysteriously then reappears under a different name; and
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                Asks for your address under the guise of sending documents or gifts.
                            </li>
                            <br/>
                        </ul>
                        <br/>
                        <strong><p>Report suspicious users. Please report anyone who violates our Terms of Use. Examples of Terms of Use violations include:  </p></strong>
                        <br/>
                        <ul>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                Asking you for money or donations;
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                Anyone that looks like they could be under the age of 18;
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                Users sending harassing or offensive messages
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                Users behaving inappropriately after meeting in person;
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                Fraudulent profiles; and
                            </li>
                            <br/>
                            <li style={{margin:"0cm",marginBottom:".0001pt",textAlign:"justify", fontSize:"16px"}}>
                                Spam or solicitation, such as attempts to sell products or services.
                            </li>
                        </ul>
                        <br/>
                        <strong><p>Meeting In Person</p></strong>
                        <br/>
                        <p>Meeting in person is an exciting first step to making a valuable business or volunteer relationship, but always take precautions and follow these guidelines to help you stay safe:</p>
                        <br/>
                        <strong><p>Get to know the other user before meeting them offline </p></strong>
                        <br/>
                        <p>Get to know someone through chat before meeting in person and ensure that the business or organization with whom you are chatting is a legitimate business or organization. We don't 
                            conduct criminal background checks on our users, so it’s up to you to do your own research and remain cautious.
                        </p>
                        <br/>
                        <strong><p>Always meet in public </p></strong>
                        <br/>
                        <p>
                        Meet for the first time in a populated, public place; never in a private or remote location, and never at your home or apartment.
                        <br/>
                        <br/>
                            Following these guidelines will help keep JobStream safe and enjoyable.


                        </p>
                        <br/>
                        <br/>
                    </div>
                </div>
                <FootContainer/>
            </Layout>
         );
    }
}
 
export default SafetyTips;