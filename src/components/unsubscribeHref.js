module.exports = ({
  locale = 'en',
} = {}) => `
  <a href="https://like.co/in/settings/others" style="color: #28646E;">
    ${locale === 'zh' ? '退訂郵件' : 'Unsubscribe'}
  </a>
`;
