import React from 'react'
import ReactDOM from 'react-dom/client'

import { Route, BrowserRouter, Routes } from "react-router-dom"

// App Routes
import Home from "./pages/Home"
import Error_404 from "./pages/Error_404"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<Error_404/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
