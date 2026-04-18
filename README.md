⏱️ FocusFlow – Productivity Timer App

FocusFlow is a modern React + TypeScript productivity application designed to help users stay focused, track their work sessions, and build better time management habits.

This app allows users to start and stop focus sessions, track duration, and review past activity through a clean and responsive dashboard interface.

🚀 Features
⏱ Real-time timer (MM format)
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
Frontend: React (with Hooks)
Language: TypeScript
Build Tool: Vite
Styling: CSS (Custom, responsive, modern UI)
State Management: React useState + useEffect
Storage: Browser localStorage
📂 Project Structure
src/
│
├── components/
│   ├── TimerDisplay.tsx      # Displays live timer and status
│   ├── FocusControls.tsx     # Handles input and start/stop actions
│   └── SessionList.tsx       # Displays session history
│
├── types/
│   └── session.ts            # Type definition for Session object
│
├── App.tsx                   # Main application logic and layout
├── App.css                   # Global styles and layout design
└── main.tsx                  # Entry point
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
User enters a task name and starts the timer
Timer increments every second using setInterval
On stopping:
Session is saved with task, duration, and timestamp
Data is stored in localStorage
Session history is rendered dynamically
Statistics are calculated using array methods like reduce() and Math.max()
📸 Screenshots

(Add screenshots here if required for submission)

📈 Future Improvements
⏸ Pause / Resume functionality
⭕ Animated circular progress timer
🌙 Dark mode toggle
📊 Data visualization (charts)
🔔 Notification or sound alerts
📅 Daily / weekly tracking
🎯 Learning Outcomes

This project demonstrates:

Component-based architecture in React
Type safety using TypeScript
State and side-effect management with Hooks
Data persistence with localStorage
Clean UI/UX design principles
Responsive layout implementation
👨‍💻 Author

Komal Sharma
React + TypeScript Developer

📄 License

This project is created for educational purposes.
