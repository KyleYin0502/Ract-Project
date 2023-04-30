import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/login")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
          setMessage(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        // display error message to user
      });
  });

  return (
    <div>
      {auth ? (
        <div>
          <h3>You are Auth {name}</h3>
          <button>Logout</button>
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
