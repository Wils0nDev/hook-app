import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const SimpleFormWithCustomHook = () => {
  const formInitialState = {
    username: "",
    email: "",
    password: "",
  };
 
  const {
    handleValueInput,
    handleResetButton,
    username,
    email,
    password} = useForm(formInitialState)

  return (
    <>
      <h1>Formulario Simple With Custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="UserName"
        value={username}
        name="username"
        onChange={handleValueInput}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        value={email}
        name="email"
        onChange={handleValueInput}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        value={password}
        name="password"
        onChange={handleValueInput}
      />
      <button type="button" class="btn btn-primary mt-2" onClick={handleResetButton} > Reset</button>
    </>
  );
};
