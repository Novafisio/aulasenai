import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ ADICIONADO: hook para navegação
import Layout from "../../Componentes/layout";
import fundo from "../../Componentes/imagens/fundo.png";
import Rodape from "../../Componentes/rodape";

export default function Login() {
  const [perfilSelecionado, setPerfilSelecionado] = useState(null);

  const navigate = useNavigate();

  const estiloArco = (perfil) => ({
    width: 180,
    height: 220,
    borderRadius: "100px 100px 16px 16px",
    backgroundColor:
      perfilSelecionado === perfil ? "#145228" : "#0D3B1E",
    border:
      perfilSelecionado === perfil
        ? "4px solid #5FBF82"
        : "4px solid transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    cursor: "pointer",
    transition: "all 0.2s ease",
  });

  const estiloTexto = {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
    margin: 0,
  };

  const estiloIcone = {
    width: 80,
    height: 80,
    fill: "white",
  };

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
      <Layout>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
            padding: "20px 0",
          }}
        >
          <h2 style={{ fontWeight: 600, color: "#0D3B1E" }}>
            Como deseja entrar?
          </h2>

          <div
            style={{
              display: "flex",
              gap: 32,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <button
              style={estiloArco("paciente")}
              onClick={() => setPerfilSelecionado("paciente")}
            >
              <svg style={estiloIcone} viewBox="0 0 100 100">
                <circle cx="50" cy="22" r="14" />
                <path d="M20 85 Q20 55 50 55 Q80 55 80 85Z" />
                <circle cx="62" cy="62" r="13" fill="#0D3B1E" />
                <path
                  d="M56 62 h12 M62 56 v12"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <p style={estiloTexto}>paciente</p>
            </button>

            <button
              style={estiloArco("medico")}
              onClick={() => setPerfilSelecionado("medico")}
            >
              <svg style={estiloIcone} viewBox="0 0 100 100">
                <circle cx="50" cy="22" r="14" />
                <path d="M22 100 Q22 58 50 58 Q78 58 78 100Z" />
                <path
                  d="M36 67 C29 71 26 81 29 89 C32 97 40 99 41 91 C42 83 40 73 36 67Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <circle cx="41" cy="91" r="5" />
              </svg>
              <p style={estiloTexto}>médico</p>
            </button>
          </div>

          {perfilSelecionado && (
            <button
              className="btn btn-success"
              style={{ paddingLeft: 40, paddingRight: 40, fontSize: 16 }}
              onClick={() => {
                if (perfilSelecionado === "paciente") {
                  navigate("/paciente");
                }

                if (perfilSelecionado === "medico") {
                  navigate("/medico");
                }
              }}
            >
              Continuar como {perfilSelecionado}
            </button>
          )}
        </div>
      </Layout>

      <Rodape />
    </div>
  );
}