# Capputeeno - FrondEnd Challenge

<p align="center">
  <img src="https://github.com/user-attachments/assets/10b89cd9-e933-4ef8-8af6-7d74131df10a" alt="Demonstração da aplicação" style="max-width: 100%; border-radius: 8px;" />
</p>

**Capputeeno** é um desafio da Rockseat que foi proposto a criação de um e-commerce usando TypeScript, GraphQL e React, ela permite organizar e navegar por produtos com filtro, paginação e ordenação.

Clique [aqui](https://github.com/Rocketseat/frontend-challenge) para acessar o repositório do desafio 

---

## ⚙️ Tecnologias Utilizadas

* **Next.js 13+** com App Router
* **React**
* **TypeScript**
* **LocalStorage** 
* **GraphQL** (cliente fetch padrão ou Apollo/urql)
* **Styled Componets**
---

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/giuseppinhu/capputeeno.git
cd capputeeno
```

### 2. Instale dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure a API GraphQL

Certifique-se de que uma API GraphQL esteja rodando em `http://localhost:3333/graphql`, com a query:

```graphql
query {
  allProducts {
    id
    name
    description
    category
    image_url
    price_in_cents
    sales
    created_at
  }
}
```

### 4. Inicie a aplicação

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## 🎛 Funcionalidades Principais

* **Filtro por categoria**: Botões para "todas", "canecas" e "camisas".
* **Ordenação**: Implementado via `<Select>` (ex.: preço, vendas, data…).
* **Resultado paginado**: Mostra 5 páginas com botões de navegação.
* **Exibição de itens**: Componente `ListItem` renderiza produtos.
* **Página do Produto**: Aba com as especificações do produto selecionado.
* **Carrinho Funcional**: Página que mostra os produtos selecionados.
* **Armazenamento dos itens do carrinho**: Salva os itens que foram colocados no carrinho.

---

## 🧩 Estrutura de Componentes

```text
src/
├─ components/
│  ├─ Header.tsx
│  ├─ Button.tsx
│  ├─ Select.tsx
│  └─ ListItem.tsx
└─ app/
   └─ page.tsx       ← componente `Home` principal
```

* **Header**: logo e navegação
* **Button**: reutilizado para categorias e paginação
* **Select**: dropdown para critérios de ordenação
* **ListItem**: exibe produtos com imagem, nome, descrição, preço

---

## ✅ Boas Práticas / Melhorias Futuras

* Usar **GraphQL Apollo Client** com gerenciamento de cache.
* Filtro de busca com input de texto.
* Suporte a **autenticação** (login, carrinho).
* Otimização de performance com memoização (ex.: `useMemo`, `React.memo`).
* **Testes** unitários e integração (por exemplo, com Jest e Testing Library).
* Tratar erros de fetch e mostrar feedback ao usuário.

---

## 🛠 Executando melhorias

* **Filtro por termo**: adicionar input controlado e filtrar `products`.
* **Ordenação dinâmica**: popular `<Select>` com opções classificáveis.
* **Paginação responsiva**: calcular `totalPages = ceil(filtrados/10)`.
* **Requisições otimizadas**: buscar apenas itens da página em GraphQL.

---

Personalize as seções conforme o escopo real do projeto. 🚀
