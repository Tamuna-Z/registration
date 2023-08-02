// import React from 'react';
import "./App.css";
import { useForm } from "react-hook-form";





function App() {
  const { register ,handleSubmit} = useForm();

  const onSubmitFunc=(data)=>{
    console.log(data);
  }

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
          <input {...register("email")} />
        </div>
        <button type="submit">register</button>
      </form>
      
    </>
  );
}

export default App;
