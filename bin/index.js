#!/usr/bin/env node

const { inspect } = require('util');
const sade = require('sade');
const { bin, version } = require('../package.json');
const { encode, decode } = require('../dist');

const program = sade(Object.keys(bin)[0]);

program.version(version);

program
  .command('encode <json-like>')
  .describe(
    'Encode a string representing a JavaScript object as a base36 string'
  )
  .example(`'{ x: [true, 1, "1", null] }'`)
  .action(props => {
    let encoded;
    try {
      let parsed;
      try {
        parsed = JSON.parse(props);
      } catch (err) {}
      encoded = encode(
        typeof parsed === 'object' ? parsed : eval(`(${props})`)
      );
    } catch (err) {
      console.error(err);
      process.exit(0);
    }

    console.log(encoded);
    process.exit(1);
  });

program
  .command('decode <base36-string>')
  .describe('Decode a JavaScript object from a base36 string')
  .example('3zo7wx3dtlini74hp4rl9mo1n8ns65v1mkcd')
  .action(base36String => {
    let decoded;
    try {
      decoded = decode(base36String);
    } catch (err) {
      console.error(err);
      process.exit(0);
    }

    console.log(inspect(decoded, false, null, true));
    process.exit(1);
  });

program.parse(process.argv);
