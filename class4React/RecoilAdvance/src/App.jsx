// import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
// import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from "./Store/atoms.js"
// import { useMemo } from "react"


// function App() {
//   return (
//     <RecoilRoot>
//       <MainApp />
//     </RecoilRoot>
//   )
// }
// function MainApp(){
//   const networkNotificationCount=useRecoilValue(networkAtom)
//   const jobsAtomCount=useRecoilValue(jobsAtom)
//   const notificationsAtomCount=useRecoilValue(notificationsAtom)
//   // const [messagingAtomCount,setMessagingAtomCount]=useRecoilState(messagingAtom)
//   const messagingAtomCount=useRecoilValue(messagingAtom)
//   // useRecoilState also gives us two things like useState
//   // if we only need (setMessagingAtomCount) this thing, if we only need to update things and not actually want the value of it we use this thing

//   //  COMMENTS:-
// //      Hook         |      Use case
// // useRecoilValue    | Only read atom value
// // useSetRecoilState | Only write/update atom value
// // useRecoilState    | Read and write atom value (2-way)
//   // const totalNotificationCount=useMemo(()=>{
//   //   return networkNotificationCount+jobsAtomCount+notificationsAtomCount+messagingAtomCount
//   // },[networkNotificationCount,jobsAtomCount,notificationsAtomCount,messagingAtomCount])//without selector
//   //Here, useMemo ensures that this addition only re-runs if any of the 4 counts change.
//   // this also can be done by selectors 
//   const totalNotificationCount=useRecoilValue(totalNotificationSelector)// with selector
//   return (
//     <div>
//       <button>Home</button>

//       <button>My Network ({networkNotificationCount>=99 ? "99+" : networkNotificationCount})</button>
//       <button>Jobs ({jobsAtomCount>=99 ? "99+" : jobsAtomCount})</button>
//       <button>Messaging ({messagingAtomCount>=99 ? "99+" : messagingAtomCount})</button>
//       <button>Notifications ({notificationsAtomCount>=99 ? "99+" : notificationsAtomCount})</button>

//       {/* <button onClick={()=>{
//         setMessagingAtomCount(messagingAtomCount+1)
//       }}>Me</button>  */}
//       <button>Me ({totalNotificationCount})</button>
//     </div>
//   )
// }
// export default App

// if we have to hit back the backend and take the data from it and show it to this appliccation we have to understood about asynchronous data queries // revise from video



// ATOM FAMILY;

// problem- create a component that takes a todo id as input and renders the todo
// you need to store the Todo in atomcan't use useSte;
// all the todos can be hardcorded as a varibale;
// how do you create and delete todos dynamically?
// import { atom, RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
// import { TODOS } from "./Store/Todos.js"
// const todoAtom=atom({
//   key:"todoAtom",
//   default:{
//     id:1,
//     title:"Go to gym",
//     description:"Hit the gym from 7-9"
//   }
// })
// function App(){
//   return (
//     <div>
//       <RecoilRoot>
//         <Todo id={1}/>
//         <Todo id={2}/>
//       </RecoilRoot>
//     </div>
//   )

// }
// function Todo({id}){
//   const currentTodo=useRecoilValue(todoAtom)
//   return (
//     <div>
//       {currentTodo.title}
//       <br/>
//       {currentTodo.description}
//     </div>
//   )
// }
// export default App



// we are created a single todo atom and we are rendering two componnet of Todo and both of these geting the same atom we have not dynamically created and updated this;
// atoms work when you know something is present only once in screen but if we have bunch of todos each will need its own atom so we have to dynmically create more and more atoms and in this the concept of atom family come into the picturs;


import { RecoilRoot, useRecoilValue } from "recoil"
import { TodoAtomFamily } from "./Store/todoAtomFamily.js"
function App(){
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2}/>
  </RecoilRoot>
}
function Todo({id}){
  const currentTodo=useRecoilValue(TodoAtomFamily(id))
  return <div>
    {currentTodo.title}
    <br/>
    {currentTodo.description}
  </div>
}
export default App




