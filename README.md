# 💬 Zync — Real-Time Chat App

Zync is a full-stack real-time chat application that lets users chat privately or in groups, with instant message delivery, persistent storage, and a beautiful multi-theme UI. Built with the MERN stack, Socket.io, Zustand, and JWT, Zync delivers both performance and polish.

[![MERN](https://img.shields.io/badge/Tech-MERN-blue)](https://mern.io/)
[![Socket.io](https://img.shields.io/badge/RealTime-Socket.io-black)](https://socket.io/)
[![JWT](https://img.shields.io/badge/Auth-JWT-green)](https://jwt.io)
[![Zustand](https://img.shields.io/badge/State-Zustand-orange)](https://github.com/pmndrs/zustand)
[![DaisyUI](https://img.shields.io/badge/UI-DaisyUI-blueviolet)](https://daisyui.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🚀 Features

- 🔐 **JWT Authentication** – Secure login and protected routes.
- 💬 **Real-Time Chat** – Instant message exchange using WebSockets.
- 📦 **Persistent Message History** – Chats are stored using MongoDB.
- 🎨 **Responsive Design** – Fully mobile-friendly layout with multiple theme support via DaisyUI.
- 🧠 **Global State Management** – Zustand ensures fast and consistent state across the app.
- 👥 **Private & Group Messaging** – Start one-on-one or group conversations.(upcoming feature)

---

## 🛠️ Tech Stack

| Layer         | Technologies Used                                          |
|---------------|------------------------------------------------------------|
| **Frontend**  | React.js, Zustand, DaisyUI, Vite                           |
| **Backend**   | Node.js, Express.js                                        |
| **Database**  | MongoDB, Mongoose                                          |
| **Real-Time** | Socket.io                                                  |
| **Auth**      | JWT (JSON Web Tokens)                                      |
| **Dev Tools** | Git, GitHub, VS Code, dotenv, Postman                     |


## 🧑‍💻 Getting Started

### ✅ Prerequisites

- Node.js
- npm
- MongoDB (local or Atlas)

### 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/utsavg05/Chat-app.git
cd zync

# 2. Install backend dependencies
npm install

# 3. Setup environment variables
touch .env

Add your secrets in .env:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

# 4. Install frontend dependencies
cd client
npm install

# 5. Run both client and server
cd ..
npm run dev



Made with 💻 by Utsav Gupta using the power of the MERN stack ⚡
