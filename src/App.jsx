 import React from 'react';
// // function App() {
// //   const s={
// //     color:"red",
// //     fontwaight:"bold",
// //     fontSize:"20px",
// //     backgroundColor:"yellow",
// //   }
// // return <h1 style={s}>Hello React!</h1>;
// }
function App() {

  return( <div style={{display:"flex", flexWrap:"wrap", gap:"10px"}}>
    {Card()}
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
   </div>
  );

}

function Card () {
  return (
    <div style={{width:"200px", border:"1px solid black"}}>
      <img src="https://picsum.photos/200/300" alt="card" />
      <h2>Card</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit doloremque nihil, optio nobis sit dicta minima officia quaerat. Eum iusto facere optio consequatur ea.</p>
    </div>
  )
}
export default App;




// JSX browser ko directly smjh nhi ata
// eska mtlb kuch conversion ho rhi hogi (transpiling)
// React.createElement('name', { attributes }, content)
// <h1>Hello World</h1>
// React.createElement('h1', null, 'Hello World')
// transpile, compile
// kon kar rha hai ye chiz? build tool?
// babel: purana
// swc: speedy web compilor (rust, zig, go)