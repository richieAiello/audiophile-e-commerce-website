import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <h1>rendering</h1>
        <p>Spacing test</p>
        <Footer />
      </BrowserRouter>
    </StrictMode>
  );
}