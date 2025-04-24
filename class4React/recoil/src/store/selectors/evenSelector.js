import { selector } from "recoil";
import { counterAtom } from "../atoms/counter.js";
export const evenSelector=selector({
    key:"isEvenSelector",
    // sice it is dervied state we cannot set default;
    get:({get})=>{
        const currentCount=get(counterAtom)
        return (currentCount%2===0);
    }
})