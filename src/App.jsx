import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmitFunc=(data)=>{
    console.log(data);
  }

  return (
    <>
      <form>
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
      </form>
    </>
  );
}

export default App;
