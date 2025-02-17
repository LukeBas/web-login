//import { useState } from 'react'
import {MainHeader} from "./headers/MainHeader.tsx";
import {useState} from "react";
import './App.css'
import {LoginBody} from "./bodies/LoginBody.tsx";
import {MenuHeader} from "./headers/MenuHeader.tsx";

function App() {
    const [login, setLogin] = useState(false);
    const [session] = useState({
        name: "João",
        sector: "Sistemas",
        unity: "Loja Matriz - Espatódeas"
    })
    const changeLogin = (value: boolean) => {
        setLogin(value);
    }
  return (
    <>
        {login &&
            /*CORPO PRINCIPAL DA APLICAÇÃO*/
            <>
                <MainHeader props={session} changeLogin={changeLogin}/>
                <MenuHeader/>
            </>
        }
        {!login && <LoginBody changeLogin={changeLogin}/>}
    </>
  )
}

export default App
