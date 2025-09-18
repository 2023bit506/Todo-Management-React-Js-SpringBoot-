import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Addtodo from './components/Addtodo';
import UpdateTodo from "./components/Updatetodo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtodo" element={<Addtodo />} />
        <Route path="/update/:id" element={<UpdateTodo />} />

      </Routes>
           <Footer />
    </>
  );
}

export default App;
