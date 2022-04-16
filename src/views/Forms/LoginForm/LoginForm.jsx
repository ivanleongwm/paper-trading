import { useState, useEffect } from "react";
import urlcat from "urlcat";
import { BACKEND } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";

const url = urlcat(BACKEND, "/api/users/login");

function Login() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setLogin] = useState("Not Logged In");
  let navigate = useNavigate();

  const loginIsSuccessful = (dataResponse) => {
    if (dataResponse == "Valid password") {
      navigate("/");
    }
  }

// react frontend  
  const LoginAccount = (register) => {
    fetch(url, {
      method: "POST",
      credentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        loginIsSuccessful(data.message)
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const login = { username, password };
    LoginAccount(login);
  };

  return (
    <body>
      <h1>Welcome to Paper Trading</h1>
      <>
        <form onSubmit={handleSubmit}>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <br />
          Password:
          <input
            type="text"
            name="email"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <p>{error}</p>
          <br />
          <button>Log in</button>
        </form>
      </>
      {/* <form action="/register" method="POST">
            <fieldset>
              <label for="username">Username</label>
              <input id="username" name="username" placeholder="Username" />
              <br/>
              <br/>
              <label for="email">Email Adress</label>
              <input id="email" name="email" placeholder="Email" />
              <br/>
              <br/>
              <label for="password">Password</label>
              <input id="password" name="password" placeholder="Password" />
              <br/>
              <br/>
              <label for="cfmPassword">Confirm Password</label>
              <input id="cfmPassword" name="cfmPassword" placeholder="Confirm Password" />
            </fieldset>
            <input type="submit" value="Create" />
          </form> */}
    </body>
  );
}

export default Login;
