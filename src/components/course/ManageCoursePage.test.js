import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { ManageCoursePage } from './ManageCoursePage';

describe('ManageCourseComponent', ()=>{
  it('should display an error message if user attemps to save a course with a blank title', () =>{
    const props = {
      course : {
        id: "",
        title: "",
        watchHref: "",
        authorId: "",
        length: "",
        category: ""
      },
      authors: [],
      actions: { saveCourse: () => Promise.resolve()}
    };

    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
