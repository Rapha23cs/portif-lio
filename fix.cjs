const fs = require('fs');
const file = 'c:/Projetos/Sistema-GAB---ASSESP/src/pages/OrdersView.jsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = `  }).sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    if (sortConfig.key === 'os') {`;

const newStr = `  }).sort((a, b) => {
    const activeKey = sortConfig.key || 'os';
    const activeDirection = sortConfig.key ? sortConfig.direction : 'desc';
    
    if (activeKey === 'os') {`;

content = content.replace(targetStr, newStr);

// Replace remaining sortConfig references inside the sort function
content = content.replace(/sortConfig\.direction/g, 'activeDirection');
content = content.replace(/sortConfig\.key/g, 'activeKey');

fs.writeFileSync(file, content);
console.log('Fixed sorting logic');
