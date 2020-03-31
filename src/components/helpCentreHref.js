module.exports = ({
  locale = 'en',
} = {}) => `
  <a href="${locale === 'zh' ? 'https://docs.like.co/v/zh/' : 'https://docs.like.co/'}" style="color: #28646E;">
    ${locale === 'zh' ? '幫助中心' : 'help centre'}
  </a>
`;
