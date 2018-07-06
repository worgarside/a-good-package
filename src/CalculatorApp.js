import React, {Component} from 'react';
import GoodApp from './components/calculator';

class CalculatorApp extends Component {
    constructor() {
        super();
        this.state = {
            textThing: String,
        }
    }

    /**
     * Called before the component is added to the page
     * Initialises all state variables according to the properties set on declaration
     */
    componentWillMount() {
        this.setState({
            textThing: 'placeholding as a text thing',
        });
    }

    render() {
        return (
            <div>
                <GoodApp
                    textThing={this.state.textThing}
                />
            </div>
        );
    }
}

export default CalculatorApp;