require("dotenv").config();

module.exports = {
  development: {
    database: "curologydb",
    username: "curology",
    password: null,
    host: "127.0.0.1",
    dialect: "postgres",
  },

  test: {
    database: "curologydb_test",
    username: "curology",
    password: null,
    host: "127.0.0.1",
    dialect: "postgres",
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    use_env_variable: process.env.PROD_KEY,
  },
};