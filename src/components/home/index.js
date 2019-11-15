import React, { Component } from 'react';
import Nav from '../common/nav/nav'
import Head from './header/index'
import Logos from './logoList'
import HowItWorks from './howitWorks'
import Footer from '../common/footer/index'
class Home extends Component {
    render() { 
        return ( 
            <div>
                <div style={{
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                    clipPath:"ellipse(95% 100% at 49.5% 0%)",
                    backgroundImage:`
                        linear-gradient(rgba(55,124,204,0.9),
                        rgba(26,60,107,0.4)),
                        url(https://i0.wp.com/arielle.com.au/wp-content/uploads/2017/09/guide-to-finding-meaningful-work.jpg)`
                       
                }}>
                    <Nav/>
                    <Head/>
                </div>
                <Logos/>
                <HowItWorks/>
                <Footer/>
            </div>
         );
    }
}
 
export default Home;