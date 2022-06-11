import React from 'react'
import ReactDOM from 'react-dom/client'

import "./styles/reset.css"
import "./styles/variables.css"
import "./styles/general.css"
import "./styles/list.css"
import "./styles/scrollbar.css"

import { Route, BrowserRouter, Routes } from "react-router-dom"

// App Routes
import Home from "./pages/Home"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
