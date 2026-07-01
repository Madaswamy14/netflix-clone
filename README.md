# Netflix Clone - Login Page & Backend Integration

This project is a replication of the Netflix login page with frontend validation, backend authentication, and redirection to a dummy Dashboard. It has been built using React for the frontend and Node.js with Express for the backend.

---

## 📂 Project Structure

```text
netflix-clone/
├── backend/            # Express Server (Port 5000)
│   ├── server.js       # Main server file handling login endpoint
│   ├── package.json    # Backend dependencies (express, cors)
│   └── package-lock.json
│
├── frontend/           # React Frontend (Vite + Tailwind CSS)
│   ├── src/
│   │   ├── App.jsx     # Navigation Routing Setup
│   │   ├── Login.jsx   # Netflix-themed Login Page
│   │   ├── Dashboard.jsx # Dummy Dashboard on successful login
│   │   ├── main.jsx    # Entry point
│   │   └── index.css   # Global styles & Tailwind configuration
│   ├── package.json    # Frontend dependencies (react, axios, tailwindcss)
│   └── vite.config.js  # Vite build & plugin configurations
│
└── .gitignore          # Root-level Git ignore settings
```

---

## 🛠️ Features Included

1. **Netflix UI Replication**: Designed matching Netflix's style utilizing dark overlays, signature fonts, responsive layout, and the red theme colors.
2. **Form Handling**: Captures inputs for `Email` and `Password` using state variables.
3. **Frontend Validation**: Highlights missing input fields before any network call.
4. **Express Backend**: Custom server listening on port `5000` with JSON parsing and CORS middleware enabled.
5. **Mock Authentication**: Authenticates logins against static user credentials:
   - **Email**: `test@netflix.com`
   - **Password**: `password123`
6. **Error Handling**: Displays user-friendly error banners upon invalid login attempts (e.g. incorrect password or server error).
7. **Success Redirection**: Smooth navigation to a dummy `/dashboard` screen upon valid authentication.

---

## 🚀 Setup & Execution Instructions

Ensure you have [Node.js](https://nodejs.org/) installed.

### Step 1: Start the Backend Server
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
   *The backend server will run on **`http://localhost:5000`**.*

### Step 2: Start the Frontend App
1. Open a new terminal window and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   *The frontend application will be hosted on **`http://localhost:5173`** (or another port outputted in the terminal).*

---

## 📡 API Reference

### Login Endpoint
* **URL**: `/api/login`
* **Method**: `POST`
* **Content-Type**: `application/json`
* **Request Body**:
  ```json
  {
    "email": "test@netflix.com",
    "password": "password123"
  }
  ```
* **Success Response (200 OK)**:
  ```json
  {
    "message": "Login successful",
    "token": "mock-jwt-token-123"
  }
  ```
* **Error Response (401 Unauthorized)**:
  ```json
  {
    "error": "Invalid email or password."
  }
  ```
