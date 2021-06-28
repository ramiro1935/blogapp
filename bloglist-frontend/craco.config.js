/* eslint-disable */
const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@reducers': path.resolve(__dirname, 'src/reducers/'),
    },
  },
}
/* eslint-enable */
