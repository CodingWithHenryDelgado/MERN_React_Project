import React from 'react';
import { shallow } from 'enzyme';
import { Spinner } from 'react-bootstrap';
import Loader from '../../src/components/Loader';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

//Wojtekmaj module bridges Enzyme with React 17.
Enzyme.configure({ adapter: new Adapter() });

describe('Loader component', () => {
    it('should render without errors', () => {
        const wrapper = shallow(<Loader />);
        expect(wrapper.exists()).toBe(true);
    });

    it('should contain a Spinner component with correct props', () => {
        const wrapper = shallow(<Loader />);
        const spinner = wrapper.find(Spinner);
        expect(spinner).toHaveLength(1);
        expect(spinner.prop('animation')).toEqual('border');
        expect(spinner.prop('role')).toEqual('status');
        expect(spinner.prop('style')).toEqual({
            width: '100px',
            height: '100px',
            margin: 'auto',
            display: 'block'
        });
        expect(spinner.contains(<span className='sr-only'>Loading...</span>)).toBe(true);
    });
});
