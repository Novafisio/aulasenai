import logo from '../../Imagens/logo.png';

function Pagina2() {
  return (
    <div className="min-vh-100 d-flex flex-column position-relative overflow-hidden" 
         style={{ backgroundColor: '#4caf50' }}>
      
      <style>{`
        .bg-custom-header { 
          background-color: #66c24f; 
        }
        
        .decor-left {
          position: absolute;
          bottom: 15%;
          left: 0;
          width: 160px;
          height: 60%;
          background-color: #66c24f;
          border-radius: 0 140px 140px 0;
          z-index: 0;
          opacity: 0.5;
        }
        .decor-right {
          position: absolute;
          top: 20%;
          right: 0;
          width: 160px;
          height: 60%;
          background-color: #66c24f;
          border-radius: 140px 0 0 140px;
          z-index: 0;
          opacity: 0.5;
        }

        .txt-line-long {
          background-color: white;
          height: 4px;
          width: 100%;
          border-radius: 2px;
        }
        .txt-line-short {
          background-color: white;
          height: 4px;
          width: 60%;
          border-radius: 2px;
        }

        .btn-indicator {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: bold;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        .title {
          font-size: 3rem;
          font-weight: 800;
          letter-spacing: 3px;
          text-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
      `}</style>

      <div className="decor-left"></div>
      <div className="decor-right"></div>

      <header className="bg-custom-header py-3 px-5 position-relative z-1">
        <span className="text-white fs-4 fw-normal">Administrador</span>
      </header>

      <main className="flex-grow-1 p-5 position-relative z-1 container">
        
        <div className="d-flex align-items-center mb-5 gap-4">
          <img 
            src={logo}
            alt="logo"
            style={{ 
              width: '190px',
              height: '190px',
              objectFit: 'contain',
              filter: 'drop-shadow(0px 6px 15px rgba(0,0,0,0.3))'
            }}
          />
          <h2 className="title text-white m-0">SOLICITAÇÕES</h2>
        </div>

        <div className="row justify-content-center g-5">
          
          <div className="col-12 col-md-5 border-end border-white border-3 pe-md-5">
            
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="flex-grow-1 me-4">
                <div className="txt-line-long mb-2"></div>
                <div className="txt-line-short"></div>
              </div>
              <div className="d-flex gap-2">
                <span className="btn-indicator bg-success">✓</span>
                <span className="btn-indicator bg-danger">✕</span>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="flex-grow-1 me-4">
                <div className="txt-line-long mb-2"></div>
                <div className="txt-line-short"></div>
              </div>
              <div className="d-flex gap-2">
                <span className="btn-indicator bg-success">✓</span>
                <span className="btn-indicator bg-danger">✕</span>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="flex-grow-1 me-4">
                <div className="txt-line-long mb-2"></div>
                <div className="txt-line-short"></div>
              </div>
              <div className="d-flex gap-2">
                <span className="btn-indicator bg-success">✓</span>
                <span className="btn-indicator bg-danger">✕</span>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="flex-grow-1 me-4">
                <div className="txt-line-long mb-2"></div>
                <div className="txt-line-short"></div>
              </div>
              <div className="d-flex gap-2">
                <span className="btn-indicator bg-success">✓</span>
                <span className="btn-indicator bg-danger">✕</span>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="flex-grow-1 me-4">
                <div className="txt-line-long mb-2"></div>
                <div className="txt-line-short"></div>
              </div>
              <div className="d-flex gap-2">
                <span className="btn-indicator bg-success">✓</span>
                <span className="btn-indicator bg-danger">✕</span>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="flex-grow-1 me-4">
                <div className="txt-line-long mb-2"></div>
                <div className="txt-line-short"></div>
              </div>
              <div className="d-flex gap-2">
                <span className="btn-indicator bg-success">✓</span>
                <span className="btn-indicator bg-danger">✕</span>
              </div>
            </div>

          </div>

          <div className="col-12 col-md-5 ps-md-5">
            
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="flex-grow-1 me-4">
                <div className="txt-line-long mb-2"></div>
                <div className="txt-line-short"></div>
              </div>
              <div className="d-flex gap-2">
                <span className="btn-indicator bg-success">✓</span>
                <span className="btn-indicator bg-danger">✕</span>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="flex-grow-1 me-4">
                <div className="txt-line-long mb-2"></div>
                <div className="txt-line-short"></div>
              </div>
              <div className="d-flex gap-2">
                <span className="btn-indicator bg-success">✓</span>
                <span className="btn-indicator bg-danger">✕</span>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="flex-grow-1 me-4">
                <div className="txt-line-long mb-2"></div>
                <div className="txt-line-short"></div>
              </div>
              <div className="d-flex gap-2">
                <span className="btn-indicator bg-success">✓</span>
                <span className="btn-indicator bg-danger">✕</span>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="flex-grow-1 me-4">
                <div className="txt-line-long mb-2"></div>
                <div className="txt-line-short"></div>
              </div>
              <div className="d-flex gap-2">
                <span className="btn-indicator bg-success">✓</span>
                <span className="btn-indicator bg-danger">✕</span>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="flex-grow-1 me-4">
                <div className="txt-line-long mb-2"></div>
                <div className="txt-line-short"></div>
              </div>
              <div className="d-flex gap-2">
                <span className="btn-indicator bg-success">✓</span>
                <span className="btn-indicator bg-danger">✕</span>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="flex-grow-1 me-4">
                <div className="txt-line-long mb-2"></div>
                <div className="txt-line-short"></div>
              </div>
              <div className="d-flex gap-2">
                <span className="btn-indicator bg-success">✓</span>
                <span className="btn-indicator bg-danger">✕</span>
              </div>
            </div>

          </div>
        </div>
      </main>

      <footer className="text-center py-3 position-relative z-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
        <span className="small text-white">
          © Desenvolvido por <strong>NOVAstartup</strong>
        </span>
      </footer>
    </div>
  );
}

export default Pagina2;