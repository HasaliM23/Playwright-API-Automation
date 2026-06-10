# 🚀 Playwright API Automation Framework

![Playwright Tests](https://github.com/HasaliM23/Playwright-API-Automation/actions/workflows/playwright.yml/badge.svg)
[![Live Report](https://img.shields.io/badge/View-Live_Test_Report-success?style=for-the-badge&logo=playwright)](https://hasalim23.github.io/Playwright-API-Automation/)

This is a professional, production-ready **API Test Automation Framework** built using **Playwright** and **JavaScript**. It incorporates modern testing practices such as CRUD testing, Data-Driven Testing (DDT), and Automated CI/CD execution with GitHub Actions and Live Reporting.

---

## 🛠️ Tech Stack & Tools

| Tool | Purpose |
| :--- | :--- |
| **Playwright** | Core Test Runner & API Request Handling |
| **JavaScript** | Programming Language |
| **GitHub Actions** | CI/CD Pipeline Automation |
| **GitHub Pages** | Hosting Live HTML Test Reports |

---

## ✨ Key Features

* **Full CRUD API Testing:** Automated scripts for `GET`, `POST`, `MAIN`, `PUT`, and `DELETE` requests using JSONPlaceholder API.
* **Data-Driven Testing (DDT):** Dynamically generates and executes multiple test cases by reading external test data from a `testData.json` file.
* **Smart CI/CD Pipeline:** Configured via GitHub Actions to automatically run tests on every code `push` or `pull_request` without running full browser binaries (Optimized for headless API testing).
* **Live HTML Reports:** Test results are automatically deployed and hosted live on GitHub Pages after every pipeline run.

---

## 📂 Project Structure

```text
playwright-API/
├── .github/workflows/
│   └── playwright.yml         # GitHub Actions CI/CD pipeline configuration
├── tests/
│   ├── api-test.spec.js       # Core CRUD API automation scripts
│   ├── api-data-driven.spec.js# Data-driven test scripts using JSON
│   └── testData.json          # External test data file for DDT
├── playwright.config.js       # Global Playwright configuration
└── package.json               # Project dependencies and custom scripts