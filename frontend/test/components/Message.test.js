import React from 'react';
import { shallow } from 'enzyme';
import Message from '../../src/components/Message';
import { Alert } from 'react-bootstrap';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

//Wojtekmaj module bridges Enzyme with React 17.
Enzyme.configure({ adapter: new Adapter() });

describe('Message component', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<Message>Test message</Message>);
        expect(wrapper.exists()).toBe(true);
    });

    it('should render an Alert component with the correct props', () => {
        const wrapper = shallow(<Message variant="success">Test message</Message>);
        expect(wrapper.find(Alert)).toHaveLength(1);
        expect(wrapper.find(Alert).prop('variant')).toEqual('success');
        expect(wrapper.find(Alert).text()).toEqual('Test message');
    });

    it('should render an Alert component with default props if no variant is provided', () => {
        const wrapper = shallow(<Message>Test message</Message>);
        expect(wrapper.find(Alert)).toHaveLength(1);
        expect(wrapper.find(Alert).prop('variant')).toEqual('info');
        expect(wrapper.find(Alert).text()).toEqual('Test message');
    });
});
