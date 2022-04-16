import { useState } from "react";
import urlcat from "urlcat";
import { BACKEND } from "../../../utils/utils";

const url = urlcat(BACKEND, "/api/users/register");

function Register() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [cfmPassword, setCfmPassword] =  useState("")

  const registerAccount = (register) => {
    fetch(url, {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const register = { username, email, password };
    registerAccount(register);
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
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
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
          <button>Create</button>
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

export default Register;
