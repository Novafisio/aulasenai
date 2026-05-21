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
                minHeight: '100vh'
            }}
        >
            <Menu/>
            <Rodape />
        </div>
    );
}

export default Contato;