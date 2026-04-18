/**
 * Props definition for TimerDisplay component
 * - seconds: total elapsed time in seconds
 * - isRunning: indicates whether the timer is active
 */
type Props = {
  seconds: number;
  isRunning: boolean;
};

/**
 * TimerDisplay Component
 * Responsible for:
 * - Formatting and displaying time (MM:SS)
 * - Showing timer status (running / stopped)
 */
const TimerDisplay = ({ seconds, isRunning }: Props) => {

  /**
   * Convert total seconds into minutes (MM)
   * padStart ensures 2-digit format (e.g., 04 instead of 4)
   */
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");

  /**
   * Get remaining seconds (SS)
   */
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div className="timer-container">

      {/* Circular Timer UI */}
      <div className="timer-circle">
        <h1 className="timer-text">
          {/* Display formatted time */}
          {mins}:{secs}
        </h1>
      </div>

      {/* Status Indicator */}
      <p className={`status ${isRunning ? "running" : "stopped"}`}>
        {/* Show dynamic status text based on timer state */}
        {isRunning ? "● Focus in progress" : "● Ready to start"}
      </p>
    </div>
  );
};

export default TimerDisplay;