const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/danielvfo/gatsby-blog.git'
  },
  () => {
    console.log('Deploy Complete!');
  }
);
