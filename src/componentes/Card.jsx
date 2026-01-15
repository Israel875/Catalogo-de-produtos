function ProdutoCard({ produto, onDelete }) {
  return (
    <div className="produto-card">
      <h3>{produto.nome}</h3>
      <p>{produto.preco}</p>
      <p>{produto.descricao}</p>

      {produto.imagem && (
        <img src={produto.imagem} alt={produto.nome} />
      )}

      <button onClick={onDelete}>Excluir</button>
    </div>
  );
}

export default ProdutoCard;



