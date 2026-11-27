# Projeto Playwright WEB

![Playwright](https://img.shields.io/badge/Playwright-Testes%20E2E-45ba4b?logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-100%25-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white)

Projeto de automação de testes end-to-end utilizando [Playwright](https://playwright.dev/) para validar os fluxos de login e checkout no site [Automation Practice](https://automationpratice.com.br).

## 📋 Sobre o projeto

A aplicação demonstra uma estrutura organizada com os seguintes conceitos:

- Testes E2E com Playwright;
- Padrão Page Object Model;
- Locators centralizados;
- Dados reutilizáveis em fixtures;
- Fixture customizada para disponibilizar as páginas nos testes;
- Execução em Chromium, Firefox e WebKit;
- Geração de relatório HTML;
- Capturas de tela em falhas;
- Gravação de vídeo dos testes;
- Trace na primeira tentativa após falha;
- Execução automática no GitHub Actions em `push` e manualmente pelo workflow dispatch.

## 🧪 Cenários automatizados

### Login

- Login com sucesso.

### Checkout

- Seleção de produto;
- Adição do produto ao carrinho;
- Validação do produto adicionado;
- Preenchimento dos dados de cobrança;
- Salvamento do endereço;
- Seleção do pagamento PayPal;
- Salvamento dos dados de checkout;
- Finalização e validação do pedido.

## 🛠️ Tecnologias

- Node.js 22;
- JavaScript;
- Playwright Test;
- Chromium;
- Firefox;
- WebKit;
- GitHub Actions.

## 📁 Estrutura do projeto

```text
.
├── .github/
│   └── workflows/
│       └── regressivo_push.yml
├── e2e/
│   └── example.spec.js
├── fixtures/
│   ├── checkout.js
│   ├── pages.fixture.js
│   └── usuarios.js
├── locators/
│   └── loginLocators.js
├── pages/
│   ├── BasePage.js
│   ├── checkoutPage.js
│   └── loginPage.js
├── tests/
│   ├── checkout/
│   │   └── checkout.test.js
│   └── login/
│       └── login.test.js
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.js
```

### Organização das responsabilidades

- `e2e/`: contém o exemplo padrão gerado pelo Playwright;
- `tests/login/`: cenários de autenticação;
- `tests/checkout/`: cenários de compra e checkout;
- `pages/`: implementa os Page Objects e ações das páginas;
- `locators/`: centraliza os elementos utilizados nas páginas;
- `fixtures/`: concentra dados reutilizáveis e fixtures customizadas;
- `playwright.config.js`: configura navegadores, execução, relatórios e artefatos;
- `.github/workflows/regressivo_push.yml`: executa a suíte no GitHub Actions.

## ✅ Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) — recomendada: versão 22;
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
npm ci
```

### 3. Instale os navegadores do Playwright

```bash
npx playwright install --with-deps
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

Executar os testes de login:

```bash
npx playwright test tests/login/login.test.js
```

Executar os testes de checkout:

```bash
npx playwright test tests/checkout/checkout.test.js
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

Os resultados da execução ficam disponíveis em:

- `playwright-report/`: relatório HTML;
- `test-results/`: evidências e artefatos de testes com falhas.

## ⚙️ Configuração

A configuração principal está em `playwright.config.js`:

- Diretório dos testes: `tests`;
- Execução paralela habilitada;
- Navegadores configurados: Chromium, Firefox e WebKit;
- Relatório no formato HTML;
- Vídeos gravados para todos os testes;
- Screenshots capturados somente em falhas;
- Trace coletado na primeira tentativa após falha;
- Até 2 retries em ambientes de CI;
- Apenas 1 worker em ambientes de CI;
- Bloqueio de `test.only` em ambientes de CI.

## 🤖 GitHub Actions

O workflow `regressivo_push.yml` realiza os testes automaticamente em cada `push` e pode ser iniciado manualmente pela opção **Run workflow**.

A execução utiliza:

- Ubuntu 24.04;
- Node.js 22;
- `npm ci`;
- Navegadores do Playwright instalados com suas dependências;
- Relatório HTML;
- Upload de screenshots e evidências em caso de falha;
- Upload do relatório Playwright em todas as execuções.

## 🔒 Dados sensíveis

Os dados utilizados nos fixtures são demonstrativos. Em projetos reais, credenciais e informações pessoais não devem ser versionadas diretamente no repositório. Prefira variáveis de ambiente ou um gerenciador seguro de secrets.

## 📌 Observação

Como os testes utilizam um site externo, os resultados podem variar caso o ambiente alvo seja alterado ou fique indisponível.

## 🤝 Contribuição

1. Crie uma branch a partir da branch `main`;
2. Desenvolva ou atualize os cenários;
3. Execute os testes antes de enviar as alterações;
4. Abra um Pull Request com uma descrição clara do que foi alterado.

## 👤 Autor

Projeto desenvolvido por [josemaciel892](https://github.com/josemaciel892).
