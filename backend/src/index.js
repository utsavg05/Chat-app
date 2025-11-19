// import express from 'express'
// import dotenv from 'dotenv'
// import cookieParser from 'cookie-parser'
// import cors from 'cors'
// import { connectDB } from './lib/db.js'
// import { app, server } from './lib/socket.js'

// import path from 'path'

// import authRoutes from './routes/auth.routes.js'
// import messageRoutes from './routes/message.routes.js'


// dotenv.config()

// // const app = express()

// app.use(express.json())
// app.use(cookieParser())
// app.use(cors({
//     origin: 'http://localhost:5173',
//     credentials: true
// }))

// const PORT = process.env.PORT
// const __dirname = path.resolve()

// app.use('/api/auth', authRoutes)
// app.use('/api/messages', messageRoutes)

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../frontend/dist')))

//     app.get("/{*any}", (req, res) => {
//         res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//     });

// }

// server.listen(5001, () => {
//     console.log(`server is running on port: ${PORT}`);
//     connectDB()
// })



import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connectDB } from './lib/db.js';
import { app, server } from './lib/socket.js';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';

dotenv.config();

// middleware setup
app.use(express.json());
app.use(cookieParser());

// ✅ Update CORS to allow both localhost and Vercel frontend
const allowedOrigins = [
  'http://localhost:5173',
  'https://zync-three.vercel.app', // deployed frontend URL
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);


// start server
const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  connectDB();
});
