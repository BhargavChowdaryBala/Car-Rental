# 🚗 Drive Away — Premium Car Rental Platform

[![Node.js Version](https://img.shields.io/badge/Node.js-v20.x-blue?style=flat-square&logo=node.js)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/React-v19.x-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-v6.x-646CFF?style=flat-square&logo=vite)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v8.x-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-v5.x-000000?style=flat-square&logo=express)](https://expressjs.com/)

**Drive Away** is a modern, high-performance, full-stack Car Rental Single Page Application (SPA) designed to connect car owners and renters seamlessly. Built using the MERN (MongoDB, Express, React, Node.js) stack, the application boasts a premium, responsive design styled with **Tailwind CSS v4** and fluid UI micro-animations powered by **Motion**.

---

## 🌟 Key Features

### 👤 Renters (Users) Flow
- **Fast Search & Filter:** Filter cars by location, pickup date, and return date.
- **Car Detail View:** High-resolution details showing seating capacity, fuel type, transmission, price per day, location, and owner.
- **Under-Two-Minute Booking:** Quick check-availability and booking flow.
- **Booking Dashboard:** Track active, pending, and past bookings along with status and billing details.

### 💼 Vehicle Owners Flow
- **Owner Dashboard:** Overview of total revenue, active listings, total bookings, recent bookings, and incoming cars.
- **Inventory Management:** Add new vehicles, toggle vehicle availability, and delete listings.
- **Booking Management:** Confirm or cancel pending renter bookings in real-time.
- **Profile Customization:** Upload and update profile pictures via ImageKit.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React (v19), Vite (v6), Tailwind CSS (v4), React Router (v7), React Hot Toast, Motion |
| **Backend** | Node.js, Express (v5), Multer (file parsing), JWT (JSON Web Token), Bcrypt (password hashing) |
| **Database** | MongoDB Atlas, Mongoose ODM |
| **Media Host** | ImageKit.io (for optimized image storage, webp conversion, and fast CDN delivery) |
| **Deployment** | Vercel (Configured via `vercel.json` for frontend SPA rewrites and serverless function hosting) |

---

## 📁 Directory Structure

```text
Car_Rental/
├── client/                     # Frontend Vite + React + Tailwind v4 App
│   ├── public/                 # Static public assets
│   ├── src/
│   │   ├── assets/             # Brand logos, icons, and local car graphics
│   │   ├── components/         # Reusable UI parts (Navbar, Footer, Hero, Loader, etc.)
│   │   │   └── owner/          # Dashboard layout parts (Sidebar, NavbarOwner)
│   │   ├── context/            # Global AppContext (auth, cars state, search fields)
│   │   ├── pages/              # Main routing views (Home, Cars, CarDetails, MyBookings)
│   │   │   └── owner/          # Owner-specific views (AddCar, Dashboard, ManageCars, etc.)
│   │   ├── App.jsx             # Main Application routing config
│   │   ├── index.css           # Tailwind v4 import & custom CSS styles
│   │   └── main.jsx            # React root entry point
│   ├── package.json            # Frontend script & packages configuration
│   ├── vite.config.js          # Vite building config
│   └── vercel.json             # Vercel client rewrite configurations
│
├── server/                     # Backend Node.js + Express REST API
│   ├── configs/                # MongoDB & ImageKit configurations
│   ├── controllers/            # Controller logic (booking, owner, user)
│   ├── middleware/             # Auth protectors & Multer storage configuration
│   ├── models/                 # Mongoose schemas (Booking, Car, User)
│   ├── routes/                 # API route endpoints (bookingRoutes, ownerRoutes, userRoutes)
│   ├── server.js               # Express application entry point
│   ├── seed.js                 # Seeding script to populate MongoDB Atlas with dummy cars
│   ├── package.json            # Backend scripts & NPM dependencies
│   └── vercel.json             # Vercel server deployment & serverless config
└── README.md                   # Project documentation (this file)
```

---

## ⚙️ Environment Configurations

Create a `.env` file in both `client/` and `server/` directories using the templates below.

### 1. Backend Config (`server/.env`)
```env
PORT=3000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_signing_key

# ImageKit Configuration (Get these from your ImageKit Dashboard)
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_endpoint_url
```

### 2. Frontend Config (`client/.env`)
```env
VITE_CURRENCY=$
VITE_BASE_URL=http://localhost:3000
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed (v18 or higher recommended).
- A MongoDB database instance running locally or on Atlas.
- An ImageKit.io account for media uploads.

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Car_Rental
   ```

2. **Setup the Backend:**
   ```bash
   cd server
   npm install
   # Create .env and fill in configuration
   # To start the server in development mode (with nodemon):
   npm run server
   ```

3. **Setup the Frontend:**
   ```bash
   cd ../client
   npm install
   # Create .env and configure VITE_BASE_URL
   # Start the React Vite dev server:
   npm run dev
   ```

4. **Access the Web App:**
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📡 REST API Documentation

The backend exposes the following REST routes:

### 🔐 Authentication & User Routes
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/user/register` | Register a new user (role: `user` or `owner`) | No |
| `POST` | `/api/user/login` | Login user and retrieve JWT token | No |
| `GET` | `/api/user/data` | Get logged-in user profile details | Yes (JWT) |
| `GET` | `/api/user/cars` | Fetch all available car listings | No |

### 🛠️ Owner Management Routes
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/owner/change-role` | Upgrade current user's role to `owner` | Yes (JWT) |
| `POST` | `/api/owner/add-car` | Add a new car listing (supports image upload via Multer) | Yes (JWT) |
| `GET` | `/api/owner/cars` | List all cars uploaded by the active owner | Yes (JWT) |
| `POST` | `/api/owner/toggle-car` | Toggle booking availability of a car listing | Yes (JWT) |
| `POST` | `/api/owner/delete-car` | Delete a car listing | Yes (JWT) |
| `GET` | `/api/owner/dashboard` | Fetch owner statistics (revenue, total bookings, inventory) | Yes (JWT) |
| `POST` | `/api/owner/update-image` | Upload/change owner profile avatar | Yes (JWT) |

### 📅 Booking Routes
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/bookings/check-availability` | Check if a car is available for a specified date range | No |
| `POST` | `/api/bookings/create` | Create a booking reservation for a car | Yes (JWT) |
| `GET` | `/api/bookings/user` | Retrieve bookings made by the active user | Yes (JWT) |
| `GET` | `/api/bookings/owner` | Retrieve booking requests received by the car owner | Yes (JWT) |
| `POST` | `/api/bookings/change-status` | Confirm or cancel a booking status | Yes (JWT) |

---

## 🌐 Deployment on Vercel

The application is fully configured for deployment on Vercel:

### Backend Deployment (`server/vercel.json`)
The server runs as a Vercel serverless function using `@vercel/node`. Ensure the Vercel project environment variables match those in `server/.env`.

### Frontend Deployment (`client/vercel.json`)
Configured to rewrite all requests (`/(.*)`) back to `/index.html`, allowing React Router Dom's SPA client-side routing to work seamlessly without 404 errors on page reload.

---

## 💡 Notes & Troubleshooting

> [!NOTE]
> Make sure to add `cors` headers configuration on the server to permit cross-origin requests from the client during local development.

> [!WARNING]
> Ensure that your MongoDB Atlas cluster allows incoming connections from your deployment server (allow list `0.0.0.0/0` in Atlas settings if deploying to serverless platforms like Vercel).

> [!IMPORTANT]
> The database schema uses the field name `isAvaliable` for tracking car availability. Ensure your payloads use this exact field name to avoid schema insertion errors.




