require("dotenv").config();

module.exports = {
  development: {
    database: "curologydb",
    username: "curology",
    password: "password",
    host: "127.0.0.1",
    dialect: "postgres",
  },

  test: {
    database: "curologydb_test",
    username: "password",
    password: null,
    host: "127.0.0.1",
    dialect: "postgres",
  },

  production: {
    use_env_variable: process.env.PROD_KEY,
  },
};

# Environment
STATIC_DIR=./public
