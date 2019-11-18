import React, { Component } from 'react';
import CountdownTimer from 'react-countdown-now';
import CounterBase from './counterbase'

class Counter extends Component {
    render() { 
        const start_date = Date.parse("December 25, 2019");
        return (
                <CountdownTimer
                    date={start_date}
                    intervalDelay={0}
                    precision={3}
                    renderer={props => <CounterBase cdata={props}/>}
                />
        );
    }
}
 
export default Counter