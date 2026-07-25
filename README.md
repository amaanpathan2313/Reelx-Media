# ReelX Media 🚀

> **Performance-driven video content creation agency.**  
> We don't just create viral videos — we grow your revenue.

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.167-black?style=for-the-badge&logo=three.js&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.3-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📖 Table of Contents

- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started (How to Run Locally)](#-getting-started-how-to-run-locally)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup Steps](#installation--setup-steps)
- [Available NPM Scripts](#-available-npm-scripts)
- [Design & Aesthetics](#-design--aesthetics)
- [License](#-license)

---

## 🌟 About The Project

**ReelX Media** is a modern, high-converting digital web experience designed for a premium video production and content agency. Built using React 18, Vite, Three.js, and Framer Motion, the web app offers a visually immersive experience with dark mode aesthetics, interactive 3D particle canvases, smooth scrolling, and dynamic micro-animations.

The application serves as a comprehensive portfolio and conversion engine, presenting agency stats, client case studies, services, video portfolios, brand partnerships, and direct call-to-action sections.

---

## ✨ Key Features

- 🌌 **Interactive 3D Particle Background**: Immersive visual background built with Three.js (`@react-three/fiber`).
- 🌊 **Smooth Inertial Scrolling**: Integrated with `lenis` for a buttery-smooth web navigation experience.
- ⚡ **Instant HMR & Lightning Fast Builds**: Powered by Vite 5 development server.
- 🎭 **Rich Micro-Animations & Motion**: Fluid entrance animations and interactive hover effects powered by `framer-motion`.
- 📊 **Animated Performance Counters**: Live statistical counters using `react-countup` and scroll intersection triggers.
- 🖼️ **Interactive Portfolio & Testimonial Carousels**: Touch-friendly carousel sliders via `react-slick`.
- 📱 **Fully Responsive Layout**: Crafted with modern mobile-first CSS logic for seamless viewing across mobile, tablet, and desktop devices.
- 🔍 **SEO & Accessibility Ready**: Includes structured meta tags, Semantic HTML5 elements, and Google Font integrations (`Inter`, `Outfit`, `Space Grotesk`, `Unbounded`).

---

## 🛠️ Tech Stack

### **Core Framework & Build Tool**
- **[React 18](https://react.dev/)**: Component-based UI library.
- **[Vite 5](https://vitejs.dev/)**: Next-generation frontend build tooling.

### **Styling & Typography**
- **Vanilla CSS3**: Custom design system tokens, CSS variables, glassmorphism overlays, and noise textures.
- **Google Fonts**: Inter, Outfit, Space Grotesk, and Unbounded.

### **Animation & Graphics**
- **[Framer Motion](https://www.framer.com/motion/)**: Declarative animations and gesture controls.
- **[Three.js](https://threejs.org/) / [@react-three/fiber](https://r3f.docs.pmnd.rs/)**: 3D web rendering and particle canvas.
- **[Lenis](https://lenis.darkroom.engineering/)**: Smooth scroll orchestration.
- **[React Parallax Tilt](https://micku70.github.io/react-parallax-tilt/)**: 3D hover tilt effects for card elements.

### **UI Components & Icons**
- **[React Icons](https://react-icons.github.io/react-icons/)**: Scalable vector icons.
- **[React Slick](https://react-slick.neostack.com/)**: Slick carousel slider.
- **[React CountUp](https://github.com/glennreyes/react-countup)**: Number counter animations.
- **[React Type Animation](https://github.com/maxmarinich/react-type-animation)**: Typing text effect.

---

## 📁 Project Structure

```text
Reelx-Media/
├── public/                # Static public assets
├── src/
│   ├── components/        # UI Section Components
│   │   ├── About/         # Agency backstory and values
│   │   ├── Brands/        # Partnered brand logos
│   │   ├── CtaBanner/     # High-converting CTA section
│   │   ├── Footer/        # Site footer & navigation links
│   │   ├── Hero/          # Main header hero banner with dynamic typing
│   │   ├── HowWeWork/     # Process & workflow breakdown
│   │   ├── Navbar/        # Navigation bar with mobile hamburger menu
│   │   ├── ParticleBackground/ # Three.js canvas particle background
│   │   ├── Portfolio/     # Video showcase & work samples
│   │   ├── Results/       # Client revenue & view count case studies
│   │   ├── Services/      # Core agency offerings
│   │   ├── Stats/         # Animated numbers & metrics
│   │   └── Testimonials/  # Client reviews & testimonials slider
│   ├── App.css            # Component-level layout styles
│   ├── App.jsx            # Main Application entry component
│   ├── index.css          # Design system variables, reset & utilities
│   └── main.jsx           # React DOM root render
├── .gitignore             # Git ignored files & directories
├── index.html             # HTML5 template & Web Fonts import
├── package.json           # Project dependencies & scripts
├── README.md              # Project documentation
└── vite.config.js         # Vite configuration file
```

---

## 💻 Getting Started (How to Run Locally)

Follow these simple instructions to get a copy of the project up and running on your local development machine.

### Prerequisites

Ensure you have the following installed on your operating system:

1. **[Node.js](https://nodejs.org/)**: Version `18.0.0` or higher (LTS recommended).
2. **[npm](https://www.npmjs.com/)**: Node Package Manager (comes bundled with Node.js). Alternatively, you can use `yarn` or `pnpm`.

Verify installation by running:
```bash
node -v
npm -v
```

---

### Installation & Setup Steps

#### Step 1: Navigate to the Project Directory
Open your terminal or command prompt and navigate to the project directory:
```bash
cd Reelx-Media
```

#### Step 2: Install Project Dependencies
Run the following command to download and install all required node modules:
```bash
npm install
```

#### Step 3: Launch the Local Development Server
Start the Vite local development server:
```bash
npm run dev
```

Once started, the terminal will display your local development URL (typically `http://localhost:5173`). Open your browser and navigate to:
```text
http://localhost:5173/
```

---

## 📜 Available NPM Scripts

In the project directory, you can run the following commands:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Launches the development server with Hot Module Replacement (HMR) at `http://localhost:5173`. |
| `npm run build` | Compiles and optimizes the code for production, outputting assets into the `dist/` directory. |
| `npm run preview` | Runs a local web server to preview the production build from the `dist/` directory. |
| `npm run lint` | Runs ESLint to check for code quality and syntax compliance. |

---

## 🎨 Design & Aesthetics

- **Color Palette**: Dark space aesthetic with neon accents (`#6366f1`, `#8b5cf6`, `#ec4899`) and translucent glassmorphism containers.
- **Typography**: Paired Google Fonts (`Inter`, `Outfit`, `Space Grotesk`, `Unbounded`) for headline hierarchy.
- **Overlays**: Ambient radial glows and fixed noise texture overlay.

---

## 📄 License

This project is created for **ReelX Media**. All rights reserved.