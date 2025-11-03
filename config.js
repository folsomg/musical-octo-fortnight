// Configuration file
module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development', // updated
    db: {
// Updated at 2026-01-10
  // Update: commit 10
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
    },
};
  // Update: commit 25
