import { useState } from "react";
import Layout from "../../Componentes/layout";
import fundo from "../../Componentes/imagens/fundo.png";
import Rodape from "../../Componentes/rodape";

export default function Paciente() {
  const [perfil, setPerfil] = useState(null);
  const [cpf, setCpf] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [hoveredPerfil, setHoveredPerfil] = useState(null);

  const estiloArco = (p) => ({
    width: 110,
    height: 130,
    borderRadius: "60px 60px 10px 10px",
    backgroundColor: perfil === p ? "#145228" : (hoveredPerfil === p ? "#145228" : "#0D3B1E"),
    border: perfil === p ? "3px solid #5FBF82" : (hoveredPerfil === p ? "3px solid #5FBF82" : "3px solid transparent"),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    cursor: "pointer",
    transition: "all 0.2s ease",
    transform: hoveredPerfil === p ? "scale(1.05)" : "scale(1)",
  });

  const handleCPF = (e) => {
    setCpf(mascararCPF(e.target.value));
  };

  const mascararCPF = (valor) => {
    return valor
      .replace(/\D/g, "")
      .slice(0, 11)
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${fundo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Layout>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: "20px 0",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 16,
              boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
              padding: "36px 40px",
              width: "100%",
              maxWidth: 480,
            }}
          >
            {/* Cabeçalho */}
            <h4
              style={{
                color: "#0D3B1E",
                fontWeight: 700,
                marginBottom: 4,
              }}
            >
              Entrar em conta
            </h4>

            <p
              style={{
                color: "#6c757d",
                fontSize: 14,
                marginBottom: 24,
              }}
            >
              Preencha os dados abaixo para entrar
            </p>

            {/* Seleção de perfil */}
            <p
              style={{
                fontWeight: 500,
                color: "#0D3B1E",
                marginBottom: 10,
                fontSize: 14,
              }}
            >
             
            </p>

            {/* BOTÕES CENTRALIZADOS */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <button
                style={{
                  width: 80,
                  height: 100,
                  borderRadius: "50px 50px 8px 8px",
                  backgroundColor: perfil === "paciente" ? "#145228" : (hoveredPerfil === "paciente" ? "#145228" : "#0D3B1E"),
                  border: perfil === "paciente" ? "3px solid #5FBF82" : (hoveredPerfil === "paciente" ? "3px solid #5FBF82" : "3px solid transparent"),
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  transform: hoveredPerfil === "paciente" ? "scale(1.05)" : "scale(1)",
                }}
                onClick={() => setPerfil("paciente")}
                onMouseEnter={() => setHoveredPerfil("paciente")}
                onMouseLeave={() => setHoveredPerfil(null)}
              >
                <svg width={40} height={40} viewBox="0 0 100 100" fill="white">
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
                <span
                  style={{
                    color: "white",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  paciente
                </span>
              </button>

              <button
                style={{
                  width: 80,
                  height: 100,
                  borderRadius: "50px 50px 8px 8px",
                  backgroundColor: perfil === "medico" ? "#145228" : (hoveredPerfil === "medico" ? "#145228" : "#0D3B1E"),
                  border: perfil === "medico" ? "3px solid #5FBF82" : (hoveredPerfil === "medico" ? "3px solid #5FBF82" : "3px solid transparent"),
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  transform: hoveredPerfil === "medico" ? "scale(1.05)" : "scale(1)",
                }}
                onClick={() => setPerfil("medico")}
                onMouseEnter={() => setHoveredPerfil("medico")}
                onMouseLeave={() => setHoveredPerfil(null)}
              >
                <svg width={40} height={40} viewBox="0 0 100 100" fill="white">
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
                <span
                  style={{
                    color: "white",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  médico
                </span>
              </button>
            </div>

            {/* Formulário */}
            <div style={{ marginBottom: 16 }}>
              <label
                htmlFor="name"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#0D3B1E",
                }}
              >
                CPF
              </label>

              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Informe seu CPF"
                style={{
                  marginTop: 4,
                  borderColor: "#0D3B1E",
                }}
              />
          
                
        
            </div>

            {/* SENHA COM OLHO */}
            <div style={{ marginBottom: 24 }}>
              <label
                htmlFor="senha"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#0D3B1E",
                }}
              >
                Senha
              </label>

              <div
                style={{
                  position: "relative",
                  marginTop: 4,
                }}
              >
                <input
                  type={mostrarSenha ? "text" : "password"}
                  id="senha"
                  name="senha"
                  className="form-control"
                  placeholder="Mínimo 8 caracteres"
                  style={{
                    borderColor: "#0D3B1E",
                    paddingRight: 45,
                  }}
                />

                <button
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    color: "#0D3B1E",
                    fontSize: 18,
                  }}
                >
                  {mostrarSenha ? "👁️" : "🙈"} 
                </button>
              </div>
            </div>

          
            
              

          </div>
        </div>
      </Layout>

      <Rodape />
    </div>
  );
}