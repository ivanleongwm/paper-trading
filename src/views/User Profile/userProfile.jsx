import { useState, useEffect } from "react";
import urlcat from "urlcat";
import { BACKEND } from "../../utils/utils";
import { useNavigate } from "react-router-dom";



function UserProfile() {
  const url1 = urlcat(BACKEND, `/api/users/loginsuccessful/${sessionStorage.getItem("username")}`);

  const [error, setError] = useState("");
  const [colour, setColour] = useState("");
  const [hexColourCode, setHexColourCode] = useState("");
  const [isLogin, setLogin] = useState("Not Logged In");
  const [secret, setSecret] = useState({
    user: "",
    purchaseLog:[],
    stockBalance:[]
  });
  let navigate = useNavigate();

  const loginSuccessCheck = () => {
    fetch(url1, {
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
        setSecret({ ...secret, user: data.username, purchaseLog: data.purchaseLog, stockBalance: data.stockBalance })
        })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loginSuccessCheck()
  },[])

  const loginIsSuccessful = (dataResponse) => {
    if (dataResponse == "Valid password") {
      navigate("/loginsuccessful");
    }
  }

// react frontend  
  const DeleteAccount = (register) => {
    const url = urlcat(BACKEND, `/api/users/${secret.user}`);
    fetch(url, {
      method: "DELETE",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
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
    DeleteAccount();
  };

  return (
    <body>
      <h1>o</h1>
      <div>User: {secret.user}</div>
      <>
        <form onSubmit={handleSubmit}>
          <button>Delete User Account</button>
        </form>
      </>
    </body>
  );
}

export default UserProfile;
