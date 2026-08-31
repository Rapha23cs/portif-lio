const fs = require('fs');
const file = 'c:/Projetos/Sistema-GAB---ASSESP/src/components/modals/FinanceiroModal.jsx';
let content = fs.readFileSync(file, 'utf8');

const targetNF = `<option value="AUTORIZADO">AUTORIZADO</option>
                    <option value="PENDENTE">PENDENTE</option>
                    {formData.status_nf && !["AUTORIZADO", "PENDENTE"].includes(formData.status_nf) && (
                      <option value={formData.status_nf}>{formData.status_nf}</option>
                    )}`;

const replaceNF = `<option value="AUTORIZADO">AUTORIZADO</option>
                    <option value="PENDENTE">PENDENTE</option>
                    {formData.status_nf && !["AUTORIZADO", "PENDENTE"].includes(formData.status_nf?.trim()?.toUpperCase()) && (
                      <option value={formData.status_nf}>{formData.status_nf}</option>
                    )}`;

content = content.replace(targetNF, replaceNF);

const targetOB = `<option value="PAGO">PAGO</option>
                      <option value="PENDENTE">PENDENTE</option>
                      {formData.status_ob && !["PAGO", "PENDENTE"].includes(formData.status_ob) && (
                        <option value={formData.status_ob}>{formData.status_ob}</option>
                      )}`;

const replaceOB = `<option value="PAGO">PAGO</option>
                      <option value="AGUARDANDO">AGUARDANDO</option>
                      {formData.status_ob && !["PAGO", "AGUARDANDO"].includes(formData.status_ob?.trim()?.toUpperCase()) && (
                        <option value={formData.status_ob}>{formData.status_ob}</option>
                      )}`;

content = content.replace(targetOB, replaceOB);

fs.writeFileSync(file, content);
console.log('Financeiro modal options updated');
