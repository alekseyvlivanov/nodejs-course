const divider = 26;
const startCaps = 65;
const startLower = 97;

const caesarEncodeDecode = (action, shift, data) => {
  shift = shift % divider;

  if (action === 'encode') {
    return data
      .toString()
      .replace(/[A-Z]|[a-z]/g, a =>
        a.match(/[A-Z]/)
          ? String.fromCharCode(
              startCaps + ((a.charCodeAt(0) - startCaps + shift) % divider)
            )
          : String.fromCharCode(
              startLower + ((a.charCodeAt(0) - startLower + shift) % divider)
            )
      );
  }

  if (action === 'decode') {
    return data
      .toString()
      .replace(/[A-Z]|[a-z]/g, a =>
        a.match(/[A-Z]/)
          ? String.fromCharCode(
              startCaps +
                ((a.charCodeAt(0) - startCaps - shift + divider) % divider)
            )
          : String.fromCharCode(
              startLower +
                ((a.charCodeAt(0) - startLower - shift + divider) % divider)
            )
      );
  }

  return data.toString();
};

module.exports = caesarEncodeDecode;
