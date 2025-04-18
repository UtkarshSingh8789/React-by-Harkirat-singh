// custom hooks- we write the function but only condition is the function name start with use;
// and this hook should use another hook under the hood;
import { useEffect, useState } from "react"
import { useFetch, usePostTitle } from "./hooks/useFetch.js";
// CUSTOM HOOKS
function useCounter(){
  const [count,setCount]=useState(0);
  function increaseCount(){
    setCount(c=>c+1);
  }
  // What does App componnet need?
  // it requires increaseCount function and count state variable hence we will return both;
  return {
    count:count,
    increaseCount:increaseCount
  }
}// this hook is now used in various component;
// is kys fiada hua ki humlog ko differenct components(using same logic) me same logic baar baar likna nah prega

// CUSTOM HOOKS-2 USEFETCH -> INPORTNAT INTERVIEW QUESTION;
// creating this in new folder for more cleaner way;

function App() {
  // const [count,setCount]=useState(0);
  // function increaseCount(){
  //   setCount(c=>c+1);
  //   // setCount(c+1)
  // }
  //NOW USING CUSTOM HOOKS OUR APP COMPONENT LOOKS CLEANER
  const {count,increaseCount}=useCounter()
  // const [post,setPost]=useState({});
  // async function getPosts(){
  //   const response=await fetch("https://jsonplaceholder.typicode.com/posts/1")
  //   const json=await response.json();
  //   setPost(json)
  // }
  // useEffect(()=>{
  //   getPosts();
  //   // i am not writng the fetch logic in useEfffects, writing outside because we cannot make the first argument of fetch async type;
  //   // humlog ko pta hai jb dependency array empty hai to jb bhi ye componemt mount hoga to jo bhi logic useEffect me likha hai gets called
  // },[])
  const postTitle=usePostTitle()
  const [currentPost,setCurrentPost]=useState(1)
  const {finalData}=useFetch("https://jsonplaceholder.typicode.com/posts/"+currentPost)
  return (
    <div>
      {/* <button onClick={increaseCount}>Increase {count}</button> */}
      {/* {post.title} */}
      {/* {postTitle}
      {JSON.stringify(finalData)} */}
      <button onClick={()=>setCurrentPost(1)}>1</button>
      <button onClick={()=>setCurrentPost(2)}>2</button>
      <button onClick={()=>setCurrentPost(3)}>3</button>
      {JSON.stringify(finalData)}
    </div>
  )
}

export default App
