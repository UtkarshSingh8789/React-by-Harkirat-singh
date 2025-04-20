import { useContext } from "react";
import { useState,createContext } from "react"
const BulbContext=createContext();  // -> i will store my bulb data here and  i will use it everywhere
// provider-> this component wraps part of your application and provides the context value to all its descendants. 
// Any component that is a child of this Provider can access the context;

// we will create context;
// we have to provide context
// we have to use context;

function App() {
  // const [bulbOn,setBulbOn]=useState(true);
  // i want to send this state variable into the lowes level yhat is in BulbState componet and in togg Comp,
  // we will no send directly to the deepest node;
  // we will send this level wise this leed to have some problem like compexity issue and non-readable code;
  // because we are passing the props in every child node if it doesnot requires it;
  // to solve this problem- context api come into the picture;->context is created outside the component;
  return (
    <div>
      {/* <LightBulb bulbOn={bulbOn} setBulbOn={setBulbOn}/> */}
      {/* this example can be done in single component but i am making chain of component to understand the sttate-experiments */}

      {/* <BulbContext.Provider value={{
        bulbOn:bulbOn,
        setBulbOn:setBulbOn
      }}>
        <LightBulb/>
      </BulbContext.Provider> */}
      {/* ANOTHER WAY DEFINNG IN SEPARATE COMPONENT */}
      <BulbProvider>
        <LightBulb/>
      </BulbProvider>

    </div>
  )
}
function BulbProvider({children}){
  const [bulbOn,setBulbOn]=useState(true);
  return (
    <BulbContext.Provider value={{
      bulbOn:bulbOn,
      setBulbOn:setBulbOn
    }}>
      {children}
    </BulbContext.Provider>
  )
}
// function LightBulb({bulbOn,setBulbOn}){
  function LightBulb(){
  // this guy is taking it from above and sendit it to below;
  // const [bulbOn,setBulbOn]=useState(true)
  // bulbOn is prop to BulbState component;
  // setBulbOn is prop to ToggleBulbState component
  // prop drilling occurs when you need to pass data from a higher-level component down to a lower-level component 
  // that is several layers deep in the component tree;
  return (
    <div>
      {/* <BulbState bulbOn={bulbOn}/>
      <ToggleBulbState setBulbOn={setBulbOn}/>  */}
      <BulbState/>
      <ToggleBulbState/>
    </div>
  )
}
// function BulbState({bulbOn}){
  function BulbState(){
  // this guy need bulbOn state variable;
  // const [bulbOn,setBulbOn]=useState(true)// i will define this in lca;
  // i have to update this state variable in ToggleBulbComponent how can we do it?
  // setBulbOn varibale needs to be present in ToggleBulbState component, i need to roll this down
  const {bulbOn}=useContext(BulbContext)
  // useContext return object.
  return(
    <div>
      {bulbOn ? "Bulb on":"Bulb off"}
    </div>
  )
}
// function ToggleBulbState({setBulbOn}){
  function ToggleBulbState(){
  // this guy needs setBulbOn state variable so i will roll this up in LCA (lowest common ancestor)
  const {setBulbOn}=useContext(BulbContext)
  return (
    <button onClick={()=>{
      setBulbOn(c=>!c)
    }}>Toggle the Bulb</button>
  )
}
export default App
