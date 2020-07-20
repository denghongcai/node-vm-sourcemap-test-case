const vm = require('vm');
const convert = require('convert-source-map');
const fs = require('fs');

let indexCode = convert.removeMapFileComments(fs.readFileSync('./dist/index.js', 'utf8'));
const sourceMap = JSON.parse(fs.readFileSync('./dist/index.js.map', 'utf8'));

const m = convert.fromObject(sourceMap);

const context = { console };
vm.createContext(context);

indexCode += '\n' + m.toComment() + '\n';

fs.writeFileSync('test-map.js', indexCode);

vm.runInContext(indexCode, context, {
  filename: 'index.js',
});

console.log('done');
