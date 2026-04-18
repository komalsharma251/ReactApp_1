/**
 * Session Type Definition
 * Represents a single focus session completed by the user.
 *
 * Fields:
 * - id: unique identifier for each session (used for rendering & deletion)
 * - task: name/description of the task performed during the session
 * - duration: total time spent on the task (in seconds)
 * - date: timestamp indicating when the session was completed
 */
export type Session = {
  id: number;
  task: string;
  duration: number;
  date: string;
};