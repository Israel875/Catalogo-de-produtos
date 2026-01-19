import { useState, useEffect } from "react";
import "./App.css";
import FormularioProduto from "./componentes/FormularioProduto";
import ListaProdutos from "./componentes/ListaProdutos";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [produto, setProduto] = useState({
    nome: "",
    preco: "",
    descricao: "",
    imagem: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProdutos([]);
      setLoading(false);
    }, 1500);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setProduto({
      ...produto,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!produto.nome || !produto.preco || !produto.descricao) {
      alert("Preencha nome, preço e descrição");
      return;
    }

    if (Number(produto.preco) <= 0) {
      alert("O preço deve ser maior que zero");
      return;
    }

    setProdutos([...produtos, produto]);

    setProduto({
      nome: "",
      preco: "",
      descricao: "",
      imagem: ""
    });
  }

  function handleDelete(index) {
    if (!window.confirm("Deseja excluir este produto?")) return;
    setProdutos(produtos.filter((_, i) => i !== index));
  }

  return (
    <div className="App">
      <h1>Catálogo de Produtos</h1>

      <FormularioProduto
        produto={produto}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <ListaProdutos produtos={produtos} onDelete={handleDelete} />
      )}
    </div>
  );
}

export default App;


