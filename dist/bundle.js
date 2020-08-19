const path = require('path');

module.exports = {
    entry: './src/js/finder.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}