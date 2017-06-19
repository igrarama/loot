const fs = require('fs');

function initSchemas() {
    const files = fs.readdirSync(__dirname + '/schemas');
    files.forEach((file) => {
        require(__dirname + '\\schemas\\' + file);
    });
}

module.exports = {
    initSchemas: initSchemas
};