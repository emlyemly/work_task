import React from 'react';

class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.increment()}>Increment</button>
                <p>Count: {this.state.count}</p>
            </div>
        );
    }
}

export default CounterClass;
