const fs = require('fs');
const file = 'c:/Projetos/Sistema-GAB---ASSESP/src/pages/OrdersView.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the sort Config initialization
content = content.replace(
  /\}\)\.sort\(\(a, b\) => \{\s*if \(\!sortConfig\.key\) return 0;\s*if \(sortConfig\.key === 'os'\) \{/s,
  `}).sort((a, b) => {
    const activeKey = sortConfig.key || 'os';
    const activeDirection = sortConfig.key ? sortConfig.direction : 'desc';
    
    if (activeKey === 'os') {`
);

// We must also replace the remaining occurrences inside the sort function
// But only inside the sort function. We can just replace the specific strings.

// 1. In the `if (osA.year !== osB.year)` block
content = content.replace(
  /return sortConfig\.direction === 'asc' \? osA\.year \- osB\.year : osB\.year \- osA\.year;/g,
  `return activeDirection === 'asc' ? osA.year - osB.year : osB.year - osA.year;`
);

// 2. In the `if (osA.num !== osB.num)` block
content = content.replace(
  /return sortConfig\.direction === 'asc' \? osA\.num \- osB\.num : osB\.num \- osA\.num;/g,
  `return activeDirection === 'asc' ? osA.num - osB.num : osB.num - osA.num;`
);

// 3. For the string comparison block
content = content.replace(
  /if \(osA\.str < osB\.str\) return sortConfig\.direction === 'asc' \? \-1 : 1;\s*if \(osA\.str > osB\.str\) return sortConfig\.direction === 'asc' \? 1 : \-1;/g,
  `if (osA.str < osB.str) return activeDirection === 'asc' ? -1 : 1;
      if (osA.str > osB.str) return activeDirection === 'asc' ? 1 : -1;`
);

// 4. `if (sortConfig.key === 'status') {`
content = content.replace(
  /if \(sortConfig\.key === 'status'\) \{/g,
  `if (activeKey === 'status') {`
);

// 5. `} else if (sortConfig.key === 'data') {`
content = content.replace(
  /\} else if \(sortConfig\.key === 'data'\) \{/g,
  `} else if (activeKey === 'data') {`
);

// 6. Final return blocks in the sort function
content = content.replace(
  /if \(valA < valB\) return sortConfig\.direction === 'asc' \? \-1 : 1;\s*if \(valA > valB\) return sortConfig\.direction === 'asc' \? 1 : \-1;/g,
  `if (valA < valB) return activeDirection === 'asc' ? -1 : 1;
    if (valA > valB) return activeDirection === 'asc' ? 1 : -1;`
);

fs.writeFileSync(file, content);
console.log('OrdersView.jsx updated properly');
