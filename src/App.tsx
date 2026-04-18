import { useEffect, useState } from "react";
import TimerDisplay from "./components/TimerDisplay";
import FocusControls from "./components/FocusControls";
import SessionList from "./components/SessionList";
import "./App.css";
import type { Session } from "./types/session";

/**
 * Main App Component
 * Handles:
 * - Timer logic
 * - Session management
 * - Local storage persistence
 * - Dashboard UI layout
 */
function App() {

  // ⏱ Timer state (seconds elapsed)
  const [seconds, setSeconds] = useState(0);

  // ▶️ Whether timer is running or stopped
  const [isRunning, setIsRunning] = useState(false);

  // 📝 Current task input
  const [task, setTask] = useState("");

  // 📊 List of completed focus sessions
  const [sessions, setSessions] = useState<Session[]>([]);


  /**
   * Utility function to format seconds into:
   * - "X sec"
   * - "X min"
   * - "X min Y sec"
   */
  const formatDuration = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;

    if (mins === 0) return `${secs} sec`;
    if (secs === 0) return `${mins} min`;
    return `${mins} min ${secs} sec`;
  };


  /**
   * Timer Effect
   * Starts interval when isRunning = true
   * Stops interval when component unmounts or isRunning changes
   */
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);


  /**
   * Load saved sessions from localStorage (runs once on mount)
   */
  useEffect(() => {
    const saved = localStorage.getItem("sessions");
    if (saved) {
      setSessions(JSON.parse(saved));
    }
  }, []);


  /**
   * Save sessions to localStorage whenever sessions change
   */
  useEffect(() => {
    localStorage.setItem("sessions", JSON.stringify(sessions));
  }, [sessions]);


  /**
   * Start Timer Handler
   * Validates task input before starting
   */
  const handleStart = () => {
    if (!task.trim()) {
      alert("Please enter a task");
      return;
    }
    setIsRunning(true);
  };


  /**
   * Stop Timer Handler
   * - Saves session if time > 0
   * - Resets timer and input
   */
  const handleStop = () => {
    setIsRunning(false);

    if (seconds > 0) {
      const newSession: Session = {
        id: Date.now(), // unique ID
        task,
        duration: seconds,
        date: new Date().toLocaleString(),
      };

      setSessions([newSession, ...sessions]);
    }

    setSeconds(0);
    setTask("");
  };


  /**
   * Delete a session by ID
   */
  const deleteSession = (id: number) => {
    setSessions(sessions.filter((s) => s.id !== id));
  };


  /**
   * Total focus time across all sessions
   */
  const totalTime = sessions.reduce((acc, s) => acc + s.duration, 0);

  /**
   * Longest single session
   */
  const longestSession =
    sessions.length > 0 ? Math.max(...sessions.map((s) => s.duration)) : 0;


  return (
    <div className="app-shell">

      {/* ===== HERO HEADER ===== */}
      <header className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-badge">Productivity Tracker</span>

          <h1>FocusFlow</h1>

          <p>
            A clean focus timer to help you stay on task, track sessions, and
            build productive habits.
          </p>
        </div>
      </header>


      {/* ===== MAIN DASHBOARD ===== */}
      <main className="dashboard">

        {/* ===== TIMER SECTION ===== */}
        <section className="main-panel card">
          <div className="panel-header">
            <div>
              <h2>Focus Session</h2>
              <p>Track your current task in real time.</p>
            </div>
          </div>

          {/* Timer Display */}
          <TimerDisplay seconds={seconds} isRunning={isRunning} />

          {/* Controls (Input + Buttons) */}
          <FocusControls
            taskInput={task}
            isRunning={isRunning}
            onTaskChange={setTask}
            onStart={handleStart}
            onStop={handleStop}
          />
        </section>


        {/* ===== STATS SECTION ===== */}
        <aside className="stats-panel">

          <div className="mini-card">
            <span className="mini-label">Total Focus</span>
            <h3>{formatDuration(totalTime)}</h3>
          </div>

          <div className="mini-card">
            <span className="mini-label">Sessions</span>
            <h3>{sessions.length}</h3>
          </div>

          <div className="mini-card">
            <span className="mini-label">Longest Session</span>
            <h3>{formatDuration(longestSession)}</h3>
          </div>
        </aside>


        {/* ===== SESSION HISTORY ===== */}
        <section className="history-panel card">
          <div className="panel-header">
            <div>
              <h2>Session History</h2>
              <p>Review your completed focus sessions.</p>
            </div>
          </div>

          <SessionList sessions={sessions} onDelete={deleteSession} />
        </section>

      </main>
    </div>
  );
}

export default App;