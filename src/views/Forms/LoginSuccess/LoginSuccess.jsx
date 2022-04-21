import { useState, useEffect } from "react";
import urlcat from "urlcat";
import { BACKEND } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";

const url = urlcat(BACKEND, "/api/users/loginsuccessful");

function LoginSuccessful() {
  const [secret, setSecret] = useState({
    user: "",
    purchaseLog:[]
  });
  
  const loginSuccessCheck = () => {
    fetch(url, {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
          console.log(response)
        return response.json()
      })
      .then((data) => {
        console.log("first data",data)
        setSecret({ ...secret, user: data.username, purchaseLog: data.purchaseLog })
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loginSuccessCheck()
  },[])

  return (
    <body>
      <h1>Login Successful</h1>
      <h1>Login Successful: { secret.user }</h1>
      <h1>stock holdings: {secret.purchaseLog.toString()}</h1>
    </body>
  );
}

export default LoginSuccessful;