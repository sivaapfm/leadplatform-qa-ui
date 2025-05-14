# Playwright UI Testing Framework

This framework is designed for end-to-end UI testing using **Playwright** with **TypeScript**, integrated with:
- **Slack Notifications** for real-time test result updates.
- **New Relic Event Logging** for observability and monitoring.
- **CI/CD Pipeline** using GitHub Actions for parallel cross-browser execution.

---

## 📂 Folder Structure
```
leadplatform-qa-ui/
│
├── .github/
│   └── workflows/
│       └── main.yml                   # GitHub Actions CI/CD workflow
│
├── src/
│   ├── config/
│   │   └── playwright.config.ts       # Playwright configuration file
│   │
│   ├── tests/
│   │   └── sample.test.ts             # Sample UI test
│   │
│   └── utils/                         # Utility functions (currently empty)
│
├── .gitignore                         # Git ignore rules
├── .npmrc                             # NPM configuration for private registry
├── package.json                       # Node.js dependencies and scripts
├── prettier.config.mjs                # Prettier configuration
├── tsconfig.json                      # TypeScript configuration
└── README.md                          # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v22.0.0 or higher)
- **pnpm** (v9 or higher)
- **Git**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sivaapfm/leadplatform-qa-ui.git
   cd leadplatform-qa-ui
   ```

2. Configure the `.npmrc` file:
   Ensure the `.npmrc` file is correctly set up to use the private registry:
   ```
   @aplaceformom:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
   auto-install-peers=true
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

---

## 🧪 Running Tests

### Run All Tests
To execute all tests in headless mode:
```bash
pnpm test
```

### Run Tests in UI Mode
To run tests with the Playwright Test Runner UI:
```bash
pnpm test-ui-mode
```

### Generate Test Reports
After running tests, an HTML report will be generated in the `playwright-report/` directory. Open it in your browser to view detailed results:
```bash
npx playwright show-report
```

---

## 🛠 Configuration

### Playwright Configuration
The Playwright configuration is located in [`src/config/playwright.config.ts`](src/config/playwright.config.ts). You can modify settings such as:
- `baseURL`
- `headless` mode
- `viewport` dimensions
- Browser projects (Chromium, Firefox, Webkit)

### TypeScript Configuration
The TypeScript configuration is defined in [`tsconfig.json`](tsconfig.json). It includes strict type checking and outputs compiled files to the `dist/` directory.

---

## 📦 CI/CD Pipeline

The CI/CD pipeline is configured using GitHub Actions in [`main.yml`](.github/workflows/main.yml). It includes:
- Installing dependencies
- Running Playwright tests
- Uploading test reports
- Sending Slack notifications for test results

---

## 📄 License
This project is licensed under the ISC License.

---
