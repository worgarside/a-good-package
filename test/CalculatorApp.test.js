import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorApp from '../src/CalculatorApp';
import {expect} from 'chai';
import {mount} from 'enzyme';
import {spy} from 'sinon';

const defaultProps = {
    minValue: 1000,
    maxValue: 12000,
    minTerm: 12,
    maxTerm: 60,
    apr: 15.7,
    loanDefault: 3000,
    termDefault: 36,
    customerAppURL: 'localhost:3000',
};

/**
 * Initialise-type function called before each test
 * @returns {HTMLDivElement} Empty div for adding the Calculator to
 */
function createDiv() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    return div;
}

/**
 * Second initialising function for each test (more in-depth)
 * @returns {HTMLDivElement} Div containing CalculatorApp with default parameters
 */
function renderDefaultCalc() {
    const div = createDiv();
    ReactDOM.render(<CalculatorApp {...defaultProps} />, div);
    return div;
}

before(() => {
    // Clear terminal before all tests for clarity
    // console.log('\x1Bc');
});

/**
 * Tests for checking basic functionality (rendering, maths, etc.)
 * Calls the maths functions with range of values to check reliability (within range of 0.005)
 */
describe('Calculator', () => {
    it('renders without crashing', () => {
        const div = renderDefaultCalc();
        ReactDOM.unmountComponentAtNode(div);
    });

    it('calls componentWillMount', () => {
        spy(CalculatorApp.prototype, 'componentWillMount');
        mount(<CalculatorApp {...defaultProps}/>);
        expect(CalculatorApp.prototype.componentWillMount.calledOnce).to.equal(true);
    });

});