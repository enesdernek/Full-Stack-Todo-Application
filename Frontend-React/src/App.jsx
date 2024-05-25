

import './App.css'
import Header from './dashboard/Header'
import Dashboard from './dashboard/Dashboard'
import { Routes, Route } from "react-router-dom"
import Login from './components/Login'
import PageNotFound from './components/PageNotFound'
import Home from "./dashboard/Home"
import TodoUpdate from './components/TodoUpdate'
import TodoAdd from './components/TodoAdd'



function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/updatetodo/:id" element={<TodoUpdate />} />
        <Route path="/addtodo/:userName" element={<TodoAdd />} />





      </Routes>
    </>
  )
}

export default App
