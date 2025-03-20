import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { GraduationCap, Apple, Heart } from 'lucide-react';
import { useState } from "react";
import NavBarra from "./components/NavBarra";
import EducaMais from "./pages/EducaMais";
import FomeZero from "./pages/FomeZero";
import ConectSus from "./pages/ConectSus";
import SistemaCard from "./components/SistemaCard";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import EsqueciSenha from "./pages/Esquecisenha"; 
import Footer from "./pages/Footer";

function MainContent({ isAuthenticated, login }) {
  const location = useLocation();
  const isCadastroPage =
    location.pathname === "/cadastro" ||
    location.pathname === "/login" ||
    location.pathname === "/esqueci-senha";

    const systems = [
      { id: 'educa', name: 'Educa Mais', icon: GraduationCap, color: 'blue' },
      { id: 'fome', name: 'Fome 0', icon: Apple, color: 'green' },
      { id: 'sus', name: 'Conect SUS', icon: Heart, color: 'red' }
    ];

  return (
    <main className="main-content">
      {!isCadastroPage && (
        <div className="systems-grid">
          {systems.map((system) => (
            <SistemaCard key={system.id} system={system} />
          ))}
        </div>
      )}

      <div className={isCadastroPage ? "cadastro-full" : "system-content"}>
        <Routes>
          <Route path="/" />
          <Route path="/educa" element={<EducaMais />} />
          <Route path="/fome" element={<FomeZero />} />
          <Route path="/sus" element={<ConectSus />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/esqueci-senha" element={<EsqueciSenha />} />{" "}
         
        </Routes>
      </div>
    </main>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="container">
        <NavBarra />
        <MainContent isAuthenticated={isAuthenticated} login={handleLogin} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
