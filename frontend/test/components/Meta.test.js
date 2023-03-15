import React from 'react';
import { shallow } from 'enzyme';
import Meta from '../../src/components/Meta';
import { Helmet } from 'react-helmet';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

//Wojtekmaj module bridges Enzyme with React 17.
Enzyme.configure({ adapter: new Adapter() });

describe('Meta component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Meta />);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should render a Helmet component', () => {
        expect(wrapper.find(Helmet)).toHaveLength(1);
    });

    it('should render the correct default props', () => {
        expect(wrapper.find('title').text()).toEqual('ProShop');
        expect(wrapper.find('meta[name="description"]').prop('content')).toEqual('Find the best products for the cheapest prices');
        expect(wrapper.find('meta[name="keyword"]').prop('content')).toEqual('electronics, buy electronics, cheap electroincs');
    });

    it('should render the correct title prop', () => {
        const title = 'Test Title';
        const wrapper = shallow(<Meta title={title} />);
        expect(wrapper.find('title').text()).toEqual(title);
    });

    it('should render the correct description prop', () => {
        const desc = 'Test Description';
        const wrapper = shallow(<Meta description={desc} />);
        expect(wrapper.find('meta[name="description"]').prop('content')).toEqual(desc);
    });

    it('should render the correct keywords prop', () => {
        const keywords = 'test, keywords';
        const wrapper = shallow(<Meta keywords={keywords} />);
        expect(wrapper.find('meta[name="keyword"]').prop('content')).toEqual(keywords);
    });
});
