const fs = require('fs');
const path = require('path');
const db = require('../db')();
const destination = path.resolve('build/static/db');
fs.mkdirSync(destination, { recursive: true });
for (const [name, data] of Object.entries(db)) {
  fs.writeFileSync(path.join(destination, `${name}.json`), JSON.stringify(data, null, 2));
}
fs.copyFileSync('build/index.html', 'build/404.html');
fs.writeFileSync('build/.nojekyll', '');
console.log('JSON сохранен в build/static/db; 404.html и .nojekyll созданы');
