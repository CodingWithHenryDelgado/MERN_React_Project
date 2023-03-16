import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Product from '../../src/components/Product';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

//Wojtekmaj module bridges Enzyme with React 17.
Enzyme.configure({ adapter: new Adapter() });

describe('Product component', () => {
    const product = {
        _id: '1',
        name: 'Test Product',
        image: 'testimage.jpg',
    };

    it('should render the component correctly', () => {
        const wrapper = shallow(<Product product={product} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should contain a Link with the correct URL', () => {
        const wrapper = shallow(<Product product={product} />);
        const link = wrapper.find(Link).first();
        expect(link.prop('to')).toEqual(`/product/${product._id}`);
    });

    it('should contain a Card with the correct image source and title', () => {
        const wrapper = shallow(<Product product={product} />);
        const cardImage = wrapper.find(Card.Img);
        const cardTitle = wrapper.find(Card.Title);
        expect(cardImage.prop('src')).toEqual(product.image);
        expect(cardTitle.text()).toEqual(product.name);
    });
});
