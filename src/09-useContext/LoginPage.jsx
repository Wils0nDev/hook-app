import { useContext } from "react";
import { UserContext } from "./context/UserContext";

//!useContext : es un hook que va a permitir consumir nuestro contexto (UserContext).

export const LoginPage = () => {

  const { user, handleSetUser } = useContext(UserContext);
  console.log(user);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button 
      className="btn btn-primary" 
      type="button"
      onClick={()=>handleSetUser({id:123,name:'wilson', email:'ewilson@gmail.com'})}
      >
        Login
      </button>
    </>
  );
};
