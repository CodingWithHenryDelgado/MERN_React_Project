import React from 'react';
import { shallow } from 'enzyme';
import { LinkContainer } from 'react-router-bootstrap';
import Paginate from '../../src/components/Paginate';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

//Wojtekmaj module bridges Enzyme with React 17.
Enzyme.configure({ adapter: new Adapter() });

describe('Paginate component', () => {
    it('rendes pagination links when there is more than one page', () => {
        const wrapper = shallow(
            <Paginate pages={3} page={1} />
        );

        expect(
            wrapper
                .find(LinkContainer)
                .at(0)
                .prop('to')
        ).toEqual('/page/1');
        expect(
            wrapper
                .find(LinkContainer)
                .at(1)
                .prop('to')
        ).toEqual('/page/2');
        expect(
            wrapper
                .find(LinkContainer)
                .at(2)
                .prop('to')
        ).toEqual('/page/3');
    });

    it('does not render pagination links when there is one page', () => {
        const wrapper = shallow(
            <Paginate pages={1} page={1} />
        );

        expect(
            wrapper
                .find(LinkContainer)
                .at(0)
        ).toEqual({});
    });

    // it('marks the current page as active', () => {
    //     const wrapper = shallow(<Paginate pages={3} page={2} />);

    //     expect(
    //         wrapper
    //             .find(LinkContainer)
    //             .at(1)
    //             .prop('to')
    //     ).toEqual('/page/2');
    // });
});
