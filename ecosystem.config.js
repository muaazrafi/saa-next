module.exports = {
  apps : [{
    name: "SAA",
    script: "yarn",
    args: "start",
    instances  : 2,
    exec_mode  : "cluster"
  }],
  deploy : {
    staging : {
      user : 'ubuntu',
      host : '34.213.52.205',
      ref  : 'origin/master',
      repo : 'https://ouath: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@github.com/muaazrafi/saa-next.git',
      path : '/home/ubuntu/saa_next',
      'pre-deploy-local': '',
      'post-deploy' : 'nvm use 16.13.0 && yarn && yarn build && pm2 restart ecosystem.config.js',
      'pre-setup': ''
    },
    production : {
      user : 'ubuntu',
      host: '154.53.33.186',
      // host : ['54.203.55.174', '35.93.82.50'],
      ref  : 'origin/master',
      repo : 'https://ouath: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@github.com/muaazrafi/saa-next.git',
      path : '/home/ubuntu/saa_next',
      'pre-deploy-local': '',
      'post-deploy' : 'nvm use 16.13.0 && yarn && yarn build && pm2 restart ecosystem.config.js',
      'pre-setup': ''
    }    
  }
};
