const mongoose = require('mongoose');
const fs = require('fs');

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// });

function initSchemas() {
    const files = fs.readdirSync(__dirname + '/schemas');
    files.forEach((file) => {
        require(__dirname + '\\schemas\\' + file);
    });
}

module.exports = {
    initSchemas: initSchemas
};