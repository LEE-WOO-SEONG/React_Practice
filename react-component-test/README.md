<h1>React Test 연습용 repo 입니다.</h1>

<br/>

<h2>Button 컴포넌트 Test1</h2>
<a href="https://github.com/LEE-WOO-SEONG/React_Practice/blob/master/react-component-test/src/components/button.test.js">ver1. @testing-library/react</a>
<a href="https://github.com/LEE-WOO-SEONG/React_Practice/blob/master/react-component-test/src/components/button.enzyme.test.js">ver2. enzyme</a>
<ol>
  <li>컴포넌트가 정상적으로 생성된다.</li>
  <li>"button" 이라고 쓰여있는 엘리먼트는 HTMLButtonElement 이다.</li>
  <li>버튼을 클릭하면, p 태그 안에 "버튼이 방금 눌렸다." 라고 쓰여진다.</li>
  <li>버튼을 클릭하기 전에는, p 태그 안에 "버튼이 눌리지 않았다." 라고 쓰여진다.</li>
  <li>버튼을 클릭하고 5초 뒤에는, p 태그 안에 "버튼이 눌리지 않았다." 라고 쓰여진다.</li>
  <li>버튼을 클릭하면, 5초 동안 버튼이 비활성화 된다.</li>
</ol>
