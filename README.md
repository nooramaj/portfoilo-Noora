# Norah Almajaideh — Portfolio

Personal portfolio website for **Noora Almajaideh**, Software Engineer and System Architect.

Built with **React 19**, **TypeScript**, and **Vite**, styled with **Tailwind CSS**, and animated with **Framer Motion**.

🌐 **Live at [www.norah.work](https://www.norah.work)**

---

## ✨ Features

- Modern, responsive single-page design
- Smooth page and element animations powered by Framer Motion
- Fully typed codebase with TypeScript
- Fast development and optimized builds with Vite
- Utility-first styling with Tailwind CSS
- Automated deployment to GitHub Pages

---

## 🛠️ Tech Stack

| Category      | Technology            |
| ------------- | --------------------- |
| Framework     | React 19              |
| Language      | TypeScript            |
| Build Tool    | Vite                  |
| Styling       | Tailwind CSS          |
| Animation     | Framer Motion         |
| Deployment    | GitHub Pages          |

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/nooramaj/portfoilo-Noora.git
cd portfoilo-Noora
npm install
```

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` folder.

### Preview the Production Build

```bash
npm run preview
```

---

## 🚀 Deployment

Deployment is fully automated. Pushing to the `main` branch builds the site and deploys it to **GitHub Pages** via the workflow defined in `.github/workflows/deploy.yml`.

The site is served on a custom domain configured through the `CNAME` file.

---

## 📁 Project Structure

```
portfoilo-Noora/
├── .github/workflows/   # CI/CD deployment workflow
├── components/          # Reusable React components
├── hooks/               # Custom React hooks
├── public/              # Static assets
├── App.tsx              # Root application component
├── constants.ts         # Site content and configuration
├── index.html           # HTML entry point
├── index.tsx            # Application entry point
├── metadata.json        # Site metadata
├── types.ts             # Shared TypeScript types
└── vite.config.ts       # Vite configuration
```

---

## 🎨 Customization

Most of the site's content — text, links, and section data — lives in `constants.ts`. Update that file to change what appears on the page without touching the components.

---

## 📄 License

This project is personal work by Noora Almajaideh. Feel free to explore the code for inspiration.

---

## 👤 Author

**Noora Almajaideh** — Software Engineer & System Architect

- Portfolio: [www.norah.work](https://www.norah.work)
- GitHub: [@nooramaj](https://github.com/nooramaj)
