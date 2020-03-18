module.exports = ({ title, body }) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;">
<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE" />

<title>${title}</title>

<style type="text/css">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400');

body {
  width: 100% !important;
  -webkit-text;
  size-adjust:100%;
  -ms-text-size-adjust:100%;
  margin: 0;
  padding: 0;
}
table td { border-collapse: collapse; }

@media screen and (max-width: 630px) {
  /* This sets elements to 100% width and fixes the height issues too, a god send */
  *[class="100p"] { height:auto !important; }

  *[class="20pad"] { padding-left: 20px; padding-left: 20px }
}

</style>
</head>

<body style="padding: 0; margin: 0">

<table border="0" cellpadding="0" cellspacing="0" style="margin: 0; padding: 0" width="100%">
<tr>
  <td align="center" valign="top">

    <!-- BEGIN - Centered-Container -->
    <table width="100%" cellspacing="0" cellpadding="0" class="100p" style="max-width: 600px">
      <tr>
        <td align="center" valign"top">

          <!-- BEGIN - Header -->
          <table width="100%" cellspacing="0" cellpadding="0" class="100p">
            <tr>
              <td bgcolor="#f7f7f7" valign="top" class="100p">

                <table border="0" cellspacing="0" cellpadding="20" class="100p">
                  <tr>
                    <td width="50%" align="left" style="font-size:16px; color:#462814; padding-left: 40px">
                      <font face="'Open Sans', Arial, sans-serif">
                        <a href="https://liker.land" style="font-size: 16px; color: #28646E; text-decoration: none;">
                          <img width="224px" height="88px" src="https://static.like.co/liker_land_logo.svg" alt="liker.land" />
                        </a>
                      </font>
                    </td>
                    <td align="right" style="font-size:14px; color:#4a4a4a; font-weight:bold;">
                      <font face="'Open Sans', Arial, sans-serif">
                        Download: 
                        <a href="https://apps.apple.com/us/app/liker-land/id1248232355" style="color:#9b9b9b">iOS</a>
                        <a href="https://play.google.com/store/apps/details?id=com.oice" style="color:#9b9b9b">Android</a>
                      </font>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>
          </table>
          <!-- END - Header -->

          <!-- BEGIN - Body -->
          <table width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" class="100p">
            <tr>
              <td>
                ${body}
              </td>
            </tr>
          </table>
          <!-- END - Body -->

          <!-- BEGIN - Footer -->
          <table width="100%" cellspacing="0" cellpadding="0" class="100p">
            <tr>
              <td align="center" valign="top" class="100p">

                <table width="100%" border="0" cellspacing="0" cellpadding="0" class="100p">
                  <tr>
                    <td height="24">
                    </td>
                  </tr>
                </table>

                <table border="0" cellspacing="0" cellpadding="10" width="240">
                  <tr>
                    <td width="28" height="28" align="center">
                      <a href="https://matters.news/@likecoin">
                        <img  width="28" height="28" src="https://static.like.co/email/images/links/matters.png" />
                      </a>
                    </td>
                    <td width="28" height="28" align="center">
                      <a href="https://t.me/likecoin">
                        <img  width="28" height="28" src="https://static.like.co/email/images/links/telegram.png" />
                      </a>
                    </td>
                    <td width="28" height="28" align="center">
                      <a href="https://medium.com/likecoin">
                        <img  width="28" height="28" src="https://static.like.co/email/images/links/medium.png" />
                      </a>
                    </td>
                    <td width="28" height="28" align="center">
                      <a href="https://twitter.com/likecoin">
                        <img  width="28" height="28" src="https://static.like.co/email/images/links/twitter.png" />
                      </a>
                    </td>
                    <td width="28" height="28" align="center">
                      <a href="https://github.com/likecoin/">
                        <img  width="28" height="28" src="https://static.like.co/email/images/links/github.png" />
                      </a>
                    </td>
                    <td width="28" height="28" align="center">
                      <a href="https://www.facebook.com/groups/likecoin/">
                        <img  width="28" height="28" src="https://static.like.co/email/images/links/facebook.png" />
                      </a>
                    </td>
                  </tr>
                </table>

                <table width="100%" border="0" cellspacing="0" cellpadding="5" class="100p">
                  <tr>
                    <td align="center" valign"top">
                      <font face="'Open Sans', Arial, sans-serif">
                        <a href="https://help.like.co" style="color: #28646E;">
                          help centre
                        </a>
                      </font>
                    </td>
                  </tr>
                </table>

                <table width="100%" border="0" cellspacing="0" cellpadding="0" class="100p">
                  <tr>
                    <td height="50">
                    </td>
                  </tr>
                </table>

              </td>
            </tr>
          </table>
          <!-- END - Footer -->

        </td>
      </tr>
    </table>
    <!-- END - Centered-Container -->

  </td>
</tr>
</table>

</body>
</html>`;
