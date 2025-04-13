module.exports = {
  apps: [{
    name: 'habitify-api',
    script: 'server.js',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 5000
    },
    error_file: 'logs/pm2/error.log',
    out_file: 'logs/pm2/out.log',
    time: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    instance_var: 'INSTANCE_ID',
    wait_ready: true,
    listen_timeout: 50000,
    kill_timeout: 5000,
    source_map_support: false,
    node_args: [
      '--max-old-space-size=1024',
      '--max-http-header-size=16384'
    ]
  }]
};
    env_production: {
      NODE_ENV: 'production',
      PORT: 5000
    }
  }]
};