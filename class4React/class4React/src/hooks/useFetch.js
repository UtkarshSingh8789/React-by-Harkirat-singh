import { useState ,useEffect} from "react";
export function usePostTitle(){
    const [post,setPost]=useState({});
    async function getPosts(){
        const response=await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const json=await response.json();
        setPost(json)
    }
    useEffect(()=>{
        getPosts();
    },[])
    return post.title
}// the common question-> since we are using this whenver required so the code look cleaner, but why we create our custom hooks why not simple function?
// why custom hooks? why not simple function?
// because in react we cannott use hooks inside the function we only use it inside component function or inside our custom hooks

// the only differnce is that it is not a normal function it is a custom hooks

// now we are creating our useFetch hooks;
// this will accept argument-> we will send this to url, then this will send the backend request,get back the response and return the data
export function useFetch(url){
    const [finalData,setFinalData]=useState({})
    async function getDetails(){
        const response=await fetch(url);
        const json=await response.json();
        setFinalData(json)
    }
    useEffect(()=>{
        getDetails()
    },[url])// whenever the url change this will re-renders
    return {finalData}
}