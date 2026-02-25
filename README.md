# desafio-auvo-playwright

Desafio utilizando Playwright e JavaScript.

Este projeto é uma prova de conceito (POC) de automação de testes web, desenvolvida em **JavaScript** utilizando **Playwright** e o padrão **Page Object Model (POM)**.

# Objetivo

Automatizar o fluxo de compra no site [SauceDemo](https://www.saucedemo.com/) usando Playwright e JavaScript, aplicando o padrão **POM**.

# Estrutura do Projeto

desafio-auvo-playwright/
├── pages/
│ ├── login.page.js
│ ├── products.page.js
│ ├── cart.page.js
│ └── checkout.page.js
├── tests/
│ └── saucedemo.spec.js
├── utils/
│ └── helpers.js
├── package.json
├── playwright.config.js
└── README.md


## ⚡ Como iniciar o projeto

1. Instalar dependências:

```bash
npm install
npx playwright install


2. Executar em modo visual:
npm test

3. Executar todos os testes (no "Escuro"):
npm run test:headless

Observação: Eu coloquei um tempo de execução intensionalmente para que seja mais interessante a visualização rodando os testes visualmente ou no "Escuro". Assim, é possível ver o que cada coisa está fazendo em cada etapa do processo.

4. Gerar e abrir relatório HTML:
npm run report

==============================================================


Observações Técnicas

Credenciais padrão utilizadas para login:
Usuário: standard_user
Senha: secret_sauce
Estrutura modular baseada em POM para facilitar manutenção e expansão.
Seletores foram definidos de forma clara e robusta para os elementos principais do fluxo de compra.
Testes automatizam o fluxo completo: login -> validação de produto -> carrinho -> checkout -> confirmação.


Tecnologias Utilizadas

Playwright
Node.js
JavaScript 
Padrão Page Object Model (POM)

Autor
Gabriel Victor de Souza Teodoro
- Projeto desenvolvido como parte do Desafio Técnico - QA AUVO


