// Look in ./config folder for webpack.dev.js
switch (process.env.ASPNETCORE_ENVIRONMENT) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.prod');
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/webpack.dev');
}
