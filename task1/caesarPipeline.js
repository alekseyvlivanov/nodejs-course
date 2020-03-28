const { pipeline } = require('stream');

const caesarPipeline = (inputStream, transformStream, outputStream) => {
  pipeline(inputStream, transformStream, outputStream, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('Done!');
    }
  });
};

module.exports = caesarPipeline;
