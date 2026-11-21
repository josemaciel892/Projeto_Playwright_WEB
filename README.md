# Projeto Playwright Web

Projeto de automação de testes end-to-end desenvolvido com **Playwright** e **JavaScript**. Os testes simulam fluxos reais no site https://automationpratice.com.br, incluindo login, seleção de produtos e checkout.

## Tecnologias

- Node.js
- JavaScript
- Playwright Test
- HTML Reporter

## Pré-requisitos

- Node.js 18 ou superior
- npm

## Instalação

Clone o repositório:

```bash
git clone https://github.com/josemaciel892/Projeto_Playwright_WEB.git
cd Projeto_Playwright_WEB
```

Instale as dependências:

```bash
npm install
```

Instale os navegadores utilizados pelo Playwright:

```bash
npx playwright install
```

## Executando os testes

Execute toda a suíte:

```bash
npx playwright test
```

Execute um arquivo específico:

```bash
npx playwright test tests/login.test.js
npx playwright test tests/checkout.test.js
```

Execute os testes em modo interativo:

```bash
npx playwright test --ui
```

Exiba o relatório HTML:

```bash
npx playwright show-report
```

## Cenários automatizados

- Login com usuário válido
- Seleção de produto na loja
- Validação da confirmação de adição ao carrinho
- Preenchimento dos dados de cobrança
- Seleção do pagamento via PayPal
- Finalização e validação do pedido

## Estrutura do projeto

```text
.
├── fixtures/
│   ├── checkout.js       # Dados utilizados no checkout
│   └── usuarios.js       # Dados de usuários para login
├── pages/
│   ├── loginPage.js      # Ações e elementos da página de login
│   └── checkoutPage.js   # Ações e elementos das páginas de compra
├── tests/
│   ├── login.test.js     # Cenários de login
│   └── checkout.test.js  # Cenários de produtos e checkout
├── playwright.config.js  # Configuração do Playwright
├── package.json
└── package-lock.json
```

## Configuração

A configuração principal está em `playwright.config.js`:

- Diretório dos testes: `./tests`
- Navegador ativo: Chromium
- URL base: `https://automationpratice.com.br`
- Execução paralela habilitada
- Traces coletados na primeira tentativa repetida
- Relatório HTML habilitado

## Boas práticas

- Centralize dados sensíveis ou variáveis de ambiente em arquivos próprios.
- Não envie credenciais reais ou dados pessoais para o repositório.
- Use Page Object Model para manter ações e seletores separados dos testes.
- Gere traces e relatórios apenas quando necessário para evitar arquivos desnecessários.

## Relatórios e artefatos

Os seguintes artefatos gerados pelo Playwright são ignorados pelo Git:

- `test-results/`
- `playwright-report/`
- `blob-report/`
- `playwright/.cache/`
- `playwright/.auth/`
