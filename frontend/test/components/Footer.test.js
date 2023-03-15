import React from 'react';
import { shallow } from 'enzyme';
import Footer from './../../src/components/Footer';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it('should render a <footer> element', () => {
        expect(wrapper.find('footer')).toHaveLength(1);
    });

    it('should render a <Container> element', () => {
        expect(wrapper.find('Container')).toHaveLength(1);
    });

    it('should render a <Row> element', () => {
        expect(wrapper.find('Row')).toHaveLength(1);
    });

    it('should render a <Col> element', () => {
        expect(wrapper.find('Col')).toHaveLength(1);
    });

    it('should display the correct copyright text', () => {
        expect(wrapper.find('Col').text()).toEqual('Copyright © Proshop');
    });
});
