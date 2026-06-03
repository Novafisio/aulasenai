import { useState } from "react";
import Layout from "../../Componentes/layout";
import fundo from "../../Componentes/imagens/fundo.png";
import Rodape from "../../Componentes/rodape";

export default function Cadastro() {
  const [perfil, setPerfil] = useState(null);
  const [cpf, setCpf] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [hoveredPerfil, setHoveredPerfil] = useState(null);

  const estiloArco = (p) => ({
    width: 180,
    height: 220,
    borderRadius: "100px 100px 16px 16px",
    backgroundColor: perfil === p ? "#145228" : (hoveredPerfil === p ? "#145228" : "#0D3B1E"),
    border: perfil === p ? "4px solid #5FBF82" : (hoveredPerfil === p ? "4px solid #5FBF82" : "4px solid transparent"),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    cursor: "pointer",
    transition: "all 0.2s ease",
    transform: hoveredPerfil === p ? "scale(1.05)" : "scale(1)",
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

  const mascararCPF = (valor) => {
    return valor
      .replace(/\D/g, "")
      .slice(0, 11)
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  const handleCPF = (e) => {
    setCpf(mascararCPF(e.target.value));
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
            justifyContent: "center",
            alignItems: "center",
            padding: "30px 20px",
          }}
        >
          {/* TELA DE ESCOLHA */}
          {!perfil && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 40,
              }}
            >
              <h2
                style={{
                  fontWeight: 600,
                  color: "#0D3B1E",
                }}
              >
                Como deseja se cadastrar?
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
                  onClick={() => setPerfil("paciente")}
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
                  onClick={() => setPerfil("medico")}
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
            </div>
          )}

          {/* FORMULÁRIO */}
          {perfil && (
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
                onClick={() => setPerfil(null)}
              >
                ← Voltar
              </button>

              <h4
                style={{
                  color: "#0D3B1E",
                  fontWeight: 700,
                }}
              >
                Criar conta como{" "}
                {perfil === "paciente" ? "Paciente" : "Médico"}
              </h4>

              <p
                style={{
                  color: "#6c757d",
                  fontSize: 14,
                  marginBottom: 24,
                }}
              >
                Preencha os dados abaixo
              </p>

              <div style={{ marginBottom: 16 }}>
                <label className="form-label">Nome Completo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Seu nome completo"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 12,
                  marginBottom: 16,
                }}
              >
                <div style={{ flex: 1 }}>
                  <label className="form-label">CPF</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={handleCPF}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <label className="form-label">Celular</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label className="form-label">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="exemplo@email.com"
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label className="form-label">Senha</label>

                <div style={{ position: "relative" }}>
                  <input
                    type={mostrarSenha ? "text" : "password"}
                    className="form-control"
                    placeholder="Mínimo 8 caracteres"
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
              >
                Criar conta
              </button>
            </div>
          )}
        </div>
      </Layout>

      <Rodape />
    </div>
  );
}