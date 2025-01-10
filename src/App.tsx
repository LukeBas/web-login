//import { useState } from 'react'
import {MainHeader} from "./headers/MainHeader.tsx";
import {useState} from "react";
import './App.css'

function App() {
    const [session] = useState({
        name: "João",
        sector: "Sistemas",
        unity: "Loja Matriz - Espatódeas"
    })
  return (
    <>
        <MainHeader props={session}/>
    </>
  )
}

export default App
