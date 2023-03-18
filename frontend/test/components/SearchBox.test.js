import React from 'react';
import { render, screen } from '../utils/test-utils';
import SearchBox from '../../src/components/SearchBox'

describe('SearchBox', () => {
    test('renders the search box without user info', () => {
        render(
            <SearchBox />
        );

        const searchBox = screen.getByRole('textbox');

        expect(searchBox.getAttribute('placeholder')).toEqual("What can we help you find today?")
    });

    test('renders the search box with user info', () => {
        const initialState = {
            userLogin: {
                userInfo: {
                    _id: 1,
                    name: "Henry Delgado",
                    email: "hdelgado@centercentre.com",
                    isAdmin: false
                }
            }
        };

        render(<SearchBox />, { initialState });

        const searchBox = screen.getByRole('textbox');

        expect(searchBox.getAttribute('placeholder')).toEqual("Hi, Henry! What can we help you find today?")
    });
});
