import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './componets/Login';
import Market from './componets/Market';
import './index.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/shop" element={<Market />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>,
)
