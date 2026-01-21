# Playwright Setup (Windows 10/11)

This project uses **Playwright** for end-to-end (E2E) and smoke testing.  
The instructions below are specifically written for **Windows 11** users.

# Node.js (LTS)
	1) Download and install Node.js LTS 
	2) Verify installation with: 
        a) node -v  
        b) npm -v

# Git
    1) Download from: https://git-scm.com/
    2) Verify: git –-version 

# Windows 11 Requirements
    1) Windows 11 (64-bit)
    2) Powershell or Windows Terminal (recommended)
    3) Administrator access for browser installation 

# Project Dependencies
   Main dependency used in this project:
~~~
	{
	    "@playwright/test": "^1.x.x"
    }
~~~
	   
     Optional (commonly used):
        a) dotenv - environment variables 
        b) eslint - linting 
        c) typescript - if using TypeScript 
		
 # Installation
	Clone the repository: git clone (link of repository) 
	Change path: cd path (path of folder where repository is cloned)
	Install dependencies: npm install 
	Install Playwright browsers (Chrome, Firefox and Webkit): npx playwright install 
	
# Playwright configuration
   	Configuration file: playwright.config.js
	
# Example Configuration
~~~	
	
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
~~~
   
# Running Tests
    a) Run all tests - npx playwright test
    b) Run tests in headed mode - npx playwright test --headed 
    c) Run tests for a specific browser - npx playwright test --project=Chromium
    d) Run a specific test file - npx playwright test tests/example.spec.js

# Test reports
    a) Generate and view the HTML report: npx playwright show-report
    b) Report location: playwright-report/

# Environment variables (optional)
    Create a .env file in the root directory with following info (example):
    	BASE_URL=https://example.com
    	USERNAME=testuser
    	PASSWORD=secret

# Install dotenv if required:
    npm install dotenv

# Common Issues on Windows 11
	Change PowerShell Execution Policy (if scripts are blocked)
    	Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

# Browser Installation Issues
    npx playwright install --force 

# Antivirus Blocking Software
    Add exclusions for: node_modules\.cache\ms-playwright

# Folder Structure 
├── tests/<br/>
│   	└── example.spec.js<br/>
├── playwright.config.js<br/>
├── package.json<br/>
├── package-lock.json<br/>
├── README.md<br/>
└── .env<br/>

# Useful commands
## Run all tests 
    npx playwright test 
## Run a single test file 
    npx playwright test  tests/todo-page.spec.js 
## Run a set of test files 
    npx playwright test tests/todo-page/  tests/landing-page/ 
## Run test in headless mode  
    npx playwright test --headless

## Documentation
     https://playwright.dev/docs/intro
