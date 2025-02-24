import { useState } from "react";

const App = () => {
  // Add our useStates here 
  const [username, setUsername] = useState("");
  const [password,setPassword] = useState("");

  // promises -> pending, success, failed
  const handleButton = async () => {
    try {
      const response = await fetch('http://localhost:8000/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginForm = {username, password}

    try {
      const response = await fetch('http://localhost:8000/login', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(loginForm),
    });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  };
  
  return(
    <div>
      <button onClick={handleButton}> CLICK ME PLZ </button>
      <p>---------------------------------------------------</p>
      <form onSubmit={handleLogin}> 
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e)=>{setUsername(e.target.value)}}
        /> 
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        /> 
        <button type="submit"> Login</button>
      </form>
    </div>
    )
  };
  

export default App;
