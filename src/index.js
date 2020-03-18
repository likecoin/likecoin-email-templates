const BasicTemplate = require('./basic');
const PersonalTemplate = require('./personal');
const MinimalTemplate = require('./minimal');
const LikerLandMinimalTemplate = require('./liker_land_minimal');
const Components = require('./components');

module.exports = {
  Basic: BasicTemplate,
  Personal: PersonalTemplate,
  Minimal: MinimalTemplate,
  LikerLandMinimal: LikerLandMinimalTemplate,
  ...Components,
};
