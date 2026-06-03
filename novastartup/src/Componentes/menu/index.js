import { Link } from "react-router-dom";
import logo from "../imagens/logo.png"
export default function Menu() {
  return (
    <>

    <nav className="navbar navbar-expand-sm navbar-dark bg-success py-0">
  <div className="container-fluid">
    <a className="navbar-brand" href="javascript:void(0)">
      <img src={logo} height={40}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/"> Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ADM"> Teste</Link>
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
          <a className="nav-link" href="javascript:void(0)"> Gerenciamento</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"> |</a>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/Contato"> Contato </Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Pesquise"/>
        <button className="btn btn-success" type="button">🔍</button>
      </form>
    </div>
  </div>
</nav>

    </>
  );
}
