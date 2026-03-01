# Federico Talarico - Portfolio

<img src="./.github/images/portfolio_hero.webp" alt="Porfolio Hero" width="100%" />

---

↗️ [**See it live**](https://t-federer.github.io/portfolio_01/) 

---

## 🔍 Overview & Purpose

This project is a personal portfolio designed to present my work, background, and technical skills in an engaging and interactive way.<br />
Built with **React**, **Three.js**, and **TailwindCSS**, it combines a 3D hero scene with a clean, responsive layout. The portfolio includes:

- **3D Hero Scene**: an interactive WebGL scene built with Three.js and React Three Fiber, responding to mouse movement for an immersive feel;
- **Projects Showcase**: a navigable carousel displaying selected works alongside a live 3D computer model rendering project previews dynamically;
- **Work Experience & Skills**: a structured overview of my academic path, internships, spoken languages, and publications;
- **Responsive Design**: adaptive layouts and interactions across mobile, tablet, and desktop breakpoints;
- **Reusable Architecture**: clean component and section structure supporting maintainability and scalability.

All code in this repository is written from scratch.

---

## 🛠️ Tech Stack

- [React](https://react.dev/), a component‑based JavaScript library for building dynamic, modular user interfaces;
- [TailwindCSS](https://tailwindcss.com/), a utility‑first framework that enables rapid UI development using composable, low‑level classes;
- [Three.js](https://threejs.org/), a JavaScript 3D library for rendering interactive WebGL scenes, models, and visual effects directly in the browser;
- [Vite](https://vitejs.dev/), a fast, modern build tool that provides instant dev‑server startup, smooth HMR, and optimized production builds;
- [Adobe Illustrator](https://www.adobe.com/products/illustrator.html), a professional vector graphics editor (for crafting and refining custom assets).

---

## 📁 Project Structure
<!-- TREE_START -->
```
├─ package.json
└─ src
   ├─ App.jsx
   ├─ components
   │  ├─ Button.jsx
   │  ├─ CanvasLoader.jsx
   │  ├─ Computers.jsx
   │  ├─ DemoComputer.jsx
   │  └─ HeroCamera.jsx
   ├─ constants
   │  └─ index.js
   ├─ index.css
   ├─ main.jsx
   └─ sections
      ├─ About.jsx
      ├─ Contact.jsx
      ├─ Experience.jsx
      ├─ Footer.jsx
      ├─ Hero.jsx
      ├─ Navbar.jsx
      └─ Projects.jsx
```
<!-- TREE_END -->

---

## 📦 Installation

Ensure you have the following installed on your machine:
- [Git](https://git-scm.com/);
- [Node.js](https://nodejs.org/en);
- [npm](https://www.npmjs.com/) (Node Package Manager).

Then clone the repository: 
```bash
git clone https://github.com/t-Federer/portfolio_01.git
```
And install the project dependencies:
```bash
cd portfolio_01
npm install
npm run dev
```
Finally, open http://localhost:5173 in your browser to view the project.

---

## ⚖️ License

This project is released under the CC BY‑NC 4.0 License.
You may view and study the code, but commercial use or redistribution is not permitted.
