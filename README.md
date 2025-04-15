# AllMart - E-commerce Store

AllMart é uma loja virtual desenvolvida utilizando **React**, **Redux**, **React Router**, **Tailwind CSS** e **Vite**. O objetivo do projeto é criar uma plataforma de e-commerce simples, com funcionalidades de autenticação mockada, catálogo de produtos, carrinho de compras, e gerenciamento de pedidos.

## Funcionalidades

- **Autenticação mockada**: Usuários podem se autenticar usando um conjunto fixo de credenciais. A autenticação é feita sem backend real, usando `localStorage` para armazenar dados do usuário.
- **Catálogo de Produtos**: Os usuários podem visualizar o catálogo de produtos e adicionar itens ao carrinho.
- **Carrinho de Compras**: O carrinho de compras é mantido no estado global via Redux, permitindo adicionar e remover itens, além de realizar o checkout.
- **Perfil e Histórico de Pedidos**: Cada usuário possui um perfil onde é possível visualizar seus pedidos passados.
- **Navegação privada**: Algumas rotas, como o perfil e o checkout, são protegidas e só podem ser acessadas por usuários autenticados.
  
## Usuários Cadastrados

O sistema tem dois usuários cadastrados para fins de teste. Use as credenciais abaixo para autenticação:

### Usuário 1: Yoda
- **Email**: yoda@jedi.com
- **Senha**: 123456

### Usuário 2: Anakin
- **Email**: anakin@sith.com
- **Senha**: senha123

## Dependências

- React
- Redux Toolkit
- React Router
- Tailwind CSS
- Vite
- React Toastify (para notificações)

## Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd <diretorio-do-projeto>
   ```

2. Instale as dependências:
   ```bash
   npm ci
   ````

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra o navegador e acesse:
   ```bash
   http://localhost:5173/
   ```

## Armazenamento de Dados

**LocalStorage**: O sistema utiliza o localStorage para armazenar dados de autenticação do usuário e manter o estado do carrinho de compras entre as sessões. Ao fazer login, os dados do usuário são salvos no localStorage e recuperados ao iniciar a aplicação.

## URL para o Netlify
