const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/services.ts');
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

// 1. We will replace lines 224 to 619 (0-indexed 223 to 618). 
// Let's first make sure what these lines are.
const startIdx = lines.findIndex(l => l.includes("slug: 'us-accounting-compliance'")) - 2; // the '{' before it
const endIdx = lines.findIndex(l => l.includes("slug: 'real-estate-investment'")) - 2; // the '},' before it

console.log(`Start index: ${startIdx}, End index: ${endIdx}`);
console.log(`Start line content: ${lines[startIdx]}`);
console.log(`End line content: ${lines[endIdx]}`);

