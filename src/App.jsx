//usestates
// import React, { useState } from "react";
// const App = () => {
//   const [Num, setNum] = useState(1);
//   let x = 1;

//   const hand = () => {
// x++;
// console.log(x);
// setNum(100);
//     setNum((cur)=>{
//       return cur+1
//     });

//   };
//   console.log(Num);
//   return (
//     <div>
//       <h1>{Num}</h1>
//       <button onClick={hand}>add</button>
//     </div>
//   );
// };
// export default App;

// import React, { useEffect, useState } from "react";

// increase 10
// const App = () => {
//   const [num, setNum] = useState(0);
//   const [person,setPerson]=useState({firstname:'', lastnamep:''}) 
//increse 10
//   const Incre = () => {
//     for (let i = 0; i < 10; i++) {
//       setNum((prevState) => prevState + 1);
//     }
//   };
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={() => setNum(num + 1)}>ADD</button>
//       <button onClick={() => Incre()}>click</button><br></br>
//       <label>fname: </label>
//       <input type="text" onClick={}></input><br></br>
//     </div>
//   );
// };
// export default App;

// import User from './User.jsx'
// function App(){
//   return(
//     <>
//         <User name="fazith" age={22} isstudent={true}/>
//         <User name="dalha" age={21} isstudent={false}/>
//         <User name="mohamed" age={23} isstudent={true}/>
//         <User/>
//     </>
//   );
// }
// export default App

// import User from './User.jsx'

// function App() {
//   return (
//     <>
//       <User islogged={true} username="bro"/>
//     </>
//   );
// }

// export default App

import Mycomponent from './Mycomponent.jsx'

function App() {
  return (
    <>
    <Mycomponent/>
    </>
  );
}

export default App
