/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config();

// DEFAULT FILE NAMES
const targetLocal = './src/environments/environment.ts';
const targetProd = './src/environments/environment.prod.ts';
const targetExep = './src/environments/environment.exp.ts';

// READE EXAMPLE FILE
const file = fs.readFileSync(targetExep, 'utf8');

// SEARCH IN FILE EVERY ATTR
const regEx = /(\w+)\s?\:\s?(:\w+|'.*'),?/gm;
const envConfigFile = file.replace(regEx, (_match: string, attr: string, vle: string) => {
  // TRANSFORM ATTR IN SNAKE CASE
  const envVar = attr
    .split(/(?=[A-Z])/)
    .join('_')
    .toUpperCase();

  // FORMAT VALUE
  let attrName = attr;

  var attrValue: string | undefined = '';
  if (attr === 'databaseURL') {
    attrValue = process.env.DATABASE_URL;
  } else {
    attrValue = process.env[envVar];
  }
  if (vle) {
    vle = `'${vle}'`;
  }

  return `${attrName}: '${attrValue}',`;
});

// IF NOT EXIST LOCAL ENVERIONMENT
if (!fs.existsSync(targetLocal)) {
  writeFileUsingFS(targetLocal, envConfigFile);
}

// FORCE REWRITE PROD ENVERIOMENT
writeFileUsingFS(targetProd, envConfigFile);

// NODE FUNCTIONS TO WRITE FILE
function writeFileUsingFS(targetPath: string, environmentFileContent: string) {
  fs.writeFile(targetPath, environmentFileContent, function (err: any) {
    if (err) {
      console.log(err);
    }
    if (environmentFileContent !== '') {
      console.log(colors.magenta(`Environment file generated correctly at ${targetPath}`));
    }
  });
}
