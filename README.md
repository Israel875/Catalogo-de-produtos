# 📦 Catálogo de Produtos

Projeto desenvolvido em **React** utilizando **Vite**, com o objetivo de criar um catálogo de produtos dinâmico, permitindo cadastrar, listar e excluir produtos de forma simples e intuitiva.

---

## 🚀 Tecnologias Utilizadas

- React
- Vite
- JavaScript (ES6+)
- CSS
- LocalStorage

---

## 🎯 Funcionalidades

- ✅ Cadastro de produtos com formulário controlado
- ✅ Listagem dinâmica utilizando `.map()`
- ✅ Componente reutilizável `ProdutoCard`
- ✅ Exclusão de produtos
- ✅ Persistência de dados com `localStorage`
- ✅ Estilização moderna com layout centralizado
- ✅ Uso de `useState` e `useEffect`

---

## 🧩 Estrutura do Projeto

src/
├── components/
│ ├── FormularioProduto.jsx
│ ├── ListaProdutos.jsx
│ ├── ProdutoCard.jsx
│
├── assets/
│
├── App.jsx
├── App.css
├── main.jsx


## 📝 Como Funciona

1. O usuário preenche o formulário com:
   - Nome do produto
   - Preço
   - Descrição
   - URL da imagem
2. Ao salvar, o produto é exibido automaticamente na lista.
3. Os dados ficam salvos no navegador através do `localStorage`.
4. É possível excluir produtos individualmente.

---

## 📷 Exemplo de Produto

- Nome: Camisa
- Preço: 200,00
- Descrição: Camisa Barcelona Original
- Imagem exibida via URL

---

## ▶️ Como Executar o Projeto

```bash
npm install
npm run dev
