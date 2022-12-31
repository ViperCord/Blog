const siteMetadata = {
  title: 'Vipercord Blog',
  author: 'Vipercord Blog',
  headerTitle: 'Vipercord Blog',
  description: 'Stay Up-To Date with our Latest News and Updates',
  language: 'en-us',
  theme: 'default',
  siteUrl: 'https://blog.vipercord.com',
  siteRepo: 'https://github.com/vipercord/Blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '',
  email: 'support@vipercord.com',
  github: 'https://github.com/vipercord',
  twitter: 'https://twitter.com/vipercord',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: 'blog.vipercord.com', /** REQUIRED */
    simpleAnalytics: false, /** REQUIRED */
    umamiWebsiteId: '', /** NOT REQUIRED */
    googleAnalyticsId: '' /** NOT REQUIRED */
  },
  newsletter: {
    provider: 'buttondown',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'dark_dimmed',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
    utterancesConfig: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: 'pathname',
      label: 'issues',
      theme: 'github-dark',
      darkTheme: 'photon-dark',
    },
    disqusConfig: {
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
