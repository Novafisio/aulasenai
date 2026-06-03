import { Link } from "react-router-dom";
import logo from "../imagens/logo.png"
export default function Menu() {
  return (
    <>

    <nav className="navbar navbar-expand-sm navbar-dark bg-success py-0 ">
  <div className="container-fluid">
    <a className="navbar-brand" href="javascript:void(0)">
      <img src={logo} height={40}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav" style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', width: '100%' }}>
        <li className="nav-item">
          <Link className="nav-link" to="/"> Inicio</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link"> |</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Cadastro"> Cadastro</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link"> |</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Login"> Login</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link"> |</a>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/ADM"> Gerenciamento</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link"> |</a>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/Contato"> Contato </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}
