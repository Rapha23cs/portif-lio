const fs = require('fs');
const file = 'c:/Projetos/Sistema-GAB---ASSESP/src/components/modals/FinanceiroModal.jsx';
let content = fs.readFileSync(file, 'utf8');

// NF Status Fix
content = content.replace(
  /\{formData\.status_nf && !\["AUTORIZADO", "PENDENTE"\]\.includes\(formData\.status_nf\) && \(/,
  '{formData.status_nf && !["AUTORIZADO", "PENDENTE"].includes(formData.status_nf?.trim()?.toUpperCase()) && ('
);

// OB Status Fix
// First change PENDENTE option to AGUARDANDO
content = content.replace(
  /<option value="PENDENTE">PENDENTE<\/option>\s*\{formData\.status_ob && !\["PAGO", "PENDENTE"\]\.includes\(formData\.status_ob\) && \(/,
  '<option value="AGUARDANDO">AGUARDANDO</option>\n                      {formData.status_ob && !["PAGO", "AGUARDANDO"].includes(formData.status_ob?.trim()?.toUpperCase()) && ('
);

fs.writeFileSync(file, content);
console.log('Fixed financeiro using regex');
