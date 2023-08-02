// import React from 'react';
import "./App.css";
import { useForm } from "react-hook-form";





function App() {
  const { register ,handleSubmit,formState:{errors}} = useForm();

  const onSubmitFunc=(data)=>{
    console.log(data);
  }
   console.log(errors);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmitFunc)}>
        <div>
          <label>Name</label>
          <input {...register("name")} />
        </div>
        <div>
        <label>SurName</label>
          <input {...register("surName")} />
        </div>
        <div>
        <label>email</label>
          <input {...register("email", {required:true})} />
          {errors.email && <p style={{color:"red"}}>Error happened</p>}
        </div>
        <button type="submit">register</button>
      </form>
      
    </>
  );
}

export default App;
