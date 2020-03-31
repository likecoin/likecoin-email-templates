'use strict';

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$locale = _ref.locale,
      locale = _ref$locale === undefined ? 'en' : _ref$locale;

  return '\n  <a href="' + (locale === 'zh' ? 'https://docs.like.co/v/zh/' : 'https://docs.like.co/') + '" style="color: #28646E;">\n    ' + (locale === 'zh' ? '幫助中心' : 'help centre') + '\n  </a>\n';
};