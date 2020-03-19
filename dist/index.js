'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var BasicTemplate = require('./basic');
var PersonalTemplate = require('./personal');
var MinimalTemplate = require('./minimal');
var LikerLandMinimalTemplate = require('./liker_land_minimal');
var Components = require('./components');

module.exports = _extends({
  Basic: BasicTemplate,
  Personal: PersonalTemplate,
  Minimal: MinimalTemplate,
  LikerLandMinimal: LikerLandMinimalTemplate
}, Components);