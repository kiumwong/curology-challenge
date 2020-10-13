require('dotenv').config();

module.exports = {

  development: {
    database: 'curologydb',
    username: 'curology',
    password: 'password',
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  test: {
    database: 'curologydb_test',
    username: 'password',
    password: null,
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  production: {
    use_env_variable: 'postgres://kvhxgpuomtcavx:37158d276cc58926cbc78e67ef51d147bca0a92f613cfecafd54b11706581deb@ec2-107-22-241-205.compute-1.amazonaws.com:5432/dunrvcf1mrq0d'
  }
};

