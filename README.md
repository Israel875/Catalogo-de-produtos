
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
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 6ac15be (Projeto catálogo de produtos com React e Vite)
