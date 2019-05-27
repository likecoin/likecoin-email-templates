module.exports = ({
  href,
  bgImage,
  bgImageBy,
  title,
  body,
}) => `
  <table width="100%" cellspacing="0" cellpadding="0" bgcolor="#" class="100p" style="max-width: 600px">
    <tr>
      <td bgcolor="#f7f7f7" valign="top" class="100p">
        <div>
          <table width="100%" border="0" cellspacing="0" cellpadding="40" class="100p">
            <tr>
              <td>
                <table width="100%" border="0" cellspacing="0" >
                  <tbody>
                    <tr style="padding:0;vertical-align:top;text-align:left">
                      <td style="word-wrap:break-word;vertical-align:top;color:#0a0a0a;font-weight:normal;padding:0;margin:0;text-align:left;font-size:16px;line-height:19px;border-collapse:collapse!important;background:url(${bgImage}) no-repeat center center/cover">
                        <table style="border-spacing:0;border-collapse:collapse;vertical-align:top;text-align:left;padding:0;width:100%;display:table">
                          <tbody>
                            <tr style="padding:0;vertical-align:top;text-align:left">
                              <th style="color:#0a0a0a;font-weight:normal;padding:0;text-align:left;font-size:16px;line-height:19px;margin:0 auto;padding-left:16px;padding-right:16px;width:100%;padding-bottom:0!important">
                                <div style="padding-bottom:24px"></div>
                                <div style="padding-bottom:24px"></div>
                                <table style="border-spacing:0;border-collapse:collapse;vertical-align:top;text-align:left;padding:0;width:100%;display:table">
                                  <tbody>
                                    <tr style="padding:0;vertical-align:top;text-align:left">
                                      <th style="color:#0a0a0a;font-weight:normal;padding:0;text-align:left;font-size:16px;line-height:19px;margin:0 auto;padding-bottom:16px;padding-left:16px;padding-right:16px;width:100%">
                                        <p
                                          style="padding:0;margin:0;text-align:left;max-width:290px;word-break:normal;font-size:24px;line-height:1.75;color:white;margin-bottom:0!important;background-image:linear-gradient(103deg, #000000, rgba(0, 0, 0, 0))">${title}</p>
                                      </th>
                                    </tr>
                                  </tbody>
                                </table>
                                <div style="padding-bottom:24px"></div>
                                <div style="padding-bottom:24px"></div>
                                <div style="padding-bottom:24px"></div>
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style="text-align: left; color:#462814; font-size:16px;">${body}</p>
                        <div style="width: 100%; border-radius: 4px; border: solid 1px #979797; background-color: #ffffff; padding-top: 22px; padding-bottom: 22px;">
                          <a href="${href}">
                            <span style="color:#4a4a4a; display:inline-block; padding-left: 24px;">${href}</span>
                          </a>
                        </div>
                        <p align="right" style="color:#9b9b9b; font-size:10px;">
                          Photo by ${bgImageBy}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </td>
    </tr>
  </table>
`;
