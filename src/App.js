import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Hebergement from "./pages/hebergement";
import Response from "./pages/response";
import Programme from "./pages/programme";
import Location from "./pages/location";
import styled from "styled-components";
import Liste from "./pages/liste";

function App() {
  return (
    <Container>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programme" element={<Programme />} />

          <Route path="/hebergement" element={<Hebergement />} />
          <Route path="/location" element={<Location />} />
          <Route path="/reponse" element={<Response />} />
          <Route path="/liste" element={<Liste />} />
        </Routes>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
