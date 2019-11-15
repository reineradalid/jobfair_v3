import React, { Component } from 'react'
import logo from '../../../assets/image/logo.png'
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{height:"15vh" }}>
                <div>
                    <div align="right" style={{display:"flex", flexDirection:"row-reverse",paddingTop:6,paddingRight:53, fontWeight:"bold"}}>
                        <a href="https://www.jobstreamapp.com/signup" role="button" style={{color:"#fff",margin:6, backgroundColor:"#f26725", width:100, height:38,display:"flex", justifyContent:'center', alignItems:'center'}}>
                           SIGN UP
                        </a>
                        <a role="button" style={{color:"#fff",margin:6, backgroundColor:"#f26725", width:100, height:38,display:"flex", justifyContent:'center', alignItems:'center'}}>
                            LOGIN
                        </a>
                    </div >
                    <div className="navContainer" style={{display:"flex", flexDirection:"row", paddingTop:18}}>
                        <div>
                            <img style={{maxWidth:150}} src={logo} alt={logo} />
                        </div>
                        <ul className="navLinks">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li> 
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                      
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Nav;