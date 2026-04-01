# Booking Website

A MERN stack application for booking hotels.

## Prerequisites

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/try/download/community)

## Features

- User registration and login
- Hotel booking
- View bookings

## Tech Stack

- Frontend: React (Vite)
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT

## Setup

1. Make sure MongoDB is running on your system.
2. Clone or navigate to the project directory.
3. Install backend dependencies:
   ```
   cd backend
   npm install
   ```
4. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```
5. Start the backend:
   ```
   cd backend
   npm run dev
   ```
6. Start the frontend:
   ```
   cd frontend
   npm run dev
   ```
7. Open http://localhost:5173 for frontend, backend on http://localhost:5000

## Environment Variables

Create a `.env` file in backend directory with:

```
MONGO_URI=mongodb://localhost:27017/booking
JWT_SECRET=your_secret_key
```