const fs = require('fs');
const Transform = require('stream').Transform;
const caesarEncodeDecode = require('./caesarEncodeDecode');

const caesarStreams = (action, shift, input, output) => {
  const inputStream = input === '' ? process.stdin : fs.createReadStream(input);
  const outputStream =
    output === ''
      ? process.stdout
      : fs.createWriteStream(output, { flags: 'a' });

  const transformStream = new Transform({
    transform(chunk, _, callback) {
      this.push(caesarEncodeDecode(action, shift, chunk));
      callback();
    }
  });

  return { inputStream, transformStream, outputStream };
};

module.exports = caesarStreams;
