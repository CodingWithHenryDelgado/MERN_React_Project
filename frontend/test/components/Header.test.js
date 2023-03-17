import React, { createElement } from 'react';
// Replace this with the appropriate location of your component
// Replace this with the appropriate location of your testing utility
import { render, screen, cleanup } from '../utils/test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'; // import MemoryRouter from react-router-dom
import Header from './../../src/components/Header';

test("Checking that the header component matches snapshot", () => {
    const div = createElement('div')
    const view = render(<Provider><MemoryRouter><Header /></MemoryRouter></Provider>, div)
    expect(view.container).toMatchSnapshot()
})