// *****************************************************************************
// index.js - This file is the entry point for the Node/Express server.
//
// ******************************************************************************

// Express app import

const app = require('./app');

// start up the Express app

app.listen(app.get('port'), () => {
  /* eslint-disable-next-line no-console */
  console.log('App running on port', app.get('port'));
});
