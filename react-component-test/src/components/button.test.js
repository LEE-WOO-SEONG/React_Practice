import React from 'react';
import Button from './button';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

jest.useFakeTimers();

describe('Button 컴포넌트 (@testing-library/react)', () => {
  it('컴포넌트가 정상적으로 생성된다.', () => {
    render(<Button />);
  });

  it('button 이라고 쓰여있는 엘리먼트는 HTMLButtonElemnent이다.', () => {
    const { getByText } = render(<Button />);
    const button = getByText('button');
    expect(button).toBeInstanceOf(HTMLButtonElement);
  });

  it('버튼을 클릭하면, p 태그 안에 "버튼이 방금 눌렸다." 라고 쓰여진다.', () => {
    const { getByText } = render(<Button />);
    const button = getByText('button');

    // 버튼을 클릭하면,
    fireEvent.click(button);

    // p 태그
    const p = getByText('버튼이 방금 눌렸다.');
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it('버튼을 클릭하기 전에는 p 태그 안에 "버튼이 눌리지 않았다." 라고 쓰여진다.', () => {
    const { getByText } = render(<Button />);

    const p = getByText('버튼이 눌리지 않았다.');
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it('버튼을 클릭하고 5초 뒤에는, p 태그 안에 "버튼이 눌리지 않았다." 라고 쓰여진다.', () => {
    const { getByText } = render(<Button />);
    const button = getByText('button');

    // 버튼을 클릭하면,
    fireEvent.click(button);

    // 시간을 돌린다.
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    const p = getByText('버튼이 눌리지 않았다.');
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });

  it('버튼을 클릭하면 5초동안 비활성화 된다.', () => {
    const { getByText } = render(<Button />);
    const button = getByText('button');

    fireEvent.click(button);

    // 클릭 시, 버튼 비활성화
    // expect(button.disabled).toBeTruthy();
    expect(button).toBeDisabled();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // expect(button.disabled).toBeFalsy();
    expect(button).not.toBeDisabled();
  });
});
