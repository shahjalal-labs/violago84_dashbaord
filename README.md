# 🐾 Viola Go Analytics — Canine Development & Training Portal

![UI Architecture Banner](./assets/banner.svg)

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Ant_Design-0170FE?style=for-the-badge&logo=antdesign&logoColor=white" alt="Ant_Design" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux_Toolkit" />
  <img src="https://img.shields.io/badge/NextAuth-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="NextAuth" />
  <img src="https://img.shields.io/badge/Pet_Analytics-14B8A6?style=for-the-badge&logo=activity&logoColor=white" alt="Pet_Analytics" />
  
</p>

---

## 📌 Executive Overview

Viola Go Dashboard provides animal trainers and administrative managers with an interactive analytics suite to track puppy growth curves, lesson completion rates, user activity streaks, and community engagements.

---

## 🚀 Key Frontend Engineering Highlights

- **Telemetry Visualizations**: Multi-dimensional growth percentile curves and vaccine completion tracking.
- **Redux Toolkit State Architecture**: Normalized state slices for real-time puppy health logs and curriculum modules.
- **NextAuth Authentication**: Secure role-based session management with JWT token refresh.
- **Ant Design Enterprise UI**: Polished data tables with server-side sorting, pagination, and multi-field filtering.
- **Lottie & Micro-interactions**: Smooth animated feedback for milestone achievements.

---

## 📂 Project Architecture

```plaintext
violago84_dashbaord/
├── assets/
│   └── banner.svg         # UI architecture visual banner
├── src/
│   ├── components/        # Reusable design system primitives & UI atoms
│   ├── pages/ or app/     # Application routes & layouts
│   ├── hooks/             # Custom React hooks & state encapsulation
│   ├── services/          # API client endpoints & HTTP adapters
│   └── styles/            # Tailwind CSS configurations & themes
├── public/                # Static assets & icons
├── package.json
└── tsconfig.json
```

---

## 🛠️ Quickstart & Local Setup

### Prerequisites
* **Node.js**: `v20.x` or higher
* **Package Manager**: npm or yarn

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/shahjalal-labs/violago84_dashbaord.git
cd violago84_dashbaord
npm install
```

### 2. Environment Configuration
Create a local `.env` file if required:
```bash
cp .env.example .env 2>/dev/null || true
```

### 3. Run Development Server
```bash
npm run dev
```

Application will launch locally at `http://localhost:3000` or `http://localhost:5173`.

---

## 👨‍💻 Engineering & Authorship

Developed and maintained by **Md. Shahjalal**.

* **GitHub**: [@shahjalal-labs](https://github.com/shahjalal-labs)
* **Email**: [muhommodshahjalal@gmail.com](mailto:muhommodshahjalal@gmail.com)

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
