// import React from 'react';
import "./App.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import Practice from "./components/Practice";


function App() {
  const [value, setValue]=useLocalStorage('name','');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const[hobby,setHobby]=useState('');

  const onSubmitFunc = (data) => {
    console.log(data);
  };
  console.log(errors);
  console.log(hobby);
  

  return (
    <>
      {/* <form onSubmit={handleSubmit(onSubmitFunc)}>
        <div>
          <label>Name</label>
          <input
            {...register("name", {
              pattern: { value: /^[A-Za-z]+$/i, message: "only alphabets" },
            })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>
        <div>
          <label>SurName</label>
          <input {...register("surName",{
              pattern: { value: /^[A-Za-z]+$/i, message: "only alphabets" },
            })} />
            {errors.surName && <p style={{ color: "red" }}>{errors.surName.message}</p>}
        </div>
        <div>
          <label>email</label>
          <input
            {...register("email", {
              required: "error happened",
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "email not valid",
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>
        <button type="submit">register</button>
      </form> */}

      {/* <div style={{width:"300px",height:"400px",backgroundColor:"pink"}}>
        <input onChange={(e) =>{
          setHobby(e.target.value)}

        }/>
       
      </div> */}
<Practice/>
      <input
      type="text"
      onChange={(event)=>setValue(event.target.value)}
      value={value}
      />
      
    </>
  );
}

export default App;
