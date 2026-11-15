module.exports = {
  apps: [{
    name: 'northern-2026',
    cwd: __dirname,
    script: 'server.js',
    env: { PORT: '3003', NODE_ENV: 'production' },
    instances: 1,
    exec_mode: 'fork',
    autorestart: true
  }]
};
