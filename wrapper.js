/**
 * Entry-point for webpack compilation, provides a single function for embedding the CalculatorApp into
 * any non-ReactJS page
 */

import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorApp from './src/CalculatorApp';

/**
 * Function to be called where/when the CalculatorApp is to be embedded into a webpage
 * @param targetDiv - the div for the calculator to be placed into on the page
 */
const showAGoodApp = (
    targetDiv
) => {
    try {
        ReactDOM.render(
            <CalculatorApp
            />,
            document.getElementById(targetDiv));

    } catch (e) {
        // Ensure graceful erroring when no target div is supplied
        throw new Error('No DOM element specified for calculator. Parameter is required.');
    }
};

module.exports = showAGoodApp;