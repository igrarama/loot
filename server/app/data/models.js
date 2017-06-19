const fs = require('fs');
const path = require('path');

function initSchemas() {
    const files = fs.readdirSync(path.resolve(__dirname, 'schemas'));
    files.forEach((file) => {
        require(path.resolve(__dirname, 'schemas', file));
    });
}

module.exports = {
    initSchemas: initSchemas
};