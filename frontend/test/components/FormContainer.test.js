import React from 'react';
import { shallow } from 'enzyme';
import { Container, Row, Col } from 'react-bootstrap';
import FormContainer from '../../src/components/FormContainer';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('FormContainer component', () => {
    const mockChild = <div data-testid="mock-child" />;

    it('should render without errors', () => {
        const wrapper = shallow(<FormContainer>{mockChild}</FormContainer>);
        expect(wrapper.exists()).toBe(true);
    });

    it('should render a Container component', () => {
        const wrapper = shallow(<FormContainer>{mockChild}</FormContainer>);
        expect(wrapper.find(Container)).toHaveLength(1);
    });

    it('should render a Row component inside the Container component', () => {
        const wrapper = shallow(<FormContainer>{mockChild}</FormContainer>);
        expect(wrapper.find(Container).find(Row)).toHaveLength(1);
    });

    it('should render a Col component inside the Row component', () => {
        const wrapper = shallow(<FormContainer>{mockChild}</FormContainer>);
        expect(wrapper.find(Row).find(Col)).toHaveLength(1);
    });

    it('should render the children inside the Col component', () => {
        const wrapper = shallow(<FormContainer>{mockChild}</FormContainer>);
        expect(wrapper.find(Col).find('[data-testid="mock-child"]')).toHaveLength(1);
    });
});
