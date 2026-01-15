
function FormularioProduto({ produto, onChange, onSubmit }) {
  return (
    <form className="form-base" onSubmit={onSubmit}>
      <div>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          value={produto.nome}
          onChange={onChange}
        />
      </div>

      <div>
        <label>Preço</label>
        <input
          type="text"
          name="preco"
          value={produto.preco}
          onChange={onChange}
        />
      </div>

      <div>
        <label>Descrição</label>
        <input
          type="text"
          name="descricao"
          value={produto.descricao}
          onChange={onChange}
        />
      </div>

      <div>
        <label>Imagem</label>
        <input
          type="text"
          name="imagem"
          value={produto.imagem}
          onChange={onChange}
        />
      </div>

<button type="submit">
  {produto.nome ? "Salvar Produto" : "Adicionar Produto"}
</button>



    </form>
  );
}

export default FormularioProduto;



