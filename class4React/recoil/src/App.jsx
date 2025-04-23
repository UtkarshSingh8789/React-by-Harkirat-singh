// // concept1-> difference between context Api and recoil 
// // using context-Api-> Re-renders entire tree when context value changes, which can be inefficient.
// // jb value change ho rha button pe click krne se tb vas value ka component rerednder krna chaiye kyuki we hi is variabl ko use kr rha,but Increase,Decrease
// // bhi component rerender ho rha hai jo optimal nhi  hai. in react we have to minimize rerendering;
// import { useContext } from "react"
// import { useState } from "react"
// import { createContext } from "react"

// // first creating the counter app using context api;
// function App() {
//   return (
//     <div>
//       <Parent/>
//     </div>
//   )
// }
// const CountContext=createContext()
// function CountContextProvider({children}){
//   const [count,setCount]=useState(0)
//   return(
//     <CountContext.Provider value={{count,setCount}}>
//       {children}
//     </CountContext.Provider>
//   )
// }
// function Parent(){
//   return (
//     <CountContextProvider>
//       <Increase/>
//       <Decrease/>
//       <Value/>
//     </CountContextProvider>
//   )
// }
// function Increase(){
//   const {setCount}=useContext(CountContext)
//   return (
//     <button onClick={()=>{
//       setCount((c)=>(c+1))
//     }}>Increase</button>
//   )
// }
// function Decrease(){
//   const {setCount}=useContext(CountContext)
//   return (
//     <button onClick={()=>{
//       setCount((c)=>(c-1))
//     }}>Decrease</button>
//   )
// }
// function Value(){
//   const {count}=useContext(CountContext)
//   return (
//     <p>Count:{count}</p>
//   )
// }
// export default App;


// import React from 'react'
// import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil'
// import {counterAtom}  from './store/atoms/counter.js'
// function App(){
//   return(
//     // step 1- installing recoil;
//     // step 2- wrapping our application in RecoilRoot;
//     <RecoilRoot>
//       <Counter/>
//     </RecoilRoot>
//   )
// }
// // const counter=atom({
// //   key:"counter",// it is used to uniquely identify the atom
// //   default:0
// // })// creatung in different file 
// function Counter(){
//   // const [count,setCount]=useState(0); // step 3- replacing this with an atom

//   return (
//     <div>
//       <CurrentCount/>
//       <Increase/>
//       <Decrease/>
//     </div>
//   )
// }
// //ATOMS-Units of state that can be read from and wriiten to from any component.When an atom's state changes,all components
// // that subscribe to that atom will re-render
// function CurrentCount(){
//   const count=useRecoilValue(counterAtom)//this component is now subscribed to the value of this atom
//   console.log(count)
//   return <h2>Count: {count}</h2>;
// }
// function Decrease(){
//   const setCount=useSetRecoilState(counterAtom)// ishko value ka access nhi chaiye ishko bs setter chaiye
//   return (
//     <div>
//       <button onClick={()=>{
//         setCount(c=>c-1)
//       }}>Decrease</button>
//     </div>
//   )
// }
// function Increase(){
//   const setCount=useSetRecoilState(counterAtom)
//   return (
//     <div>
//       <button onClick={()=>{
//         setCount(c=>c+1)
//       }}>Increase</button>
//     </div>
//   )
// }
// export default App



// CONCEPT OF MEMO  ;

import { useEffect, useState,memo } from "react";
function App(){
  return (
    <Counter/>
  )
}
function Counter(){
  const [count,setCount]=useState(0)
  useEffect(()=>{
    setInterval(()=>{
      setCount(c=>c+1)
    },3000)
  },[])
  // in Counter component rerenders will happen whenever the count changes that is at every 3 sec;
  // since we are not passing state variables to its child components the re-render will still happens in its child component(CurrentCount,Increase,Decrease);
  // the react is not smart enought we have to till the unless the prop changes in the child components do not re-renders it
  // to fix it we use memo

  // definations-> React says Anytime a component re-renders all its childreen also rerender
  // But if we wrap a component inside a memo only if the props/state in that component has changed Only then will it re-render
  return (
    <div>
      {/* <CurrentCount/> */}
      <MemoizedCurrentCount/>
      {/* it will not rerender unless the prop changes or state changes of that component*/}
      <Increase/>
      <Decrease/>
    </div>
  )
}
const MemoizedCurrentCount=memo(CurrentCount)
function CurrentCount(){
  return <div>1</div>
}
//Another syntax of memo
const Increase=memo(function (){
  return (
    <div>
      <button onClick={()=>{}}>Increase</button>
    </div>
  )
})
const Decrease=memo(function (){
  return (
    <div>
      <button onClick={()=>{}}>Increase</button>
    </div>
  )
})
export default App

