# Auth App - Advanced Authentication System

A full-stack MERN (MongoDB, Express, React, Node.js) authentication system featuring email verification, password reset, and secure JWT-based session management.

## 🚀 Features

- **User Signup & Login**: Secure authentication with hashed passwords.
- **Email Verification**: Users receive a verification code via email (integrated with Resend).
- **Password Reset**: Secure flow to reset forgotten passwords using email tokens.
- **Protected Routes**: React-based routing that restricts access to authenticated and verified users.
- **State Management**: Uses `Zustand` for clean and efficient global state handling.
- **Responsive UI**: A modern, premium design built with Tailwind CSS and Framer Motion.
- **Cookie-based Auth**: Secure JWT storage using `httpOnly` cookies.

## 🛠️ Tech Stack

### Frontend
- **React** (Vite)
- **Zustand** (State Management)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **React Router** (Navigation)
- **React Hot Toast** (Notifications)
- **Axios** (API Requests)

### Backend
- **Node.js** & **Express**
- **MongoDB** (Object Data Modeling via Mongoose)
- **JSON Web Token (JWT)** (Authentication)
- **Bcrypt.js** (Password Hashing)
- **Resend** (Email Service)
- **Cookie-parser** (Cookie Parsing)

## 📥 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Auth_App
   ```

2. **Install dependencies**:
   Install root, backend, and frontend packages:
   ```bash
   npm install
   cd frontend
   npm install
   cd ..
   ```

3. **Environment Setup**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   RESEND_API_KEY=your_resend_api_key
   CLIENT_URL=http://localhost:5173
   ```

## 🏃‍♂️ Running the App

You can run both the frontend and backend simultaneously using a single command from the root directory:

```bash
npm run all
```

Individual scripts:
- `npm run backend`: Starts the backend server with Nodemon.
- `npm run frontend`: Starts the Vite development server for the React app.
- `npm run dev`: Legacy script for backend development.

## 📁 Project Structure

```text
Auth_App/
├── backend/            # Express server, routes, and controllers
│   ├── db/             # Database connection logic
│   ├── mailtrap/       # Email sending configurations (Resend)
│   ├── middleware/     # Auth and validation middlewares
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API endpoints
│   └── index.js        # Server entry point
├── frontend/           # React frontend (Vite)
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Application views
│   │   ├── store/      # Zustand auth store
│   │   └── App.jsx     # Main application logic
│   └── ...
└── .env                # Environment variables
```

## 🚀 Deployment

This project is optimized for deployment on platforms like **Render**, **Railway**, or **Heroku**.

### Deployment Steps (e.g., Render)
1. **New Web Service**: Connect your GitHub repository.
2. **Build Command**: `npm run build`
3. **Start Command**: `npm start`
4. **Environment Variables**: Add all variables from your `.env` file (ensure `NODE_ENV` is set to `production`).

### Deployment Steps (Vercel)
1. **Import Project**: Connect your GitHub repository to Vercel.
2. **Framework Preset**: Vercel should automatically detect Vite, but you can leave it as "Other" since we use a monolithic structure.
3. **Build Command**: `npm run build`
4. **Environment Variables**: Add your `.env` variables in the Vercel dashboard.
5. **Deploy**: Vercel will use the `vercel.json` to route `/api` to the backend and everything else to the frontend.

### Manual Production Test
To test the production build locally:
1. Run `npm run build`
2. Set `NODE_ENV=production` in your `.env`
3. Run `npm start`
4. Access the app at `http://localhost:5000`

## 📝 License
This project is licensed under the ISC License.
