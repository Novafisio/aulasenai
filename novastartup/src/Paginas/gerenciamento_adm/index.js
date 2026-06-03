import logo from '../../Imagens/logo.png';

function Pagina3() {
  return (
    <div className="min-vh-100 d-flex flex-column position-relative overflow-hidden" style={{ backgroundColor: '#10b15a' }}>
      
      <style>{`
        .bg-header { background-color: #7ed957; }
        .circle-card {
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: linear-gradient(145deg, #0d4d2b, #0a3d22);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          transition: 0.3s;
          box-shadow: 0px 10px 30px rgba(0,0,0,0.3);
          cursor: pointer;
        }
        .circle-card:hover { transform: scale(1.08); }
        .icon { fontSize: 80px; margin-bottom: 20px; }
        .footer-custom { background-color: #7ed957; }
        .decor-left, .decor-right {
          position: absolute;
          width: 200px; height: 200px;
          background-color: #a3e635;
        }
        .decor-left { left: 0; bottom: 0; border-top-right-radius: 200px; }
        .decor-right { right: 0; top: 80px; border-bottom-left-radius: 200px; }
      `}</style>

      <header className="bg-header py-3 px-5">
        <span className="text-white fs-4">Administrador</span>
      </header>

      <div className="decor-left"></div>
      <div className="decor-right"></div>

      <main className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center position-relative z-1">
        
        <div className="d-flex flex-column align-items-center mb-5">
          <img 
            src={logo}
            alt="logo"
            style={{ 
              width: '540px',
              height: '140px',
              objectFit: 'contain',
              filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.25))'
            }}
          />
          <h1 
            className="text-white fw-bold m-0"
            style={{ letterSpacing: '4px', fontSize: '42px', textShadow: '0px 4px 10px rgba(0,0,0,0.3)' }}
          >
            GERENCIAMENTO
          </h1>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-5">
          <div className="circle-card">
            <div className="icon"><i className="bi bi-person-heart"></i></div>
            <h3>PACIENTE</h3>
          </div>

          <div className="circle-card">
            <div className="icon"><i className="bi bi-person-badge"></i></div>
            <h3>MÉDICO</h3>
          </div>

          <div className="circle-card">
            <div className="icon"><i className="bi bi-hospital"></i></div>
            <h3>INSTITUIÇÕES</h3>
          </div>
        </div>
      </main>

      <footer className="footer-custom text-center py-2">
        <span className="text-white">
          © Desenvolvido por <strong>NOVAstartup</strong>
        </span>
      </footer>
    </div>
  );
}

export default Pagina3;