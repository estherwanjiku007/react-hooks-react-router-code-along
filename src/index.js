import React from "react";
import { BrowserRouter,NavLink,Route,Routes } from "react-router-dom";
function Home() {
  return <h1>Home!</h1>;
}


// src/components/About.js
import React from "react";

function About() {
  return <h1>This is my about component!</h1>;
}




// src/components/Login.js
import React from "react";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function NavBar(){
  return (
    <div>
      <NavLink to="/"
      exact
      style={linkStyles}
      activeStyle={{
        background: "darkblue",
      }}
      >
        Home
      </NavLink>
      <NavLink to="/about"
      exact
      style={linkStyles}
      activeStyle={{
        background: "darkblue",
      }}
      > 
      About
      </NavLink>
      <NavLink to="/login"
      exact
      style={linkStyles}
      activeStyle={{
        background: "darkblue",
      }}
      > 
      Login
      </NavLink>
    </div>
  )
}

function App(){
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}
ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
)


// src/components/NavBar.js
