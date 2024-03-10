import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './components/Main';
import EachItem from './components/EachItem';
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/products/:id" element={<EachItem />} />
                </Routes>
            </BrowserRouter>
        </div>
  )
}

export default App