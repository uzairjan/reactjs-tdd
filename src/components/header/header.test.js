import React from 'react';
import { shallow } from "enzyme";
import Header from './index';

const setUp = (props={}) =>{
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', ()=> {
    let component;

    beforeEach(()=> {
         component = setUp();
    });

    it('It should render without errors', () => {
        // console.log(component.debug());
        const wrapper = component.find(`[data-test]='headerComponent'`);
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo',()=>{
        const wrapper = component.find('.logoIMG');
        expect(wrapper.length).toBe(1);
    });
});