import { useEffect, useRef} from "react"
export const usePrev=(value)=>{
    const ref=useRef();// it is used to store the value and whenver the value changes it doesnot rerender;
    // const [ref,setRef]=useState()// but in this whenver ref chnges the component re render
    // let suppose usePrev(0);
    // first this line will call-> ref->is intialized in that line;
    // then the retuen will be there which is undefined;
    // after that useEffect will be called now ref current value will be 0;
    // and the key point to note thet-> this is no rendering when the ref changes;
    // and this process will go on.....
    useEffect(()=>{
        ref.current=value
        // this will not reender all the variable because this is ref not a simple state variable;
    },[value])
    return ref.current
}
// property of react-> first there will be return then aftter effects calll;