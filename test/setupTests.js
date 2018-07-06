/**
 * Script run once before the testing suite is run
 */

process.stdout.write('Initialising Enyzme and JSDOM..');

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

/*
 Code below taken from https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md
 */

const {JSDOM} = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const {window} = jsdom;

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .reduce((result, prop) => ({
            ...result,
            [prop]: Object.getOwnPropertyDescriptor(src, prop),
        }), {});
    Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};
copyProps(window, global);

console.log('!');