import React from 'react';
import Button from './button';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() });

jest.useFakeTimers();

describe('Button 컴포넌트 (enzyme)', () => {
  it('컴포넌트가 정상적으로 생성된다.', () => {
    shallow(<Button />);
  });

  it('button 이라고 쓰여있는 엘리먼트는 HTMLButtonElemnent이다.', () => {
    const wrapper = shallow(<Button />);
    const button = wrapper.find('button');
    expect(button.text()).toBe('button');
  });

  it('버튼을 클릭하면, p 태그 안에 "버튼이 방금 눌렸다." 라고 쓰여진다.', () => {
    const wrapper = shallow(<Button />);
    const button = wrapper.find('button');

    // 버튼을 클릭하면,
    button.simulate('click');

    // p 태그
    const p = wrapper.find('p');
    expect(p.text()).toBe('버튼이 방금 눌렸다.');
  });

  it('버튼을 클릭하기 전에는 p 태그 안에 "버튼이 눌리지 않았다." 라고 쓰여진다.', () => {
    const wrapper = shallow(<Button />);

    const p = wrapper.find('p');
    expect(p.text()).toBe('버튼이 눌리지 않았다.');
  });

  it('버튼을 클릭하고 5초 뒤에는, p 태그 안에 "버튼이 눌리지 않았다." 라고 쓰여진다.', () => {
    const wrapper = shallow(<Button />);
    const button = wrapper.find('button');

    // 버튼을 클릭하면,
    button.simulate('click');

    // 시간을 돌린다.
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    const p = wrapper.find('p');
    expect(p.text()).toBe('버튼이 눌리지 않았다.');
  });

  it('버튼을 클릭하면 5초동안 비활성화 된다.', () => {
    const wrapper = shallow(<Button />);
    const button = wrapper.find('button');

    button.simulate('click');

    // 클릭 시, 버튼 비활성화
    expect(wrapper.find('button').prop('disabled')).toBeTruthy();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(wrapper.find('button').props().disabled).not.toBeTruthy();
  });
});
