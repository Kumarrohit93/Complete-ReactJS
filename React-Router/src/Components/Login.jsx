import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [login, setLogin] = useState(false);
  let navigate = useNavigate();

  function changeState() {
    setLogin(true);

    if (login) {
      navigate("/dashboard");
    }
  }

  return (
    <div>
      <button onClick={changeState}>Login</button>
    </div>
  );
};

export default Login;
