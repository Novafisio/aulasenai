export default function Formulario() {
  return (
    <>
      <div className="container mt-3 w-50 mx-auto">

        <h2>Cadastrar-se</h2>

        <form action="/action_page.php">

          <div className="mb-3 mt-3">
            <label htmlFor="text">Nome Completo</label>
            <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" />
          </div>
          <div className="mb-3 mt-3">
            <label for="number">Celular</label>
            <input type="tel" className="form-control" id="number" placeholder="Enter number" name="number" />
          </div>
          <div className="mb-3 mt-3">
            <label for="email">CPF</label>
            <input type="number" className="form-control" id="cpf" placeholder="Enter CPF" name="cpf" />
          </div>
          <div className="mb-3 mt-3">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
          </div>
          <div className="mb-3">
            <label for="pwd">Senha</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
          </div>
          <div className="form-check mb-3">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="remember" /> Lembre de Mim
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Cadastrar</button>
        </form>
      </div>
    </>
  )
}
