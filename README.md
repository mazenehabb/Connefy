# Connefy

Connefy is a social-media web application made for university students. It aims to help students discover campus communities, share updates, and stay connected with university life.

> This project is currently under active development.

## Current features

- Responsive landing page and campus feed UI
- Sign-up form connected to the Route API
- Login form connected to the Route API
- Client-side form validation with Zod and React Hook Form
- Inline validation feedback and toast notifications
- Loading states for authentication requests
- Persistent login option with `Remember me`

## Tech stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Router
- React Hook Form + Zod
- Axios
- React Toastify
- React Loader Spinner

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/connefy.git
cd connefy
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run lint` | Runs ESLint checks |
| `npm run preview` | Previews the production build locally |

## Project status

The authentication flow and core interface are in place. Upcoming work will include completing the feed experience, profiles, posts, and additional campus interactions.

## Author

Built by **[Your Name](https://github.com/YOUR_USERNAME)**.
