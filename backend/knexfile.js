// Update with your config settings.
// DB_HOST=localhost
// DB_USER=labber
// DB_PASS=labber
// DB_NAME=final
// # Uncomment and set to true for Heroku
// # DB_SSL=true if heroku
// DB_PORT=5432
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'labber',
      password: 'labber',
      database: 'final',
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
