const fs = require('fs');
const file = 'c:/Projetos/Sistema-GAB---ASSESP/src/pages/OrdersView.jsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = `  }).sort((a, b) => {
    if (!activeKey) return 0;
    
    if (activeKey === 'os') {`;

const newStr = `  }).sort((a, b) => {
    const activeKey = sortConfig.key || 'os';
    const activeDirection = sortConfig.key ? sortConfig.direction : 'desc';
    
    if (activeKey === 'os') {`;

content = content.replace(targetStr, newStr);
fs.writeFileSync(file, content);
console.log('Fixed undefined variables');
