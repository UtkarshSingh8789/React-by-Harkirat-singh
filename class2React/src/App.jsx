import { useState } from 'react'
// useState is a Hook that lets you add state to functional components. It returns an array with the current state and a function to update it.
function App() {
  const [count, setCount] = useState(0)
  // const handleIncrement=() => {
  //   setCount(count+1)
  // }
  return (
    <div>
      <h1>Hello React 👋</h1>
      {/* <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button> */}
      <Counter/>
    </div>
  )
}
/// i can also define the function handleIncrement outside the function component but it is not a good practice
function Counter(){
  // this function is basically a component;
  const [count, setCount] = useState(0)
  // let count=0;
  // const handleIncrement=() => {
  //   count=count+1;
  // }// this will not work;ou're using a regular JavaScript variable, but React does not know that count changed. So React won’t re-render the UI.
// React uses a concept called a "virtual DOM". When you use useState, React:
// Tracks the variable (count) internally.
// When you call setCount(newValue), it:
// Updates the value.
// Triggers a re-render of the component to update the UI.
// But with a plain let count = 0, changing the variable doesn't trigger a re-render, so the UI never updates.
  console.log("counter");
  const handleIncrement=() => {
    setCount(count+1);;
    // state will change and react rerender its
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
  
}
export default App

