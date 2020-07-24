import React from 'react';

// export default class Test2 extends React.Component {
//   handleClick(i) {
//     console.log(i.target); //
//     console.log(this); //
//   }

//   render() {
//     return (
//       <>
//         <button onClick={this.handleClick}>Button Named</button>
//         {/* <button onClick={this.handleClick(this)}>Button Named argument</button> */}
//         {/* <button onClick={() => this.handleClick()}>Button non-Named</button> */}
//       </>
//     );
//   }
// }

/* 예상 결과 
button1 = event object / undefined ????
button2 = 시작 시에 인스턴스, undefined 찍힘 / 호출안됨 
button3 = undefined, 인스턴스 찍힘 -> 정답
*/

export default function Test2() {
  function handleClick(i) {
    console.log(i); //
    console.log(this); //
  }

  return (
    <>
      <button onClick={handleClick}>Button Named</button>
      <button onClick={handleClick(1)}>Button Named argument</button>
      {/* <button onClick={() => handleClick(1)}>Button non-Named</button> */}
    </>
  );
}
