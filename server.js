const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
