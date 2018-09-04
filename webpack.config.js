const path = require('path');

module.exports = {
  entry: './js/agency.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};