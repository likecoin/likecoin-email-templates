const BasicTemplate = require('./basic');
const PersonalTemplate = require('./personal');
const MinimalTemplate = require('./minimal');
const Components = require('./components');

module.exports = {
  Basic: BasicTemplate,
  Personal: PersonalTemplate,
  Minimal: MinimalTemplate,
  ...Components,
};
