# Three-Tier Node.js + SQLite App

This is a sample Node.js application built using Express and SQLite that simulates a three-tier architecture. It includes automated testing and CI using GitHub Actions.

## 🛠️ Tech Stack

- Node.js
- Express
- SQLite
- Jest (for unit testing)
- Supertest (for HTTP testing)
- GitHub Actions (for CI)

## 🚀 Project Structure


├── backend/

│ └── server.js

├── test/

│ └── app.test.js

├── test-results/

│ └── results.json (generated)

├── package.json

└── .github/

|   └── workflows/
    
    |    └── nodejs-ci.yml


## 🔁 CI Workflow Highlights

The GitHub Actions workflow (`nodejs-ci.yml`) includes:

1. **Checkout code**
2. **Set up Node.js (v20)**
3. **Install dependencies**
4. **Run tests** using Jest & Supertest
5. **Generate and upload test report** (`results.json`)
6. **Start the app**, verify it on `localhost:3000`
7. **Shut down the app**

### ✅ Trigger

- `workflow_dispatch` (manual trigger from GitHub Actions)

## 🧪 Run Tests Locally

**📦 Run Locally**

npm install

npm start

**🗓️ Part of:**
This project is part of the #30DaysOfDailyDeployment challenge.


