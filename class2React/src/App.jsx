// import { useEffect, useState } from 'react'
// // useState is a Hook that lets you add state to functional components. It returns an array with the current state and a function to update it.
// function App() {
//   const [count, setCount] = useState(0)
//   // const handleIncrement=() => {
//   //   setCount(count+1)
//   // }
//   // let flag=true;
//   const [counterVisible,setcounterVisible]=useState(true)
//   useEffect(()=>{
//     setInterval(()=>{
//       setcounterVisible((counterVisible)=>{
//         return !counterVisible
//       })
//     },5000)
//   },[])// there is problem in complexity in this-> whenver the counter is mount the count is changeing after every second but when the count is unmount we donot clear the setInteral in counter function which creates performance issue becusing after unmounting also clock is running at every second;
//   // to avoid this we have to use clear function;
//   return (
//     <div>
//       <h1>Hello React 👋</h1>
//       {/* <p>Count: {count}</p>
//       <button onClick={handleIncrement}>Increment</button> */}
//       {/* conditional rendering-> humlog ko kbhi kbhi  yr counter component render krna hai;*/}
//       {/* {flag ? <Counter/>:null} */}
//       {counterVisible ? <Counter></Counter>:null}
//       {/* conditional rendering means this will render only ehen the flag is true */}
//     </div>
//   )
// }
// /// i can also define the function handleIncrement outside the function component but it is not a good practice
// function Counter(){
//   // this function is basically a component;
//   const [count, setCount] = useState(0)
//   // let count=0;
//   // const handleIncrement=() => {
//   //   count=count+1;
//   // }// this will not work;ou're using a regular JavaScript variable, but React does not know that count changed. So React won’t re-render the UI.
// // React uses a concept called a "virtual DOM". When you use useState, React:
// // Tracks the variable (count) internally.
// // When you call setCount(newValue), it:
// // Updates the value.
// // Triggers a re-render of the component to update the UI.
// // But with a plain let count = 0, changing the variable doesn't trigger a re-render, so the UI never updates.
//   console.log("counter");//?.how man time this will console?
//   // whenever the state variable changes the Counter function will call hence whenever we click the button console will happen;



//   // CONCEPT OF USESTATE;
//   //SUPPOSE;
//   // setInterval(()=>{
//   //   setCount(count+1)
//   // },1000)// WE SEE THAT THIS IS RUNNING AS WE EXCEPT WE EXCEPT THAT EVER SECOND COUNT WILL UPDATE, IT IS UPDATING THERE IS FLICKING AFTER SOME TIME
//   // THIS IS BECAUSE SET INTERVAL IS CALLING AGAIN AND AGAIN WHEN THE COUNTER IS CHANGING THIS MAKE PROBLEM WE WANT THAT SET INTERVAL IS CALLED ONCE;
//   // BUT WE ALL KNOW THAT WHENEVER STATE VARIABLE CHANGES FUNCTION CALL AGAIN SO HOW WILL WE DO THIS?
//   // ------> CONCEPT OF USEEFFECT;
//   useEffect(()=>{
//     console.log("on mount")
//     let clock=setInterval(()=>{
//       setCount(function(count){
//         console.log("from inside the interval")
//         return count+1
//       })
//     },1000)// wrapping this CODE IN USEeffect WILL MAKE SURE KI KITNI BHI RENDERS HO NO MATTER HOW MANY RENDERS HAPPEN BUT THIS CODE RUNS ONCE;
//     return ()=>{
//       console.log("on unmount")
//       clearInterval(clock)
//     }// we have to stop the clock whenver the counter unmounts
//   },[])//->take twoargument a function and dependencies array;

//   // const handleIncrement=() => {
//   //   setCount(count+1);;
//   //   // state will change and react rerender its
//   // }


//   // dependency array,cleanup,fetch inside useEffect

//   // dependency Array->whenver we want to run some logic whenever the state variable changes then dependencies array come into the picture;

//   return (
//     <div>
//       <p>Count: {count}</p>
//       {/* <button onClick={handleIncrement}>Increment</button> */}
//     </div>
//   )

// }
// export default App



// CONCEPT-2 REREVISION OF USEEFFECT,CLEANUP,PROPS AND DEPENCYARRAY IN USE EFFEC;
import { useEffect, useState } from "react";
function app(){
  const [count,setCount]=useState(0);
  const [count2,setCount2]=useState(0);
  function increase(){
    setCount(c=>c+1)
  }
  function decrease(){
    setCount2(c=>c-1)
  }
  return <div>
    <Counter count={count} count2={count2}/>
    {/* pasing count ans props */}
    <button onClick={increase}>Increase Count</button>
    <button onClick={decrease}>Decrease Count</button>
  </div>
}
function Counter(props){
  // props is like a prameter which we pass in the component;
  useEffect(()=>{
    console.log("mount")
    return function(){
      console.log("unmount")
    }
  },[])// in this the logic inside the useEffect will run only one time because it has no depencies and since no dependencies it mount one time not renrenders again and again
  useEffect(()=>{
    console.log("count has changed");
    // at first this is consoled;
    // but when we icrease the count is increase the the cleanup for second is consoled and then consoled count has changed
    // purane count ko saaf krlo and cew count come;
    return function(){
      console.log("cleanup for second");
    }
  },[props.count])// in this the logic willl rerenderes whenver the count state variable changes
  return <div>
    Counter1 {props.count}
    Counter2 {props.count2}
  </div>
}
export default app;

