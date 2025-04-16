import { useRef,useState } from "react"
import {BrowserRouter,Routes,Route, Link,useNavigate, Outlet} from "react-router-dom"
// there is another type of router HashRouter which is used in creating chrome extension
// there are two reasons for which we use navigation first one that user wants to go to anothe page by clicking which is done by using link;
// and the other reason ->suppose user go to another page 1dter 0 second but the requirement is that user have to go to home pag after 10 second
// function App() {
//   return (
//     <div>
//       {/* ALLEN | CLASS-11 | CLASS-12 */}
//       {/* this above line will appear in each route because it is not conditional rendering */}

//       {/* NAVIGATION */}
//       {/* firat way of doing navigation-dumb way */}
//       {/* <a href="/">Allen</a>
//       <a href="/neet/online-coaching-class-11"> Class 11</a>
//       <a href="/neet/online-coaching-class-12">Class 12</a> */}
//       {/* there is problem in this way when we are going from one landing page to anothe we saw some loader in href which is not shown in original web application of allen */}
//       {/* in the dumb way of navigation we saw loader so it is bad way it take away the benefit of single page application*/}
//       {/* when we are going from one page to another humlog pura html phir se mang rhe hai (index.html bar bar hr me akg se feth ho rha) lkin single page application me ye nhi hota */}
//       {/* to acoid this instead of a tag we use link tag */}
//       {/* link is always used inside browserRouter*/}
//       <BrowserRouter>
//       {/* we will route all our application in browserRoute */}
//       <Routes>
//         {/* conditional rendering */}
//         <Route path="/" element={<Layout/>}>
//         {/* meaning of above line anything which starts with "/" ushko is layout me wrap kr dena*/}
//           <Route path="/neet/online-coaching-class-11" element={<Class11Program/>}/>
//           {/* meaning of above line for this route given render the class11Program component */}
//           <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}/>
//           <Route path="/" element={<Landing/>}/>
//           <Route path="*" element={<ErrorPage/>}/>
//           {/* this route when we go on random route which is not there then it redicts to this * route which renders error page */}
//         </Route>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// // function Layout(){
// //   return <div style={{height:"100vh"}}>  
// //     <Link to="/">Allen</Link>
// //     <Link to="/neet/online-coaching-class-11"> Class 11</Link>
// //     <Link to="/neet/online-coaching-class-12">Class 12</Link>
// //     <div style={{height:"90vh"}}>
// //       <Outlet/>
// //     </div>
// //     footer
// //   </div>
// // } or
// function Layout(){
//   return <div style={{height:"100vh"}}>  
//     <Header/>
//     <div style={{height:"90vh"}}>
//       <Outlet/>
//     </div>
//     footer
//   </div>
// }
// function Header(){
//   return <div>
//     <Link to="/">Allen</Link>
//     <Link to="/neet/online-coaching-class-11"> Class 11</Link>
//     <Link to="/neet/online-coaching-class-12">Class 12</Link>
//   </div>
// }
// function Class11Program(){
//   return <div>Neet Program for Class-11</div>
// }
// function Class12Program(){
//   const navigate=useNavigate()
//   const redirectUser=()=>{
//     navigate("/")
//   }
//   return <div>Neet Program for Class-12
//     <button onClick={redirectUser}>Go bact To Loadin pAGE</button>
//   </div>
// }
// function Landing(){
//   return <div> WellCome To Allen</div>
// }
// function ErrorPage(){
//   return (
//     <div>Sorry Page Not Fond-404</div>
//   )
// }

//  CONCEPT OF USEREF,USEPREV HOOKS
//useRef-refrence to a value,such that when u change the value,the component Does not Re-Render

// first work of ref hook-> using the refrence of dom element;

// function App(){
//   const inputRef=useRef()
//   function focusOnInput(){
//     // document.getElementById("name").focus()//this is one way we fetch the dom element but it not usually the right way,the better way is to use Ref;
//     // create a variable that refers to the dom element rather than doing document.querySelector or etc;
//     // ref.current//=>this will give the same thing as this guy=>document.getElementById
//     inputRef.current.focus()
//   }
//   return <div>
//     {/* suppose i created two input box first and second and i want that if i click on submit my cursor automatically comes to input box 1 means focus reached to 1*/}
//     Sign Up 
//     {/* <input ref={inputRef} id="name" type={"text"}></input> */}
//     {/* we donot requrie id now; */}
//     <input ref={inputRef} type={"text"}></input>
//     <input type={"text"}></input>
//     <button onClick={focusOnInput}>Submit</button>
//   </div>
// }

// A CLOCK WITH START AND STOP BUTTON;
function App(){
  const [currentCount,setCurrentCount]=useState(1)
  // we define the varibales like state because kitna bhi rerender hojaye ushka value rerender we original pe initialze nhi hota
  // In your code, setInterval is only called when the "Start" button is clicked:
  // So it's not triggered on re-renders — only on that specific user action.
// 👉 That’s why you don’t need useEffect in your current version — unless you're trying to automatically start or clean up the timer when the component mounts/unmounts.
  // let timer=0;->we will not do this when we define it outside the function then every time count change rerendring happens and timmmer will initialized to zero because hence cannot clear the actual timer value
  // const [timer,setTimer]=useState(0)//now it doesnot change when it rerenders
  // function startClock(){
  //   let value=setInterval(function(){
  //     setCurrentCount(c=>c+1)
  //   },1000)
  //   setTimer(value)
  // }
  // when we want to stop the clop then what we have to do we have to cleear the timer;
  // since timer is intialized in startClock function how can we use it in another function;
  // when we define it outside the function then every time count change rerendring happens and timmmer will initialized to zero because hence cannot clear the actual timer value
  // function stopClock(){
  //   clearInterval(timer)
  // }
  //this is the bad way of doing because it do one extra rerender;
  // so we should use refHook to do in better or optimized way;
  // second functionalinty of ref hook taking the refrence of value;
  const timer=useRef()// ise do baar renrendering nhi hoga
  function startClock(){
    let value=setInterval(function(){
      setCurrentCount(c=>c+1)
    },1000)
    timer.current=value
  }
  function stopClock(){
    clearInterval(timer.current)
  }
  return(
    <div>
      {currentCount}
      <br/>
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>
  )
}
export default App
