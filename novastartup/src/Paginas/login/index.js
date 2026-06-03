import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../Componentes/layout";
import fundo from "../../Componentes/imagens/fundo.png";
import Rodape from "../../Componentes/rodape";

export default function Login() {
  const [perfilSelecionado, setPerfilSelecionado] = useState(null);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [hoveredPerfil, setHoveredPerfil] = useState(null);

  const navigate = useNavigate();

  const estiloArco = (perfil) => ({
    width: 180,
    height: 220,
    borderRadius: "100px 100px 16px 16px",
    backgroundColor:
      perfilSelecionado === perfil ? "#145228" : (hoveredPerfil === perfil ? "#145228" : "#0D3B1E"),
    border:
      perfilSelecionado === perfil
        ? "4px solid #5FBF82"
        : (hoveredPerfil === perfil ? "4px solid #5FBF82" : "4px solid transparent"),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    cursor: "pointer",
    transition: "all 0.2s ease",
    transform: hoveredPerfil === perfil ? "scale(1.05)" : "scale(1)",
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

  const fazerLogin = () => {
    if (perfilSelecionado === "paciente") {
      navigate("/paciente");
    }

    if (perfilSelecionado === "medico") {
      navigate("/medico");
    }
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
            padding: "20px",
          }}
        >
          {!perfilSelecionado ? (
            <>
              <h2
                style={{
                  fontWeight: 600,
                  color: "#0D3B1E",
                  marginBottom: 40,
                }}
              >
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
                  onMouseEnter={() => setHoveredPerfil("paciente")}
                  onMouseLeave={() => setHoveredPerfil(null)}
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

                  <p style={estiloTexto}>Paciente</p>
                </button>

                <button
                  style={estiloArco("medico")}
                  onClick={() => setPerfilSelecionado("medico")}
                  onMouseEnter={() => setHoveredPerfil("medico")}
                  onMouseLeave={() => setHoveredPerfil(null)}
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

                  <p style={estiloTexto}>Médico</p>
                </button>
              </div>
            </>
          ) : (
            <div
              style={{
                backgroundColor: "white",
                borderRadius: 16,
                boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                padding: "36px 40px",
                width: "100%",
                maxWidth: 500,
              }}
            >
              <button
                type="button"
                className="btn btn-outline-secondary mb-3"
                onClick={() => setPerfilSelecionado(null)}
              >
                ← Voltar
              </button>

              <h4
                style={{
                  color: "#0D3B1E",
                  fontWeight: 700,
                  marginBottom: 5,
                }}
              >
                Login de{" "}
                {perfilSelecionado === "paciente"
                  ? "Paciente"
                  : "Médico"}
              </h4>

              <p
                style={{
                  color: "#6c757d",
                  marginBottom: 25,
                }}
              >
                Entre com seus dados
              </p>

              <div style={{ marginBottom: 16 }}>
                <label className="form-label">E-mail</label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label className="form-label">Senha</label>

                <div style={{ position: "relative" }}>
                  <input
                    type={mostrarSenha ? "text" : "password"}
                    className="form-control"
                    placeholder="Digite sua senha"
                    style={{ paddingRight: 45 }}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setMostrarSenha(!mostrarSenha)
                    }
                    style={{
                      position: "absolute",
                      right: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    {mostrarSenha ? "👁️" : "🙈"}
                  </button>
                </div>
              </div>

              <button
                className="btn w-100"
                style={{
                  backgroundColor: "#0D3B1E",
                  color: "white",
                  fontWeight: 600,
                }}
                onClick={fazerLogin}
              >
                Entrar
              </button>

              <p
                style={{
                  textAlign: "center",
                  marginTop: 16,
                  fontSize: 13,
                  color: "#6c757d",
                }}
              >
                Não possui uma conta?{" "}
                <a
                  href="/cadastro"
                  style={{
                    color: "#0D3B1E",
                    fontWeight: 600,
                  }}
                >
                  Cadastre-se
                </a>
              </p>
            </div>
          )}
        </div>
      </Layout>

      <Rodape />
    </div>
  );
}