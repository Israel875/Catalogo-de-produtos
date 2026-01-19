function FormularioProduto({ produto, onChange, onSubmit }) {
  return (
    <form className="form-base" onSubmit={onSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Nome do produto"
        value={produto.nome}
        onChange={onChange}
      />

      <input
        type="number"
        name="preco"
        placeholder="Preço"
        value={produto.preco}
        onChange={onChange}
      />

      <input
        type="text"
        name="descricao"
        placeholder="Descrição"
        value={produto.descricao}
        onChange={onChange}
      />

      <input
        type="text"
        name="imagem"
        placeholder="URL da imagem"
        value={produto.imagem}
        onChange={onChange}
      />

      <button type="submit">Salvar Produto</button>
    </form>
  );
}

export default FormularioProduto;



