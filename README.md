# 🐾 Viola Go — Gamified Canine Growth & Puppy Training Admin Portal

![UI Architecture Banner](./assets/banner.svg)

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js_16" />
  <img src="https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React_18" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Turbopack-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Turbopack" />
  <img src="https://img.shields.io/badge/Ant_Design-0170FE?style=for-the-badge&logo=antdesign&logoColor=white" alt="Ant_Design" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux_Toolkit" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind_CSS" />
  <img src="https://img.shields.io/badge/Pet_Tech-EC4899?style=for-the-badge&logo=award&logoColor=white" alt="Pet_Tech" />
  
</p>

---

## 📌 Executive Overview

**Viola Go Dashboard** is an administrative control portal for a gamified puppy training and canine health tracking platform. Built with **Next.js 16 (Turbopack, App Router)**, the portal equips animal behaviorists and platform administrators to curate structured puppy learning journeys, author multi-part training modules, configure interactive agility mini-games, monitor puppy weight percentiles, and manage user progression streaks.

---

## 🚀 Key Engineering & Domain Capabilities

- **Structured Journey Builder**: Visual builder for progressive puppy training roadmaps (Part 1, Part 2, etc.) with embedded video/audio guides.
- **Interactive Mini-Game Administration**: Configure puppy behavioral games, rules, difficulty levels, and milestone reward criteria.
- **Canine Weight & Health Percentiles**: Monitor veterinary puppy weight progression charts and health checklist compliance.
- **SweetAlert2 & Ant Design Workflows**: Smooth confirmation modals, reactive notifications, and rich data tables.
- **Next.js 16 App Router & Turbopack**: High-performance dashboard compilation with modular client components and normalized RTK caching.

---

## 🏛️ Application Architecture & Route Tree

```plaintext
violago84_dashbaord/
├── assets/
│   └── banner.svg                     # High-resolution architectural banner
├── app/
│   ├── (auth)/                        # Administrator login & security
│   ├── (common)/                      # Terms, privacy policy, guidelines
│   ├── (dashboard)/
│   │   └── dashboard/
│   │       ├── content/               # Journeys, lessons, games, FAQ
│   │       │   ├── my-journey/        # Progressive roadmap builder
│   │       │   ├── lessons/           # Video & audio training lessons
│   │       │   └── game/              # Interactive agility games
│   │       ├── progress/              # User training streaks & milestone logs
│   │       ├── users/                 # Puppy owner accounts & pet profiles
│   │       └── settings/              # System configurations
│   ├── layout.tsx                     # Next.js 16 root layout
│   └── globals.css                    # Tailwind CSS design system
├── components/                        # Ant Design modals, tables, and cards
├── redux/                             # Redux Toolkit store & gameApi/journeyApi
├── package.json                       # Next.js 16.0.10, React 18, Redux Toolkit
└── tsconfig.json
```

---

## 💻 Tech Stack Specification

| Layer | Technologies |
|---|---|
| **Framework** | **Next.js 16** (App Router, Turbopack, Server/Client Components) |
| **UI Components** | Ant Design, Lucide Icons, Custom Tailwind Primitives |
| **State Management** | Redux Toolkit (RTK), RTK Query API Caching |
| **Styling** | Tailwind CSS 3.4, PostCSS, Responsive Mobile-First Theme |
| **Language** | TypeScript 5 (Strict Mode) |

---

## 🛠️ Getting Started & Local Development

### Prerequisites
* **Node.js**: `v20.x` or higher
* **Package Manager**: `npm`, `yarn`, or `pnpm`

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/shahjalal-labs/violago84_dashbaord.git
cd violago84_dashbaord
npm install
```

### 2. Configure Environment Variables
Create a local `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
```

### 3. Run Development Server (Turbopack)
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 👨‍💻 Engineering & Authorship

Developed and engineered by **Md. Shahjalal**.

* **GitHub**: [@shahjalal-labs](https://github.com/shahjalal-labs)
* **Email**: [muhommodshahjalal@gmail.com](mailto:muhommodshahjalal@gmail.com)

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
