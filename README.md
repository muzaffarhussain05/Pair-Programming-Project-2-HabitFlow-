# 🌱 HabitFlow

A minimal and intuitive habit tracker built with React, Firebase, and Tailwind CSS. HabitFlow helps you stay consistent by tracking your daily progress, visualizing streaks, and setting a bedtime goal—all from a clean and responsive interface.

![HabitFlow Screenshot](./public/demo.png) 
---

## 🚀 Features

- ✅ Add & track daily habits
- 🔁 Automatic streak calculation
- 🌙 Bedtime reminder with countdown
- 🔒 Google Authentication
- ☁️ Real-time syncing with Firebase Firestore
- 🎉 Toast notifications via `react-toastify`
- 💻 Responsive UI with Tailwind CSS

---

## 🛠️ Tech Stack

- **React** (w/ Context API)
- **Tailwind CSS**
- **Firebase Firestore** (for storage)
- **Firebase Auth** (Google sign-in)
- **React Router**
- **React Toastify**

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/habitflow.git
cd habitflow
npm install


🔑 Firebase Setup
Go to Firebase Console

Create a new project.

Enable Firestore and Authentication (Google).

Replace the Firebase config inside src/components/firebase.js:

js
Copy
Edit
// Example structure
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
};
🧪 Development
bash
Copy
Edit
npm run dev
📁 Folder Structure
bash
Copy
Edit
src/
│
├── components/         # UI components (Navbar, BedtimeButton, etc.)
├── context/            # Auth and Habit Context Providers
├── routes/             # AppRoutes
├── utils/              # Helper functions (streak calculation, time utils)
├── App.jsx             # Root app
└── main.jsx            # Entry point

🤝 Contributors
👤 Aisha Arain
👤 Muzaffar Hussain


Feel free to open issues or pull requests if you'd like to contribute!