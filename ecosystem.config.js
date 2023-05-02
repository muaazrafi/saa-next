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
      repo : 'https://muaazrafi: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@github.com/muaazrafi/saa-next.git',
      path : '/home/ubuntu/saa_next',
      'pre-deploy-local': '',
      'post-deploy' : 'nvm use 16.13.0 && yarn && yarn build && pm2 restart ecosystem.config.js',
      'pre-setup': ''
    },
    production : {
      user : 'ubuntu',
      host : ['54.203.55.174'],
      ref  : 'origin/master',
      repo : 'https://muaazrafi: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@github.com/muaazrafi/saa-next.git',
      path : '/home/ubuntu/saa_next',
      'pre-deploy-local': '',
      'post-deploy' : 'nvm use 16.13.0 && yarn && yarn build && pm2 restart ecosystem.config.js',
      'pre-setup': ''
    }    
  }
};
