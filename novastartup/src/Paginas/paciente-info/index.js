import { useState } from "react";
import Layout from "../../Componentes/layout";
import Rodape from "../../Componentes/rodape";
import logo from "../../Componentes/imagens/logo.png";
import fundo from "../../Componentes/imagens/fundo.png";

export default function PacienteInfo() {
  const [doutor, setDoutor] = useState("");

  const estiloCard = {
    width: 160,
    height: 200,
    borderRadius: "100px 100px 16px 16px",
    backgroundColor: "#0D3B1E",
    border: "4px solid transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  const estiloCardHover = {
    ...estiloCard,
    backgroundColor: "#145228",
    border: "4px solid #5FBF82",
    transform: "scale(1.05)",
  };

  const estiloTitulo = {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
    margin: 0,
    textAlign: "center",
  };

  const estiloIcone = {
    fontSize: 60,
    lineHeight: 1,
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div
      style={{
        backgroundImage: `url(${fundo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        .paciente-info-wrapper {
          flex: 1;
          padding: 40px 30px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .paciente-header {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
          gap: 20px;
          position: relative;
          z-index: 10;
        }

        .logo-img {
          width: clamp(70px, 8vw, 90px);
          height: auto;
          filter: drop-shadow(3px 3px 6px rgba(0,0,0,0.3));
        }

        .welcome-text {
          color: white;
          font-size: clamp(16px, 2vw, 24px);
          margin: 0;
          font-weight: 600;
        }

        .dropdown-section {
          margin-bottom: 30px;
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 350px;
        }

        .dropdown-label {
          color: white;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
          display: block;
        }

        .dropdown-select {
          width: 100%;
          padding: 12px 15px;
          border-radius: 8px;
          border: none;
          background-color: #e0e0e0;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
          font-weight: 600;
        }

        .dropdown-select:hover {
          background-color: #d0d0d0;
        }

        .cards-container {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          position: relative;
          z-index: 5;
        }

        .info-card {
          transition: all 0.2s ease;
        }

        .info-card:hover {
          transform: scale(1.05);
        }
      `}</style>

      <Layout>
        <div className="paciente-info-wrapper">
          <div className="paciente-header">
            <img src={logo} alt="Logo" className="logo-img" />
            <p className="welcome-text">Bem vindo (a), Miller</p>
          </div>

          <div className="dropdown-section">
            <label className="dropdown-label">DOUTOR(A)</label>
            <select
              className="dropdown-select"
              value={doutor}
              onChange={(e) => setDoutor(e.target.value)}
            >
              <option value="">selecione</option>
              <option value="dr1">Dr. João Silva</option>
              <option value="dr2">Dra. Maria Santos</option>
              <option value="dr3">Dr. Pedro Costa</option>
            </select>
          </div>

          <div className="cards-container">
            <button
              className="info-card"
              style={hoveredCard === "missoes" ? estiloCardHover : estiloCard}
              onMouseEnter={() => setHoveredCard("missoes")}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => {}}
            >
              <div style={estiloIcone}>🚀</div>
              <p style={estiloTitulo}>MISSÕES</p>
            </button>

            <button
              className="info-card"
              style={hoveredCard === "cuidados" ? estiloCardHover : estiloCard}
              onMouseEnter={() => setHoveredCard("cuidados")}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => {}}
            >
              <div style={estiloIcone}>⚠️</div>
              <p style={estiloTitulo}>CUIDADOS</p>
            </button>

            <button
              className="info-card"
              style={hoveredCard === "duvidas" ? estiloCardHover : estiloCard}
              onMouseEnter={() => setHoveredCard("duvidas")}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => {}}
            >
              <div style={estiloIcone}>❓</div>
              <p style={estiloTitulo}>DÚVIDAS</p>
            </button>
          </div>
        </div>
      </Layout>

      <Rodape />
    </div>
  );
}
