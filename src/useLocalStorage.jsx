import React,{useEffect,useState} from 'react';

function getSavedValue(key, initialValue){
   const savedValue= JSON.parse(localStorage.getItem(key));
   if(savedValue){
    return savedValue
   }else{
    return initialValue;
   }
}

function useLocalStorage(key ,initialValue) {
    let[value,setValue]=useState(()=>{
        return getSavedValue(key, initialValue);
    });

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));

    },[value,key]);
    return [value, setValue];

  return (
    <div>useLocalStorage</div>
  )
}

export default useLocalStorage