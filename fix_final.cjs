const fs = require('fs');
const file = 'c:/Projetos/Sistema-GAB---ASSESP/src/pages/OrdersView.jsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = `  }).sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    if (sortConfig.key === 'os') {
      const parseOS = (osStr) => {
        if (!osStr) return { num: 0, year: 0, str: '' };
        const parts = String(osStr).split('/');
        if (parts.length === 2) {
          return { num: parseInt(parts[0], 10) || 0, year: parseInt(parts[1], 10) || 0, str: String(osStr) };
        }
        return { num: 0, year: 0, str: String(osStr) };
      };
      
      const osA = parseOS(a.ordem_servico);
      const osB = parseOS(b.ordem_servico);
      
      if (osA.year !== osB.year) {
        return sortConfig.direction === 'asc' ? osA.year - osB.year : osB.year - osA.year;
      }
      if (osA.num !== osB.num) {
        return sortConfig.direction === 'asc' ? osA.num - osB.num : osB.num - osA.num;
      }
      
      if (osA.str < osB.str) return sortConfig.direction === 'asc' ? -1 : 1;
      if (osA.str > osB.str) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    }
    
    let valA = '';
    let valB = '';
    
    if (sortConfig.key === 'status') {
      valA = getStatus(a);
      valB = getStatus(b);
    } else if (sortConfig.key === 'data') {
      valA = a.equipamentos?.[0]?.data_tarefa || '';
      valB = b.equipamentos?.[0]?.data_tarefa || '';
    }
    
    if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
    if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });`;

const newStr = `  }).sort((a, b) => {
    const activeKey = sortConfig.key || 'os';
    const activeDirection = sortConfig.key ? sortConfig.direction : 'desc';
    
    if (activeKey === 'os') {
      const parseOS = (osStr) => {
        if (!osStr) return { num: 0, year: 0, str: '' };
        const parts = String(osStr).split('/');
        if (parts.length === 2) {
          return { num: parseInt(parts[0], 10) || 0, year: parseInt(parts[1], 10) || 0, str: String(osStr) };
        }
        return { num: 0, year: 0, str: String(osStr) };
      };
      
      const osA = parseOS(a.ordem_servico);
      const osB = parseOS(b.ordem_servico);
      
      if (osA.year !== osB.year) {
        return activeDirection === 'asc' ? osA.year - osB.year : osB.year - osA.year;
      }
      if (osA.num !== osB.num) {
        return activeDirection === 'asc' ? osA.num - osB.num : osB.num - osA.num;
      }
      
      if (osA.str < osB.str) return activeDirection === 'asc' ? -1 : 1;
      if (osA.str > osB.str) return activeDirection === 'asc' ? 1 : -1;
      return 0;
    }
    
    let valA = '';
    let valB = '';
    
    if (activeKey === 'status') {
      valA = getStatus(a);
      valB = getStatus(b);
    } else if (activeKey === 'data') {
      valA = a.equipamentos?.[0]?.data_tarefa || '';
      valB = b.equipamentos?.[0]?.data_tarefa || '';
    }
    
    if (valA < valB) return activeDirection === 'asc' ? -1 : 1;
    if (valA > valB) return activeDirection === 'asc' ? 1 : -1;
    return 0;
  });`;

content = content.replace(targetStr, newStr);
fs.writeFileSync(file, content);
console.log('Fixed properly without regex side-effects');
