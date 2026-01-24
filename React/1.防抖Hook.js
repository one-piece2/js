import { useRef,useEffect,useCallback } from "react";
function useDebounce(fn, delay) {
    const timeRef = useRef(null)
    const debounceFuntion = (...args) => {
        if (timeRef.current){
            clearTimeout(timeRef.current)
        }
        timeRef.current=setTimeout(() => {
            fn(...args)
        }, delay);

   }
   return debounceFuntion
}

function useDebounce(fn,delay){
    const timeRef=useRef(null)
    const debounceFn=useCallback((...args)=>{
        if(timeRef.current){
            clearTimeout(timeRef.current)
        }
        timeRef.current=setTimeout(()=>{
            fn(...args)
        },delay)
    },[fn,delay])
    useEffect(()=>{


        return ()=>{
            if(timeRef.current){
                clearTimeout(timeRef.current)
            }
        }
    },[])
    return debounceFn
}