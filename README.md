# 🏨 Ticketify — Hotel Booking App
**Ticketify** is a modern hotel booking web application that allows users to browse, book, and manage hotel room reservations. The project is built using **React**, **TypeScript**, **Tailwind CSS**, and follows best practices for code quality, scalability, and team collaboration.
---
## 🚀 Tech Stack
- ⚛️ React 19 — UI framework
- ⚡ Vite — Next-gen front-end build tool
- 📦 PNPM — Fast, disk-efficient package manager
- ✅ ESLint + Prettier — Code linting and formatting
- 🐶 Husky
---
## 🛠️ Getting Started
### 1. Clone the repository
```bash
git clone https://gitlab.zimaw.com/binh.hoang/ticketify_fe.git
cd ticketify_fe
```
### 2. Install dependencies
```bash
pnpm install
```
### 3. Start the development server
```bash
pnpm dev
```
### 📁 Project Structure

```bash
src/
├── assets/        # Images, icons, fonts
├── components/    # Reusable UI components
├── constants/     # Static values (e.g., roles, routes)
├── hooks/         # Custom React hooks
├── layouts/       # Common layout wrappers (AuthLayout, MainLayout, etc.)
├── pages/         # Route-based page components
├── routes/        # Route definitions and guards
├── services/      # API services (e.g., Axios setup)
├── store/         # Global state management (e.g., Zustand, Redux)
├── types/         # TypeScript types/interfaces
├── utils/         # Helper functions (formatters, validators)
├── App.tsx        # Main App component
└── main.tsx       # App entry point
### Code Style & Conventions
This project uses ESLint, Prettier, and (optional) Husky for clean and consistent code.
    Lint & Format Rules
        ✔️ Semicolons: Required
        ✔️ Quotes: Use 'single' quotes
        ✔️ Indentation: 2 spaces
        ✔️ File/Folder naming: kebab-case
        ✔️ Variables & functions: camelCase
        ✔️ Components & types: PascalCase
```
