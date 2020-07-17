const parser = require("ttag-cli/dist/src/lib/parser");
const utils = require("ttag-cli/dist/src/lib/utils");

module.exports = function (source) {
  if (this.cacheable) this.cacheable();

  let poData = parser.parse(source);

  const messages = utils.iterateTranslations(poData.translations);
  const header = messages.next().value;
  delete header.comments;
  for (const msg of messages) { delete msg.comments; }

  value = JSON.stringify(poData)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  return `export default ${ value };`;
}
