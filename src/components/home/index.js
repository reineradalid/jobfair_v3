import React, { Component } from 'react';
import Nav from '../common/nav/nav'
import Head from './header/index'
import Logos from './logoList'
import HowItWorks from './howitWorks'
import Footer from '../common/footer/index'
import { Layout } from 'antd';

const { Header } = Layout;
class Home extends Component {
    state = {
        color: '0,0,0,0',
        textcolor: '255,255,255',
        burger:'255,255,255'
      }
    listenScrollEvent = e => {
        if (window.scrollY > 150) {
          this.setState({color: '255,255,255,0.8', textcolor:'55, 124, 204',burger:"136,136,136"})
        } else {
          this.setState({color: '0,0,0,0',textcolor: '255,255,255',burger:"255,255,255"})
        }
      }
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }
    render() { 
        return ( 
            <Layout>
                <div
                 style={{
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    // clipPath:"ellipse(95% 100% at 49.5% 0%)",
                    backgroundImage:`
                        linear-gradient(rgba(55,124,204,0.8),
                        rgba(26,60,107,0.4)),
                        url(https://i0.wp.com/arielle.com.au/wp-content/uploads/2017/09/guide-to-finding-meaningful-work.jpg)`
                    }}>
                    <Header
                        className="header"
                        style={{
                            backgroundColor:`rgba(${this.state.color})`,
                            position:"fixed",
                            with:"100%",
                            zIndex:1000,
                            top:0,
                            height:"15vh",
                            right:0, 
                            left:0}}>
                        <Nav color={this.state.textcolor} burger={this.state.burger}/>
                    </Header>
                    <Head/>
                </div>
                <Logos/>
                <HowItWorks/>
                <Footer/>
            </Layout>
         );
    }
}
 
export default Home;