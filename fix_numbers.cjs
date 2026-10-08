const fs = require('fs');
let txt = fs.readFileSync('src/data/services.ts', 'utf8');
let idx = 1;
txt = txt.replace(/number: '0[1-9]'/g, () => {
    return "number: '0" + (idx++) + "'";
});
fs.writeFileSync('src/data/services.ts', txt, 'utf8');
console.log('Fixed numbers');
