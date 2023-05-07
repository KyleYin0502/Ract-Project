import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get("http://localhost:3001").then((res) => {
      if (res.data.Status === "Success") {
        setAuth(true);
        setName(res.data.name);
      } else {
        setAuth(false);
        setMessage(res.data.Message);
      }
    });
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:3001/logout")
      .then((res) => {
        if (res.data.Status === "Success") {
          window.location.reload();
        } else {
          alert("error");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {auth ? (
        <div>
          <h3>Hello {name}</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h3>{message}</h3>
          <h3>Login Now</h3>
        </div>
      )}
    </div>
  );
}
