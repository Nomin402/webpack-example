const path = require('path');

module.exports = {
    entry: [ './src/js/app.js', './src/js/finder', './src/js/languages'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development'
}