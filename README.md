## What This Project Is About

NexTrade Frontend is the user-facing web application for the NexTrade platform. It allows users to explore the platform, understand its features, view pricing information, access support, and securely sign up or log in.


From the current route structure, this frontend includes:

- A home page
- An about page
- A product page
- A pricing page
- A support page
- Signup and login pages
- A fallback not-found page


 

 ![NexTrade Preview](./public/media/home.png)


## Tech Stack

- React
- Vite
- React Router
- Material UI
- Bootstrap
- Axios



## Project Structure

```text
frontend/
|-- public/
|   `-- media/
|-- src/
|   |-- landing/
|   |-- App.jsx
|   |-- Flash.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
`-- package.json
```

## Main Flow

- `src/main.jsx` is the main entry point.
- Routing is handled with `react-router-dom`.
- `Navbar` and `Footer` wrap the page layout across routes.
- Notifications are displayed using `react-toastify`.
- Static assets such as logos and media files are stored in `public/media/`.


## Live Website

[Visit NexTrade 📉📈📉](https://nextrade-frontend.onrender.com/)


## Available Pages

- `/` - Home page
- `/about` - Company/about section
- `/product` - Product overview
- `/pricing` - Pricing information
- `/support` - Support/help section
- `/signup` - User registration
- `/login` - User login

## Notes

- Most page-level UI is organized under `src/landing/`.
- `index.html` includes Bootstrap and Font Awesome via CDN.
- Environment-specific values can be stored in `.env`.


## Getting Started

If you are starting from the main project folder, move into the frontend directory first:

```bash
cd frontend
```

### Prerequisites

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

This starts the Vite development server for the frontend only.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```
