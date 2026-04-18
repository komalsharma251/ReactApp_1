/**
 * Props for FocusControls component
 * - taskInput: current value of the task input field
 * - isRunning: indicates whether the timer is currently running
 * - onTaskChange: updates the task input value
 * - onStart: function to start the timer
 * - onStop: function to stop the timer
 */
interface FocusControlsProps {
  taskInput: string;
  isRunning: boolean;
  onTaskChange: (value: string) => void;
  onStart: () => void;
  onStop: () => void;
}

/**
 * FocusControls Component
 * Responsible for:
 * - Handling user input for task name
 * - Providing Start and Stop controls
 * - Managing button states based on timer status
 */
export function FocusControls({
  taskInput,
  isRunning,
  onTaskChange,
  onStart,
  onStop,
}: FocusControlsProps) {

  /**
   * Determines if the Start button should be enabled
   * - Task must not be empty
   * - Timer must not already be running
   */
  const canStart = taskInput.trim() !== "" && !isRunning;

  return (
    <div className="controls">

      {/* Task Input Label */}
      <label className="label" htmlFor="taskName">
        Task Name
      </label>

      {/* Task Input Field */}
      <input
        id="taskName"
        className="input"
        type="text"
        value={taskInput}
        onChange={(e) => onTaskChange(e.target.value)} // update task state
        placeholder="Enter your focus task..."
        disabled={isRunning} // prevent editing while timer is running
      />

      {/* Action Buttons */}
      <div className="buttonRow">

        {/* Start Button */}
        <button
          className="btn primary"
          type="button"
          onClick={onStart}
          disabled={!canStart} // only enabled when valid input & not running
        >
          Start Focus
        </button>

        {/* Stop Button */}
        <button
          className="btn"
          type="button"
          onClick={onStop}
          disabled={!isRunning} // only enabled when timer is running
        >
          Stop Session
        </button>

      </div>
    </div>
  );
}

export default FocusControls;