import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Rating from '../../src/components/Rating';

Enzyme.configure({ adapter: new Adapter() });

describe('Rating component', () => {
    it('should render five stars when given a rating of 5', () => {
        const wrapper = shallow(<Rating value={5} />);
        expect(wrapper.find('i.fas.fa-star')).toHaveLength(5);
    });

    it('should render four full stars and one half star when given a rating of 4.5', () => {
        const wrapper = shallow(<Rating value={4.5} />);
        expect(wrapper.find('i.fas.fa-star')).toHaveLength(4);
        expect(wrapper.find('i.fas.fa-star-half-alt')).toHaveLength(1);
    });

    it('should render four full stars and one empty star when given a rating of 4.2', () => {
        const wrapper = shallow(<Rating value={4.2} />);
        expect(wrapper.find('i.fas.fa-star')).toHaveLength(4);
        expect(wrapper.find('i.far.fa-star')).toHaveLength(1);
    });

    it('should render the correct text when given a text prop', () => {
        const wrapper = shallow(<Rating value={3} text="Great" />);
        expect(wrapper.find('span').last().text()).toEqual('Great');
    });

    it('should have a default color of #f8e825', () => {
        const wrapper = shallow(<Rating value={3} />);
        expect(wrapper.find('i').first().prop('style').color).toEqual('#f8e825');
    });

    it('should have the correct color when given a color prop', () => {
        const wrapper = shallow(<Rating value={3} color="#123456" />);
        expect(wrapper.find('i').first().prop('style').color).toEqual('#123456');
    });

    it('should render one full star and four empty star when given a rating of 1.2', () => {
        const wrapper = shallow(<Rating value={1.2} />);
        expect(wrapper.find('i.fas.fa-star')).toHaveLength(1);
        expect(wrapper.find('i.far.fa-star')).toHaveLength(4);
    });

    it('should render half a star and four empty star when given a rating of 0.5', () => {
        const wrapper = shallow(<Rating value={0.5} />);
        expect(wrapper.find('i.fas.fa-star-half-alt')).toHaveLength(1);
        expect(wrapper.find('i.far.fa-star')).toHaveLength(4);
    });
});
