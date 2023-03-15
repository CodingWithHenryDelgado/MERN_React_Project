import React from 'react';
import { shallow } from 'enzyme';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Provider } from 'react-redux';
import configureStore from '@reduxjs/toolkit';
import Header from '../../src/components/Header';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

//Wojtekmaj module bridges Enzyme with React 17.
Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore([]);
const store = mockStore({});

describe('Header component', () => {
    const wrapper = shallow(
        <Provider store={store}>
            <Header />
        </Provider>
    );

    it('should render a Navbar component', () => {
        expect(wrapper.find(Navbar)).toHaveLength(1);
    });

    it('should render a Navbar.Brand component inside a LinkContainer component', () => {
        expect(wrapper.find(LinkContainer)).toHaveLength(1);
        expect(wrapper.find(LinkContainer).find(Navbar.Brand)).toHaveLength(1);
    });

    it('should render a Nav component', () => {
        expect(wrapper.find(Navbar.Collapse)).toHaveLength(1);
        expect(wrapper.find(Navbar.Collapse).find(Nav)).toHaveLength(1);
    });

    it('should render a NavDropdown component for logged in users', () => {
        wrapper.setProps({ userInfo: { name: 'John Doe', isAdmin: false } });
        expect(wrapper.find(NavDropdown)).toHaveLength(1);
    });

    it('should not render a NavDropdown component for anonymous users', () => {
        wrapper.setProps({ userInfo: null });
        expect(wrapper.find(NavDropdown)).toHaveLength(0);
    });
});
