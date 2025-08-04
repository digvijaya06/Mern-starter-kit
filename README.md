## 📌 MERN Starter Kit

A simple **MERN (MongoDB, Express, React, Node.js)** starter boilerplate to quickly kickstart full-stack web applications.

---

### 🚀 Features

* ✅ Backend with **Express.js** and **MongoDB**
* ✅ Frontend with **React.js** (Vite or CRA)
* ✅ RESTful API structure (Routes, Controllers, Models)
* ✅ `.env` file support using **dotenv**
* ✅ Basic folder structure for scalability

---

### 📂 Project Structure

```
mern-starter-kit/
│
├── backend/
│   ├── config/        # Database connection
│   ├── controllers/   # API logic
│   ├── models/        # Mongoose schemas
│   ├── routes/        # Express routes
│   ├── server.js      # Entry point
│   ├── .env           # Environment variables
│
├── frontend/
│   ├── src/           # React source code
│   ├── public/        # Static files
│   ├── package.json
│
├── .gitignore
├── README.md
```

---

### ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/mern-starter-kit.git
   ```
2. **Navigate into the project**

   ```bash
   cd mern-starter-kit
   ```
3. **Install dependencies for backend**

   ```bash
   cd backend
   npm install
   ```
4. **Install dependencies for frontend**

   ```bash
   cd ../frontend
   npm install
   ```

---

### ▶️ Running the App

1. **Start backend server**

   ```bash
   cd backend
   npm run dev
   ```
2. **Start frontend**

   ```bash
   cd frontend
   npm start
   ```
3. Open browser at **[http://localhost:3000](http://localhost:3000)**

---

### 📝 Environment Variables

In `backend/.env`:

```
PORT=5000
MONGO_URI=your-mongodb-connection-string
```

