Playwright Setup (Windows 10/11)
Prerequisites 
Ensure following tools are installed on your system: 

1. **Node.js (LTS)**
	*Download and install Node.js LTS 
	*Verify installation with: 
        node -v  
        npm -v

2. **Git**
    *Download from: https://git-scm.com/
    *Verify: git –-version 

3. **Windows 11 Requirements**
    *Windows 11 (64-bit)
    *Powershell or Windows Terminal(recommended)
    *Administrator access for browser installation 

4. **Project Dependencies**
    Main dependency used in this project:
    {
        "@playwright/test": "^1.x.x"
    }

    Optional(commonly used):
        *dotenv - environment variables 
        *eslint - linting 
        *typescript - if using TypeScript 

5. **Installation**
    1. Clone the repository: 
        git clone <repository-url>
        cd <project-folder>
    2. Install dependencies: 
        npm install 
    3. Install Playwright browsers(Chrome, Firefox and Webkit): 
        npx playwright install 

6. **Playwright configuration**
    Configuration file: playwright.config.js

7. **Example Configuration**
    import { defineConfig } from '@playwright/test';
    export default defineConfig({
    testDir: './tests',
    timeout: 30 * 1000,
    retries: 1,
    reporter: [['html', { open: 'never' }]],
    use: {
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry',
    },
    projects: [
        {
        name: 'Chromium',
        use: { browserName: 'chromium' },
        },
        {
        name: 'Firefox',
        use: { browserName: 'firefox' },
        },
        {
        name: 'WebKit',
        use: { browserName: 'webkit' },
        },
    ],
});

8. **Running Tests** 
    *Run all tests - npx playwright test
    *Run tests in headed mode - npx playwright test --headed 
    *Run tests for a specific browser - npx playwright test --project=Chromium
    *Run a specific test file - npx playwright test tests/example.spec.js

9. **Test reports**\
    Generate and view the HTML report:
        npx playwright show-report
    Report location: 
        playwright-report/

10. **Environment variables (optional)**
    Create a .env file in the root directory 

    .env 
    BASE_URL=https://example.com
    USERNAME=testuser
    PASSWORD=secret

    Install dotenv if required:
    npm install dotenv

**Common Issues on Windows 11**
    PowerShell Execution Policy (if scripts are blocked)
        Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

**Browser Installation Issues**
    npx playwright install --force 

**Antivirus Blocking Software**
    Add exclusions for:
        node_modules\.cache\ms-playwright

# Folder Structure
├── tests/
│   └── example.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
├── README.md
└── .env

**Useful commands**
# Run all tests 
    npx playwright test 
# Run a single test file 
    npx playwright test  tests/todo-page.spec.js 
# Run a set of test files 
    npx playwright test tests/todo-page/  tests/landing-page/ 
# Run test in headless mode  
    npx playwright test --headless

**Documentation**
    https://playwright.dev/docs/intro