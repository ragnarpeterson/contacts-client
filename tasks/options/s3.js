module.exports = {
  options: {
    key: '<%= env.AWS_ACCESS_KEY_ID %>',
    secret: '<%= env.AWS_SECRET_ACCESS_KEY %>',
    bucket: '<%= env.AWS_BUCKET %>',
    access: 'public-read'
  },
  deploy: {
    upload: [
      {
        src: 'dist/assets/*',
        dest: '/assets/',
        rel: 'dist/assets'
      },
      {
        src: 'dist/index.html',
        dest: 'index.html'
      }
    ]
  }
};