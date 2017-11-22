// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      filename: './create_milestones',
      database: 'vagrant',
      user:     'development',
      password: 'development'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'vagrant',
      user:     'development',
      password: 'development'
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
      database: 'vagrant',
      user:     'development',
      password: 'development'
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
