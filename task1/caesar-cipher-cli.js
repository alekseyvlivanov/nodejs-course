const caesarStreams = require('./caesarStreams');
const caesarPipeline = require('./caesarPipeline');

const argv = require('yargs')
  .usage('Usage: $0 [options]')
  .option('a', {
    alias: 'action',
    describe: 'an action encode/decode',
    type: 'string',
    demand: true
  })
  .option('s', {
    alias: 'shift',
    describe: 'a shift',
    type: 'number',
    demand: true
  })
  .option('i', {
    alias: 'input',
    describe: 'an input file',
    type: 'string'
  })
  .option('o', {
    alias: 'output',
    describe: 'an output file',
    type: 'string'
  }).argv;

const { action, shift, input, output } = argv;

try {
  if (action !== 'encode' && action !== 'decode') {
    throw new Error('action must be "encode|decode"');
  }

  if (shift < 0) {
    throw new Error('shift must not be negative');
  }
} catch (e) {
  process.exitCode = 1;
  console.error(`${e.name}: ${e.message}`);
}

const { inputStream, transformStream, outputStream } = caesarStreams(
  action,
  shift,
  input,
  output
);

caesarPipeline(inputStream, transformStream, outputStream);
