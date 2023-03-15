import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import configureMockStore from 'redux-mock-store';
import Header from '../../src/components/Header';
import logo from '../../src/images/proshop_logo.png';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

//Wojtekmaj module bridges Enzyme with React 17.
Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();

describe('Header component', () => {
    let wrapper, store;
    const userInfo = { _id: 1, name: 'John Doe', email: "johndoe@email.com" };
    const cartItems = [{ product: 1, name: 'Product 1', price: 100, qty: 2 }];

    beforeEach(() => {
        store = mockStore({
            userLogin: { userInfo },
            cart: { cartItems }
        });
        wrapper = shallow(
            <Provider store={store}>
                <Header />
            </Provider>);
    });

    console.log(shallow(
        <Provider store={store}>
            <Header />
        </Provider>
    ))


    afterEach(() => {
        wrapper.unmount();
    });

    it('should render the component properly', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should render the logo', () => {
        const logoImg = wrapper.find('header').find(LinkContainer).at(0).find('img');
        expect(logoImg.prop('src')).toEqual(logo);
        expect(logoImg.prop('alt')).toEqual('Proshop Logo');
    });

    it('should render the cart icon with the correct number of items', () => {
        const cartLink = wrapper.find(LinkContainer).at(0);
        expect(cartLink.find('.fa-shopping-cart').exists()).toBe(true);
        const cartItemsCount = cartLink.find('#cart-items');
        expect(cartItemsCount.hasClass('d-none')).toBe(false);
        expect(cartItemsCount.text()).toEqual(cartItems.length.toString());
    });

    it('should render the username dropdown when user is logged in', () => {
        const userDropdown = wrapper.find(NavDropdown);
        expect(userDropdown.exists()).toBe(true);
        expect(userDropdown.prop('title')).toEqual(`Hi, ${userInfo.name.split(' ')[0]}`);
    });

    it('should not render the username dropdown when user is not logged in', () => {
        store = mockStore({
            userLogin: {}
        });
        wrapper = shallow(
            <Provider store={store}>
                <Header />
            </Provider>
        );
        expect(wrapper.find(NavDropdown).exists()).toBe(false);
    });
});
