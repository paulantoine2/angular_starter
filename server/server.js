const express = require('express');

// Express development server
const app = express();

const PORT = process.env.PORT || 4000;

// REST API Endpoint
app.use('/api', require('./api'));

// Start up the Node server
app.listen(PORT, () => {
  console.log(`API Development Server listening on http://localhost:${PORT}`);
});
