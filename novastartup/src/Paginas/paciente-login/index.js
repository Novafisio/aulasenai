import { useState } from "react";
import Layout from "../../Componentes/layout";
import fundo from "../../Componentes/imagens/fundo.png";
import Rodape from "../../Componentes/rodape";

export default function Paciente() {
  const [perfil, setPerfil] = useState(null);
  const [cpf, setCpf] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const estiloArco = (p) => ({
    width: 110,
    height: 130,
    borderRadius: "60px 60px 10px 10px",
    backgroundColor: perfil === p ? "#145228" : "#0D3B1E",
    border: perfil === p ? "3px solid #5FBF82" : "3px solid transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    cursor: "pointer",
    transition: "all 0.2s ease",
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