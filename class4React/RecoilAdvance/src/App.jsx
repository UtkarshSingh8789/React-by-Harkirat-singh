import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from "./Store/atoms.js"
import { useMemo } from "react"

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}
function MainApp(){
  const networkNotificationCount=useRecoilValue(networkAtom)
  const jobsAtomCount=useRecoilValue(jobsAtom)
  const notificationsAtomCount=useRecoilValue(notificationsAtom)
  // const [messagingAtomCount,setMessagingAtomCount]=useRecoilState(messagingAtom)
  const messagingAtomCount=useRecoilValue(messagingAtom)
  // useRecoilState also gives us two things like useState
  // if we only need (setMessagingAtomCount) this thing, if we only need to update things and not actually want the value of it we use this thing

  //  COMMENTS:-
//      Hook         |      Use case
// useRecoilValue    | Only read atom value
// useSetRecoilState | Only write/update atom value
// useRecoilState    | Read and write atom value (2-way)
  // const totalNotificationCount=useMemo(()=>{
  //   return networkNotificationCount+jobsAtomCount+notificationsAtomCount+messagingAtomCount
  // },[networkNotificationCount,jobsAtomCount,notificationsAtomCount,messagingAtomCount])//without selector
  //Here, useMemo ensures that this addition only re-runs if any of the 4 counts change.
  // this also can be done by selectors 
  const totalNotificationCount=useRecoilValue(totalNotificationSelector)// with selector
  return (
    <div>
      <button>Home</button>

      <button>My Network ({networkNotificationCount>=99 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount>=99 ? "99+" : jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount>=99 ? "99+" : messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount>=99 ? "99+" : notificationsAtomCount})</button>

      {/* <button onClick={()=>{
        setMessagingAtomCount(messagingAtomCount+1)
      }}>Me</button>  */}
      <button>Me ({totalNotificationCount})</button>
    </div>
  )
}
export default App
