import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving){
  let props = {
    course: {}, 
    saving: saving, 
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };
  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    renderer,
    output
  }
}

describe('CourseForm via react test utils', () => {
  it('render form and h1', ()=>{
    const { output } = setup();
    expect(output.type).toBe('form');
    let [ h1 ] = output.props.children;
    expect(h1.type).toBe('h1');
  });

  it('save button should say Save when NOT saving', () => {
    const { output } = setup(false);
    let saveButton = output.props.children[5];
    expect(saveButton.props.value).toBe('Save');
  })

  it('should say Saving when the app is saving', ()=>{
    const { output } = setup(true);
    let saveButton = output.props.children[5];
    expect(saveButton.props.value).toBe('Saving...');
  })
});