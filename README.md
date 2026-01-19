# TrybeWallet 💰📊

Projeto de estudo desenvolvido durante a formação em **Desenvolvimento Web da Trybe**.  
Uma aplicação front-end que simula uma **carteira de despesas** com diferentes moedas, permitindo registrar gastos, converter valores e acompanhar um saldo total.

---

## 💡 Visão geral

O *TrybeWallet* é um app React com gerenciador global de estado via **Redux** e integração com API de câmbio.  
Ele permite:

✔️ Adicionar despesas com valor, moeda, método de pagamento e categoria  
✔️ Converter valores usando taxas reais (via API)  
✔️ Editar e excluir despesas  
✔️ Visualizar o total das despesas em uma moeda principal  
✔️ Navegar entre telas de forma fluida

Esse projeto aprofunda conhecimento em React, gestão de estado e lógica de aplicações reais.

---

## 🛠 Tecnologias utilizadas

- **React** (componentes funcionais + Hooks)  
- **Redux / Redux Thunk** (gerenciamento de estado e async)  
- **React Router** (navegação entre telas)  
- **API de câmbio** (consumo via fetch/axios)  
- **JavaScript / JSX**
- **CSS** (estilos)
- **ESLint / Stylelint** (configurações de código)

---

## 🚀 Como rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/Thaisvc/Project-TrybeWallet.git
cd Project-TrybeWallet
````

### 2. Instale as dependências

```bash
npm install
```

ou

```bash
yarn install
```

### 3. Inicie a aplicação

```bash
npm start
```

ou

```bash
yarn start
```

Isso irá abrir o app em:

```
http://localhost:3000
```

---

## 📌 Funcionalidades

### 🧾 Cadastro de despesas

O usuário pode inserir:

* Valor
* Moeda
* Método de pagamento
* Categoria (alimentação, lazer, trabalho, etc)
* Descrição



### 💱 Conversão de moedas

Ao registrar uma despesa, o app busca **taxas de câmbio** e converte o valor para uma moeda principal.



### 🧠 Gestão das despesas

O app permite:

* Excluir despesas
* Editar despesas existentes
* Ver o total atualizado automaticamente



### 🔄 Navegação entre telas

O usuário navega entre a página principal e a tela de login (ou outras rotas, conforme implementação).

---

## 📁 Estrutura do projeto

```
Project-TrybeWallet/
├── public/
│   └── index.html
├── src/
│   ├── actions/
│   ├── components/
│   ├── pages/
│   ├── reducers/
│   ├── store/
│   ├── services/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

---

## 📚 Aprendizado

Com esse projeto consolidou:

✔️ React com componentes funcionais <br>
✔️ Redux para estado global <br>
✔️ Chamada de API e lógica assíncrona <br>
✔️ Manipulação de formulários <br>
✔️ Cálculo e armazenamento de dados <br>
✔️ Navegação entre telas <br>


---

