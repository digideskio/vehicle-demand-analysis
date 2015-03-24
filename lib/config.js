var config = {}
  , env = process.env.NODE_ENV || 'dev';

switch (env) {
  case 'dev':
  case 'prod':
    config.database = './data/';
    break;

  case 'test':
    config.database = './data/test-workspace/';
    break;
}

// Interface
module.exports = config;
