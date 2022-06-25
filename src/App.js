import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <h1>rendering</h1>
      </BrowserRouter>
    </StrictMode>
  );
}