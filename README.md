# Projeto Playwright WEB

![Playwright](https://img.shields.io/badge/Playwright-Testes%20E2E-45ba4b?logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-100%25-F7DF1E?logo=javascript&logoColor=black)

Projeto de automação de testes end-to-end utilizando [Playwright](https://playwright.dev/) para validar os fluxos de login e checkout no site [Automation Practice](https://automationpratice.com.br).

## 📋 Sobre o projeto

A aplicação demonstra uma estrutura organizada com os seguintes conceitos:

- testes E2E com Playwright;
- padrão Page Object;
- dados reutilizáveis em fixtures;
- testes em diferentes navegadores;
- geração de relatório HTML;
- capturas de tela em falhas;
- gravação de vídeo dos testes;
- execution traces para retries.

## 🧪 Cenários automatizados

- Login com sucesso.
- Seleção de produto e adição ao carrinho.
- Checkout com preenchimento dos dados de cobrança.
- Seleção de pagamento PayPal.
- Validação da conclusão do pedido.

## 🛠️ Tecnologias

- Node.js
- JavaScript
- Playwright Test
- Chromium
- Firefox
- WebKit

## 📁 Estrutura do projeto

```text
.
├── fixtures/
│   ├── checkout.js          # Dados de checkout reutilizáveis
│   └── usuarios.js          # Dados de usuário reutilizáveis
├── pages/
│   ├── checkoutPage.js      # Page Object do fluxo de compra
│   └── loginPage.js         # Page Object da autenticação
├── tests/
│   ├── checkout.test.js     # Testes de produto e checkout
│   └── login.test.js        # Testes de login
├── package.json
├── package-lock.json
└── playwright.config.js     # Configuração do Playwright
```

## ✅ Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) — recomendado: versão 20 ou superior;
- npm, incluído com o Node.js;
- Git.

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/josemaciel892/Projeto_Playwright_WEB.git
cd Projeto_Playwright_WEB
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Instale os navegadores do Playwright

```bash
npx playwright install
```

### 4. Execute os testes

Executar toda a suíte:

```bash
npx playwright test
```

Executar em modo interativo:

```bash
npx playwright test --ui
```

Executar um arquivo específico:

```bash
npx playwright test tests/login.test.js
npx playwright test tests/checkout.test.js
```

Executar em modo visualizado:

```bash
npx playwright test --headed
```

Executar em um navegador específico:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## 📊 Relatório de testes

Após a execução, abra o relatório HTML:

```bash
npx playwright show-report
```

## ⚙️ Configuração

A configuração principal está em `playwright.config.js`:

- URL base: `https://automationpratice.com.br`;
- diretório dos testes: `tests`;
- execução paralela habilitada;
- browsers configurados: Chromium, Firefox e WebKit;
- relatórios no formato HTML;
- vídeos gravados para todos os testes;
- screenshots capturados somente em falhas;
- trace coletado na primeira tentativa após falha;
- retries e workers ajustados automaticamente em ambientes de CI.

## 🧩 Organização dos testes

Os testes seguem o padrão Page Object Model:

- as páginas encapsulam locators e ações;
- os arquivos de teste representam cenários de usuário;
- os fixtures centralizam dados de login e checkout;
- o setup inicial pode ser reutilizado com `beforeEach`.

## 🔒 Dados sensíveis

Os dados utilizados nos fixtures são demonstrativos. Em projetos reais, credenciais e informações pessoais não devem ser versionadas diretamente no repositório. Prefira variáveis de ambiente, arquivos `.env` ignorados pelo Git ou um gerenciador de secrets.

## 📌 Observação

Como os testes utilizam um site externo, resultados podem variar caso o ambiente alvo seja alterado ou fique indisponível.

## 🤝 Contribuição

1. Crie um branch a partir da branch `main`.
2. Desenvolva ou atualize os cenários.
3. Execute os testes antes de enviar as alterações.
4. Abra um Pull Request com uma descrição clara do que foi alterado.

## 👤 Autor

Projeto desenvolvido por [josemaciel892](https://github.com/josemaciel892).
