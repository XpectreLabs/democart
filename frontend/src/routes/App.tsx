import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';

//Routes pages
import { Home } from "../pages/home";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
