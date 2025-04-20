// Debouncing in React (or in general JavaScript) is a technique used to limit the rate at which a function gets called — especially useful for performance-heavy operations like:
// Searching/filtering as the user types
// Handling window resize
// Button click spam prevention
// API requests on input change
// 💡 What is Debouncing?
// Debouncing ensures that a function is only called after a certain delay since the last time it was invoked. If it's invoked again before that delay, the timer resets.
// ✅ Common Use Case: Search Input
// Suppose you're making a search bar that fetches results as the user types. Without debouncing, it might send an API request on every keystroke.
// which leads to sending to many request to backend, which is bad;
import { useRef } from "react";
export const useDebounce=(originalFn)=>{
    const currentClock=useRef();
    const fn=()=>{
        clearTimeout(currentClock.current)
        currentClock.current=setTimeout(originalFn,200)
    }
    return fn
}// it will first clear the old clock and start the new clock which will call the original function after 200 millisecondstate