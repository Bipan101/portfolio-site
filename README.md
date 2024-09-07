# Portfolio Website

This is a personal portfolio website built with React.js, bundled using Vite, and styled with Tailwind CSS. It utilizes React Router DOM for smooth navigation across various sections.

## Features

- **React.js**: Modular and efficient development using the power of React components.
- **Vite**: Fast bundling with lightning-fast hot module replacement (HMR).
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **React Router DOM**: Enables dynamic, client-side routing for seamless navigation between pages.

## Project Structure

/src /components # Reusable components (e.g., Navbar, Footer, etc.) /pages # Pages (e.g., Home, About, Contact, github page) /assets # Static assets like images and icons /styles # Tailwind configuration and global styles


## Installation

1. Clone the repository:
 ```bash
    git clone https://github.com/Bipan101/portfolio-site.git

```
2. Navigate to the project directory:
```bash
    cd your directory

```
3. Install dependencies:
```bash
    npm install
    
```
4. Install React Router DOM
To enable routing in the project:
```bash
npm install react-router-dom
```
5. Install Tailwind CSS
Follow the steps to install and configure Tailwind CSS:

Install Tailwind and its peer dependencies:
```bash
npm install -D tailwindcss postcss autoprefixer
```
Initialize Tailwind configuration:
```bash
npx tailwindcss init
```
In your tailwind.config.js, set the content to:
```bash
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```
Add Tailwind’s directives to your src/index.css or a similar file:
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
 ```
 OR
 ```bash
 @import 'tailwindcss/base';
@import 'tailwindcss/utilities';
@import 'tailwindcss/components';
```
6. Run the Project
```bash
npm run dev
```


## Usage
After running the project, you can access it at http://localhost:5173/. The portfolio features sections such as About, Github, and Contact, all navigable through the React Router.
