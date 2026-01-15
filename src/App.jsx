import { useState } from "react";
import "./App.css";
import FormularioProduto from "./componentes/FormularioProduto";
import ListaProdutos from "./componentes/ListaProdutos";




function App() {
  const [produtos, setProdutos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [produto, setProduto] = useState({
    nome: "",
    preco: "",
    descricao: "",
    imagem: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editIndex !== null) {
      const novosProdutos = [...produtos];
      novosProdutos[editIndex] = produto;
      setProdutos(novosProdutos);
      setEditIndex(null);
    } else {
      setProdutos([...produtos, produto]);
    }

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

      <ListaProdutos
        produtos={produtos}
        onDelete={handleDelete}
      />
    </div>
  );
}
export default App;
