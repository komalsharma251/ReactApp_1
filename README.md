⏱️ FocusFlow – Productivity Timer App

FocusFlow is a modern React + TypeScript productivity application designed to help users stay focused, track their work sessions, and build better time management habits.

This app allows users to start and stop focus sessions, track duration, and review past activity through a clean and responsive dashboard interface.

🚀 Features
⏱ Real-time timer (MM:SS format)
▶️ Start and Stop focus sessions
📝 Task-based session tracking
💾 Persistent session storage using localStorage
📊 Dashboard with:
Total focus time
Number of sessions
Longest session
📋 Session history with delete functionality
🎨 Modern UI with responsive design
⚡ Smooth user interactions and hover effects
🛠️ Tech Stack
Frontend: React (Hooks)
Language: TypeScript
Build Tool: Vite
Styling: CSS (Custom UI)
State Management: useState, useEffect
Storage: Browser localStorage
📂 Project Structure
src/
│
├── components/
│   ├── TimerDisplay.tsx
│   ├── FocusControls.tsx
│   └── SessionList.tsx
│
├── types/
│   └── session.ts
│
├── App.tsx
├── App.css
└── main.tsx
⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/focusflow.git
cd focusflow
2. Install dependencies
npm install
3. Run the development server
npm run dev
4. Open in browser
http://localhost:5173/
🧠 How It Works
User enters a task and starts the timer
Timer runs using setInterval (updates every second)
When stopped:
Session is saved with task, duration, and timestamp
Data is stored in localStorage
Session history is displayed dynamically
Statistics are calculated using:
reduce() → total time
Math.max() → longest session
📸 Screenshots

Add screenshots here if required

📈 Future Improvements
⏸ Pause / Resume feature
⭕ Animated circular timer
🌙 Dark mode
📊 Charts (data visualization)
🔔 Sound notifications
📅 Daily / weekly tracking
🎯 Learning Outcomes

This project demonstrates:

React component-based architecture
TypeScript type safety
State management using Hooks
Side-effect handling with useEffect
Local storage integration
Responsive UI design
👨‍💻 Author

Komal Sharma
React + TypeScript Developer

📄 License

This project is created for educational purposes.
