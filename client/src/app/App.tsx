import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.module.scss'
import { ROUTES } from "../constants/routes";
import {Home} from "../pages/Home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.main} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
