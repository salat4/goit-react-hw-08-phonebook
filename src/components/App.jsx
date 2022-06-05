import { AppBar } from "./AppBar/AppBar";
import { Register } from "./Register/Register";
import { Login } from "./Login/Login";
import {Contacts} from "pages/Contacts";
import { Routes,Route } from "react-router-dom";
import {Suspense } from "react";
export const App = () =>  {
      return (
      <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path ='/' element = {<AppBar/>} >
            <Route path = '/register'element={<Register/>}/>
            <Route path ='/login' element = {<Login/>}/>
            <Route path = '/contacts' element = {<Contacts/>}/>
          </Route>
        </Routes>
      </Suspense>     
       </div>
    );
  }

