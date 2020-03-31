'use strict';

var helpCentreHref = require('./components/helpCentreHref');
var unsubscribeHref = require('./components/unsubscribeHref');

module.exports = function (_ref) {
  var title = _ref.title,
      body = _ref.body,
      locale = _ref.locale;
  return '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>\n<meta name="format-detection" content="telephone=no">\n<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;">\n<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE" />\n\n<title>' + title + '</title>\n\n<style type="text/css">\n@import url(\'https://fonts.googleapis.com/css?family=Open+Sans:400\');\n\nbody {\n  width: 100% !important;\n  -webkit-text;\n  size-adjust:100%;\n  -ms-text-size-adjust:100%;\n  margin: 0;\n  padding: 0;\n}\ntable td { border-collapse: collapse; }\n\n@media screen and (max-width: 630px) {\n  /* This sets elements to 100% width and fixes the height issues too, a god send */\n  *[class="100p"] { height:auto !important; }\n\n  *[class="20pad"] { padding-left: 20px; padding-left: 20px }\n}\n\n</style>\n</head>\n\n<body style="padding: 0; margin: 0">\n\n<table border="0" cellpadding="0" cellspacing="0" style="margin: 0; padding: 0" width="100%">\n<tr>\n  <td align="center" valign="top">\n\n    <!-- BEGIN - Centered-Container -->\n    <table width="100%" cellspacing="0" cellpadding="0" class="100p" style="max-width: 600px">\n      <tr>\n        <td align="center" valign"top">\n\n          <!-- BEGIN - Header -->\n          <table width="100%" cellspacing="0" cellpadding="0" class="100p">\n            <tr>\n              <td bgcolor="#f7f7f7" valign="top" class="100p">\n\n                <table border="0" cellspacing="0" cellpadding="20" class="100p">\n                  <tr>\n                    <td width="50%" align="left" style="font-size:16px; color:#462814; padding-left: 40px">\n                      <font face="\'Open Sans\', Arial, sans-serif">\n                        <a href="https://liker.land" style="font-size: 16px; color: #28646E; text-decoration: none;">\n                          <img width="224px" height="88px" src="https://static.like.co/liker_land_logo.png" alt="liker.land" />\n                        </a>\n                      </font>\n                    </td>\n                    <td align="right" style="font-size:14px; color:#4a4a4a; font-weight:bold;">\n                      <font face="\'Open Sans\', Arial, sans-serif">\n                        Download: \n                        <a href="https://apps.apple.com/us/app/liker-land/id1248232355" style="color:#9b9b9b">iOS</a>\n                        <a href="https://play.google.com/store/apps/details?id=com.oice" style="color:#9b9b9b">Android</a>\n                      </font>\n                    </td>\n                  </tr>\n                </table>\n\n              </td>\n            </tr>\n          </table>\n          <!-- END - Header -->\n\n          <!-- BEGIN - Body -->\n          <table width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" class="100p">\n            <tr>\n              <td>\n                ' + body + '\n              </td>\n            </tr>\n          </table>\n          <!-- END - Body -->\n\n          <!-- BEGIN - Footer -->\n          <table width="100%" cellspacing="0" cellpadding="0" class="100p">\n            <tr>\n              <td align="center" valign="top" class="100p">\n\n                <table width="100%" border="0" cellspacing="0" cellpadding="0" class="100p">\n                  <tr>\n                    <td height="24">\n                    </td>\n                  </tr>\n                </table>\n\n                <table border="0" cellspacing="0" cellpadding="10" width="240">\n                  <tr>\n                    <td width="28" height="28" align="center">\n                      <a href="https://matters.news/@likecoin">\n                        <img  width="28" height="28" src="https://static.like.co/email/images/links/matters.png" />\n                      </a>\n                    </td>\n                    <td width="28" height="28" align="center">\n                      <a href="https://t.me/likecoin">\n                        <img  width="28" height="28" src="https://static.like.co/email/images/links/telegram.png" />\n                      </a>\n                    </td>\n                    <td width="28" height="28" align="center">\n                      <a href="https://medium.com/likecoin">\n                        <img  width="28" height="28" src="https://static.like.co/email/images/links/medium.png" />\n                      </a>\n                    </td>\n                    <td width="28" height="28" align="center">\n                      <a href="https://twitter.com/likecoin">\n                        <img  width="28" height="28" src="https://static.like.co/email/images/links/twitter.png" />\n                      </a>\n                    </td>\n                    <td width="28" height="28" align="center">\n                      <a href="https://github.com/likecoin/">\n                        <img  width="28" height="28" src="https://static.like.co/email/images/links/github.png" />\n                      </a>\n                    </td>\n                    <td width="28" height="28" align="center">\n                      <a href="https://www.facebook.com/groups/likecoin/">\n                        <img  width="28" height="28" src="https://static.like.co/email/images/links/facebook.png" />\n                      </a>\n                    </td>\n                  </tr>\n                </table>\n\n                <table width="100%" border="0" cellspacing="0" cellpadding="5" class="100p">\n                  <tr>\n                    <td align="center" valign"top">\n                      <font face="\'Open Sans\', Arial, sans-serif">\n                        ' + helpCentreHref({ locale: locale }) + '\n                      </font>\n                    </td>\n                  </tr>\n                </table>\n\n                <table width="100%" border="0" cellspacing="0" cellpadding="5" class="100p">\n                  <tr>\n                    <td align="center" valign"top">\n                      <font face="\'Open Sans\', Arial, sans-serif">\n                        ' + unsubscribeHref({ locale: locale }) + '\n                      </font>\n                    </td>\n                  </tr>\n                </table>\n\n                <table width="100%" border="0" cellspacing="0" cellpadding="0" class="100p">\n                  <tr>\n                    <td height="50">\n                    </td>\n                  </tr>\n                </table>\n\n              </td>\n            </tr>\n          </table>\n          <!-- END - Footer -->\n\n        </td>\n      </tr>\n    </table>\n    <!-- END - Centered-Container -->\n\n  </td>\n</tr>\n</table>\n\n</body>\n</html>';
};