import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <ScrollToTop>
          <h1>rendering</h1>
          <p>Spacing test</p>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </StrictMode>
  );
}