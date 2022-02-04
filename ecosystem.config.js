module.exports = {
  apps : [{
    name: "SAA",
    script: "yarn",
    args: "start",
    instances  : 1,
    exec_mode  : "cluster"
  }],
  deploy : {
    staging : {
      user : 'ubuntu',
      host : '18.237.41.223',
      ref  : 'origin/master',
      repo : 'https://muaazrafi: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@github.com/muaazrafi/saa-next.git',
      path : '/home/ubuntu/saa_next',
      'pre-deploy-local': '',
      'post-deploy' : 'nvm use 16.13.0 && yarn && yarn build && pm2 restart ecosystem.config.js',
      'pre-setup': ''
    },
    // production : {
    //   user : 'ubuntu',
    //   host : '',
    //   ref  : 'origin/master',
    //   repo : '',
    //   path : '',
    //   'pre-deploy-local': '',
    //   'post-deploy' : 'nvm use 14.18.2 && npm install && npm run build && pm2 restart ecosystem.config.js',
    //   'pre-setup': ''
    // }    
  }
};
