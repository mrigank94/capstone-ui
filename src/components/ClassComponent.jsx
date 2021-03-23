import axios from 'axios';
import React, { Component } from 'react';

class DemoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            show: false,
            response: ''
        }
    }

    async componentDidMount() {
        const {data} = await axios.get('http://localhost:3001');
        this.setState({response: data});
    }

    render() { 
        return ( 
            <>
                <div>{this.state.count}</div>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
                <button onClick={() => this.setState({count: this.state.count - 1})}>Decrement</button>

                <button onClick={() => this.setState({show: !this.state.show})}>Toggle</button>
                {this.state.show && <span>I am visible now</span>}
                {this.state.response}
            </>
         );
    }
}
 
export default DemoComponent;