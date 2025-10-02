// Utility functions
export function formatDate(date) {
    return date.toISOString().split('T')[0];
  // Update: commit 24
}
 // updated
export function validateEmail(email) {
// Updated at 2026-01-10
  // Update: commit 55
  // Update: commit 57
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
