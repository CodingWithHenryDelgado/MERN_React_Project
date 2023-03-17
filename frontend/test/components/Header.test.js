import React, { createElement } from 'react';
// Replace this with the appropriate location of your component
// Replace this with the appropriate location of your testing utility
import { render, screen } from '../utils/test-utils';
import Header from './../../src/components/Header';

describe('Header', () => {

    test("Checking that the header component matches snapshot", () => {
        const div = createElement('div')
        const view = render(<Header />, div)
        expect(view.container).toMatchSnapshot()
    })

    test('displays correct number of items in cart', () => {
        const initialState = {
            cart: {
                cartItems: [{}, {}, {}],
            },
        };
        render(<Header />, { initialState });
        const cartInfo = screen.getAllByRole('link');
        expect(cartInfo[1].textContent).toEqual('3');
    });

    it('renders search box', () => {
        render(
            <Header />
        );

        const searchBox = screen.getByRole('textbox');

        expect(searchBox.getAttribute('placeholder')).toEqual("What can we help you find today?")
    });

    it('renders the sign in link', () => {
        const initialState = {
            cart: {
                cartItems: [{}, {}, {}],
            },
            userLogin: {
                _id: 1,
                name: "Henry Delgado",
                email: "hdelgado@centercentre.com"
            }
        };

        render(<Header />, { initialState });

        const dropdown = screen.getAllByRole('link');
        expect(dropdown[2].textContent).toEqual('Sign In');
    });

    // it('renders the username', () => {
    //     const initialState = {
    //         cart: {
    //             cartItems: [{}, {}, {}],
    //         },
    //         userLogin: {
    //             _id: 123456,
    //             user: 123467,
    //             name: "Henry Delgado",
    //             email: "hdelgado@centercentre.com",
    //             isAdmin: false
    //         }
    //     };

    //     render(<Header />, { initialState });

    //     const dropdown = screen.getAllByRole('link');
    //     expect(dropdown[2].textContent).toEqual('Hi, Henry!');
    // });
});  