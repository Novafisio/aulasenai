import Home from './Paginas/home';
import Sobre from './Paginas/sobre';
import Cadastro from './Paginas/cadastro';
import Login from './Paginas/login';
import Contato from './Paginas/contato';
import Medico from './Paginas/medico-login';
import Paciente from './Paginas/paciente-login';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import MedicoLogin from './Paginas/medico-login';
import PacienteLogin from './Paginas/paciente-login';
import Pagina2 from './Paginas/solicitações_adm';

function App() {
  return (
    <>

    
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/Sobre' element={<Sobre/>}/>
      <Route path= '/Cadastro' element={<Cadastro/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Contato' element={<Contato/>}/>
      <Route path='/ADM' element={<Pagina2/>}/>
      <Route path='/medico' element={<MedicoLogin/>}/>
      <Route path='/paciente' element={<PacienteLogin/>}/>

    </Routes>
    </BrowserRouter>


    </>
  );
}

export default App;
