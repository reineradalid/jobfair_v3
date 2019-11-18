import React, { Component } from 'react'
import logo from '../../../assets/image/logo.png'
import {Modal} from 'antd' 
class Nav extends Component {
    state = {
        color: '255,255,255',
        visble:false
      }
    listenScrollEvent = e => {
        if (window.scrollY > 150) {
          this.setState({color:'55, 124, 204' })
          
        } else {
          this.setState({color: '255,255,255'})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }
    render() { 
        return ( 
            <div style={{marginBottom:20}} >
                <div>
                    <div align="right" style={{display:"flex", flexDirection:"row-reverse",paddingTop:6,paddingRight:53, fontWeight:"bold"}}>
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
                            <li><a style={{color:`rgba(${this.state.color})`}} href="#">Home</a></li>
                            <li><a style={{color:`rgba(${this.state.color})`}} href="#">About</a></li> 
                            <li><a style={{color:`rgba(${this.state.color})`}} href="#">FAQ</a></li>
                            <li><a style={{color:`rgba(${this.state.color})`}} href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
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