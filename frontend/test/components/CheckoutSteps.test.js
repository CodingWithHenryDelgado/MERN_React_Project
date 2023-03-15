import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CheckoutSteps from '../../src/components/CheckoutSteps';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('CheckoutSteps', () => {
    it('should render correctly when all steps are active', () => {
        const wrapper = shallow(
            <CheckoutSteps step1={true} step2={true} step3={true} step4={true} />
        );

        expect(wrapper.find(Nav.Item)).toHaveLength(4);
        expect(
            wrapper
                .find(LinkContainer)
                .at(0)
                .prop('to')
        ).toEqual('/login');
        expect(
            wrapper
                .find(LinkContainer)
                .at(1)
                .prop('to')
        ).toEqual('/shipping');
        expect(
            wrapper
                .find(LinkContainer)
                .at(2)
                .prop('to')
        ).toEqual('/payment');
        expect(
            wrapper
                .find(LinkContainer)
                .at(3)
                .prop('to')
        ).toEqual('/placeorder');
    });

    it('should render correctly when step 1 is active', () => {
        const wrapper = shallow(<CheckoutSteps step1 />);

        expect(wrapper.find(Nav.Item)).toHaveLength(4);
        expect(
            wrapper
                .find(LinkContainer)
                .at(0)
                .prop('to')
        ).toEqual('/login');
        expect(
            wrapper
                .find(Nav.Link)
                .filterWhere((link) => link.prop('disabled'))
        ).toHaveLength(3);
    });

    it('should render correctly when step 2 is active', () => {
        const wrapper = shallow(<CheckoutSteps step1 step2 />);

        expect(wrapper.find(Nav.Item)).toHaveLength(4);
        expect(
            wrapper
                .find(LinkContainer)
                .at(0)
                .prop('to')
        ).toEqual('/login');
        expect(
            wrapper
                .find(LinkContainer)
                .at(1)
                .prop('to')
        ).toEqual('/shipping');
        expect(
            wrapper
                .find(Nav.Link)
                .filterWhere((link) => link.prop('disabled'))
        ).toHaveLength(2);
    });

    it('should render correctly when step 3 is active', () => {
        const wrapper = shallow(
            <CheckoutSteps step1 step2 step3 />
        );

        expect(wrapper.find(Nav.Item)).toHaveLength(4);
        expect(
            wrapper
                .find(LinkContainer)
                .at(0)
                .prop('to')
        ).toEqual('/login');
        expect(
            wrapper
                .find(LinkContainer)
                .at(1)
                .prop('to')
        ).toEqual('/shipping');
        expect(
            wrapper
                .find(LinkContainer)
                .at(2)
                .prop('to')
        ).toEqual('/payment');
        expect(
            wrapper
                .find(Nav.Link)
                .filterWhere((link) => link.prop('disabled'))
        ).toHaveLength(1);
    });

    it('should render correctly when step 4 is active', () => {
        const wrapper = shallow(
            <CheckoutSteps step1 step2 step3 step4 />
        );

        expect(wrapper.find(Nav.Item)).toHaveLength(4);
        expect(
            wrapper
                .find(LinkContainer)
                .at(0)
                .prop('to')
        ).toEqual('/login');
        expect(
            wrapper
                .find(LinkContainer)
                .at(1)
                .prop('to')
        ).toEqual('/shipping');
        expect(
            wrapper
                .find(LinkContainer)
                .at(2)
                .prop('to')
        ).toEqual('/payment');
        expect(
            wrapper
                .find(LinkContainer)
                .at(3)
                .prop('to')
        ).toEqual('/placeorder');
    });
});