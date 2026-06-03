import logo from "../../Imagens/logo2.png";

export default function Contato() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#08c46a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "-120px",
          top: "180px",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          backgroundColor: "#9BE248",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: "-120px",
          top: "220px",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          backgroundColor: "#9BE248",
        }}
      />


      <div className="container-fluid py-3">
        <div className="d-flex justify-content-between align-items-start">
          
          <div className="d-flex align-items-center gap-3">
            <img 
              src={logo}
              alt="Logo"
              style={{
                width: "clamp(65px, 9vw, 95px)",
                height: "auto",
                filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.25))"
              }}
            />

            <div>
              <p
                className="text-white mb-1"
                style={{ fontSize: "clamp(14px, 2vw, 26px)" }}
              >
                Bem vindo (a), Dr. Miller
              </p>

              <h1
                className="fw-bold text-white mb-0"
                style={{
                  fontSize: "clamp(45px, 8vw, 90px)",
                  textShadow: "3px 3px 5px rgba(0,0,0,0.2)",
                }}
              >
                CONTATO
              </h1>
            </div>
          </div>

          <button
            className="btn text-white"
            style={{ fontSize: "clamp(30px, 4vw, 50px)" }}
          >
            ☰
          </button>
        </div>
      </div>

      <div className="container mt-4 d-flex justify-content-center">
        <div
          className="card border-0 shadow-lg"
          style={{
            width: "100%",
            maxWidth: "880px",
            borderRadius: "35px",
            backgroundColor: "#f4f4f4",
            margin: "0 15px",
          }}
        >
          <div className="card-body p-5">
            <h4 
              className="fw-bold mb-4" 
              style={{ color: "#F05A33", fontSize: "1.35rem" }}
            >
              Por gentileza,
            </h4>

            <p
              className="fw-bold"
              style={{
                color: "#F05A33",
                fontSize: "clamp(16px, 2.1vw, 28px)",
                lineHeight: "1.35",
              }}
            >
              Se seu objetivo é mudar de instituição hospitalar ou se desligar-se dela, 
              entre em contato com nossa empresa pelo e-mail e nos informe sua situação:
              <span style={{ color: "#1e88e5" }}>
                {" "} jsewçiehhfiew@gmail.com
              </span>
            </p>

            <p
              className="fw-bold mt-4"
              style={{
                color: "#F05A33",
                fontSize: "clamp(16px, 2.1vw, 28px)",
                lineHeight: "1.35",
              }}
            >
              Após enviar a mensagem, aguarde a resposta do seu médico. Essa ação pode demorar um tempo.
            </p>
          </div>
        </div>
      </div>

      <footer
        className="text-center text-white"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "#9BE248",
          padding: "12px",
          fontSize: "clamp(14px, 2vw, 22px)",
        }}
      >
        © Desenvolvido por NOVAstartup
      </footer>
    </div>
  );
}