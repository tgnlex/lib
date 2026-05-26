import { NL } from '../var/constants.ts'
import { timestamp } from './datetime.ts';
import fs from 'fs';




function read(file: string) {
  const data = fs.readFileSync(file, 'utf-8');
  if (!data) { throw new Error(`Error reading from ${file}`) };
  return data;
}

function writeText(file: string, content: string) {
  fs.writeFileSync(file, content, 'utf-8');
  console.info('Wrote to ', file);
}

function writeLog(file: string, message: string)  {
  const log = NL + message + " " + `${timestamp()}`;
  fs.appendFileSync(file, log);
}
function writeJson(file: string, data: object) {
  const json = JSON.stringify(data, null, 4);
  fs.writeFileSync(file, json);
  console.info('Wrote to ', file);
}

const write = {
  text: writeText,
  json: writeJson,
  log: writeLog, 
}

const file = { write, read };

export { write, read };
export default file;
