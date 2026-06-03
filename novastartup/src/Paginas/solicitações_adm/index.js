import Layout from "../../Componentes/layout";
import Rodape from "../../Componentes/rodape";
import fundo from "../../Componentes/imagens/fundo.png";

export default function SolicitacoesAdm() {
  const SolicitacaoItem = () => (
    <div className="d-flex align-items-center justify-content-between mb-4">
      <div className="flex-grow-1 me-4">
        <div className="txt-line-long mb-2"></div>
        <div className="txt-line-short"></div>
      </div>
      <div className="d-flex gap-2">
        <button className="btn-action btn-approve" title="Aceitar">
          ✓
        </button>
        <button className="btn-action btn-reject" title="Recusar">
          ✕
        </button>
      </div>
    </div>
  );

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
        .page-wrapper {
          background: transparent !important;
          min-height: 100vh !important;
          display: flex !important;
          flex-direction: column !important;
        }

        .page-wrapper main {
          background: transparent !important;
          flex: 1 !important;
        }

        .solicitations-wrapper {
          position: relative;
          overflow: hidden;
          padding: 2rem;
        }

        .solicitations-wrapper::before {
          content: '';
          position: absolute;
          top: -50px;
          right: -100px;
          width: 250px;
          height: 250px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          z-index: 0;
        }

        .solicitations-wrapper::after {
          content: '';
          position: absolute;
          bottom: 50px;
          left: -80px;
          width: 200px;
          height: 200px;
          background-color: rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          z-index: 0;
        }

        .content-wrapper {
          position: relative;
          z-index: 1;
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

        .btn-action {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          border: 2px solid white;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.25);
        }

        .btn-approve {
          background-color: #28a745;
          color: white;
        }

        .btn-approve:hover {
          background-color: #218838;
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.35);
        }

        .btn-approve:active {
          transform: scale(0.95);
        }

        .btn-reject {
          background-color: #dc3545;
          color: white;
        }

        .btn-reject:hover {
          background-color: #c82333;
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.35);
        }

        .btn-reject:active {
          transform: scale(0.95);
        }

        .title {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }

        .container-fluid.bg-success {
          background: linear-gradient(135deg, #4caf50 0%, #45a049 100%) !important;
        }
      `}</style>

      <Layout>
        <div className="solicitations-wrapper">
          <div className="content-wrapper">
            <div className="d-flex align-items-center mb-5 gap-4">
              <h2 className="title text-white m-0">SOLICITAÇÕES</h2>
            </div>

            <div className="row justify-content-center g-5">
              <div className="col-12 col-md-5 border-end border-white border-3 pe-md-5">
                <SolicitacaoItem />
                <SolicitacaoItem />
                <SolicitacaoItem />
                <SolicitacaoItem />
                <SolicitacaoItem />
                <SolicitacaoItem />
              </div>

              <div className="col-12 col-md-5 ps-md-5">
                <SolicitacaoItem />
                <SolicitacaoItem />
                <SolicitacaoItem />
                <SolicitacaoItem />
                <SolicitacaoItem />
                <SolicitacaoItem />
              </div>
            </div>
          </div>
        </div>
      </Layout>

      <Rodape />
    </div>
  );
}