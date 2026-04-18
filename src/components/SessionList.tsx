import type { Session } from "../types/session";

/**
 * Props for SessionList component
 * - sessions: array of completed focus sessions
 * - onDelete: function to remove a session by id
 */
type Props = {
  sessions: Session[];
  onDelete: (id: number) => void;
};

/**
 * Utility function to format duration from seconds into:
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
 * SessionList Component
 * Responsible for:
 * - Displaying all saved sessions
 * - Showing task name, duration, and completion date
 * - Allowing user to delete a session
 */
const SessionList = ({ sessions, onDelete }: Props) => {

  /**
   * If no sessions exist, show empty state message
   */
  if (sessions.length === 0) {
    return (
      <p className="empty-state">
        No sessions yet. Start your first focus session.
      </p>
    );
  }

  return (
    <div className="session-list">

      {/* Loop through sessions and render each session card */}
      {sessions.map((s) => (
        <div key={s.id} className="session-card">

          {/* Session Information */}
          <div className="session-info">
            {/* Task Name */}
            <h4>{s.task}</h4>

            {/* Session Details */}
            <p className="session-meta">
              Duration: {formatDuration(s.duration)}
              <br />
              Completed: {s.date}
            </p>
          </div>

          {/* Delete Button */}
          <button
            className="delete-btn"
            onClick={() => onDelete(s.id)}
          >
            Delete
          </button>

        </div>
      ))}

    </div>
  );
};

export default SessionList;