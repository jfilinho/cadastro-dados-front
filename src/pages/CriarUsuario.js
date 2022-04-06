import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../apis/api";
import FormField from "../components/Form";

function CriarUsuario() {
  const [usuario, SetUsuario] = useState({
    Nome: "",
    Idade: "",
    estadoCivil: "",
    cpf: "",
    Cidade: "",
    Estado: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleChange(e) {
    SetUsuario({ ...usuario, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await api.post("/cadastrar-usuario", {
        ...usuario,
      });
      navigate("/lista");

      console.log(response);

      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <div>
      <div>
        <div className="container cadastro">
          <form onSubmit={handleSubmit}>
            <h1 className="titulos">Criar Tabela</h1>
            {/* campo do titulo */}
            <div className=" mb-3 ">
              <FormField
                label="Nome"
                type="text"
                id="Nome"
                name="Nome"
                onChange={handleChange}
                value={usuario.Nome}
                required
                readOnly={loading}
              />
            </div>

            {/* campo do Author */}
            <div className=" mb-3">
              <FormField
                label="Idade"
                type="number"
                id="Idade"
                name="Idade"
                onChange={handleChange}
                value={usuario.Idade}
                required
                readOnly={loading}
              />
            </div>

            {/* campo sinopse do livro */}
            <div className=" mb-3">
              <FormField
                label="Estado Civil"
                type="text"
                id="estadoCivil"
                name="estadoCivil"
                onChange={handleChange}
                value={usuario.estadoCivil}
                required
                readOnly={loading}
              />
            </div>

            {/* campo Ano do livro */}
            <div className="mb-3">
              <FormField
                label="CPF"
                type="number"
                id="cpf"
                name="cpf"
                onChange={handleChange}
                value={usuario.cpf}
                required
                readOnly={loading}
              />
            </div>

            {/* campo Gênero do livro */}
            <div className=" mb-3">
              <FormField
                label="Cidade"
                id="Cidade"
                name="Cidade"
                onChange={handleChange}
                value={usuario.Cidade}
                required
                readOnly={loading}
              />
            </div>
            {/* campo imagem do livro */}
            <div className="mb-3">
              <FormField
                type="text"
                label="Estado"
                id="Estado"
                name="Estado"
                onChange={handleChange}
                value={usuario.Estado}
                readOnly={loading}
              />
            </div>

            <div>
              <button
                disabled={loading}
                type="submit"
                className="btn-primary mb-3"
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>{" "}
                    <span>Carregando...</span>{" "}
                  </>
                ) : (
                  "Ciar"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CriarUsuario;
