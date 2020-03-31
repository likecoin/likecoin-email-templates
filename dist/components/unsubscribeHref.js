'use strict';

module.exports = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$locale = _ref.locale,
      locale = _ref$locale === undefined ? 'en' : _ref$locale;

  return '\n  <a href="https://like.co/in/settings/others" style="color: #28646E;">\n    ' + (locale === 'zh' ? '退訂郵件' : 'Unsubscribe') + '\n  </a>\n';
};