import { Sequelize, QueryTypes, Op, fn } from 'sequelize'

export { QueryTypes, Op, fn }

export const AppProjectDatabaseRepo = new Sequelize(
  process.env.REPO_DB_DATABASE || '',
  process.env.REPO_DB_USER || '',
  process.env.REPO_DB_PASS,
  {
    host: process.env.DYNAMI_RE_DB_HOST,
    dialect: 'postgres',
    // port: process.env.DYNAMI_RE_DB_PORT,
    logging: console.log,
    // timezone: 'America/Mexico_City',
    pool: {
      idle: 900000
    }
    // operatorsAliases: false // Quita el warning: "sequelize deprecated String based operators are now deprecated"
  }
)

AppProjectDatabaseRepo.authenticate()
  .then(() => console.log('Conexión exitosa a la Base de Datos'))
  .catch((e) => console.error('Error de conexión: ', e))
