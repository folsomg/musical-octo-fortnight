// Utility functions
export function formatDate(date) {
    return date.toISOString().split('T')[0];
  // Update: commit 24
}
 // updated
export function validateEmail(email) {
  // Update: commit 55
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
