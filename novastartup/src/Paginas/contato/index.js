import Rodape from '../../Componentes/rodape';
import fundo from '../../Componentes/imagens/fundo.png';
import Menu from '../../Componentes/menu';

function Contato() {
  return (
    <div
      style={{
        backgroundImage: `url(${fundo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      
      <Menu />

    
      <div
        style={{
          padding: '20px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >

       
        <div
          style={{
            width: '100%',
            maxWidth: '1200px',
            marginBottom: '20px'
          }}
        >
          <h2
            style={{
              color: 'white',
              fontSize: 'clamp(18px, 3vw, 35px)',
              fontWeight: 'bold'
            }}
          >
            Bem vindo(a), Miller
          </h2>
        </div>

        
        <h1
          style={{
            color: 'white',
            fontSize: 'clamp(20px, 7vw, 60px)',
            fontWeight: 'bold',
            width: '100%',
            maxWidth: '1200px',
            marginBottom: '40px'
          }}
        >
          CONTATO
        </h1>
        git pu
        <div
          style={{
            backgroundColor: '#d9d9d9',
            width: '100%',
            maxWidth: '900px',
            borderRadius: '25px',
            padding: '30px',
            color: '#ff4d00',
            fontWeight: 'bold',
            fontSize: 'clamp(16px, 2vw, 28px)',
            lineHeight: '1.6',
            boxSizing: 'border-box'
          }}
        >
          <p style={{ marginBottom: '25px' }}>
            Por gentileza,
          </p>

          <p style={{ marginBottom: '25px' }}>
            Se seu objetivo é mudar de instituição hospitalar,
            entre em contato com nossa empresa pelo e-mail:
            <span style={{ color: '#2da8ff' }}>
              {' '}
             nov4fisio@gmail.com
            </span>
          </p>

          <p>
            Após enviar a mensagem, aguarde a resposta do seu
            médico. Essa ação pode demorar um tempo.
          </p>
        </div>
      </div>

      <Rodape />
    </div>
  );
}

export default Contato;