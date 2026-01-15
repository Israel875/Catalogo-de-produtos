import ProdutoCard from "./Card";


function ListaProdutos({ produtos, onDelete }) {
  return (
    <div className="lista-produtos">
      {produtos.map((produto, index) => (
        <ProdutoCard
          key={index}
          produto={produto}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}

export default ListaProdutos;



