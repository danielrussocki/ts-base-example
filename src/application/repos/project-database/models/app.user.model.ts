import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'
import { AppProjectDatabaseRepo } from '../app.project-database.repo'

export class AppUserModel extends Model<InferAttributes<AppUserModel>, InferCreationAttributes<AppUserModel>> {
  declare id: CreationOptional<number>
  declare name: string
  declare email: string
  declare password: string
  declare active: boolean
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
}

AppUserModel.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    sequelize: AppProjectDatabaseRepo,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: 'USER_INDEXES',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'id' }, { name: 'email' }]
      }
    ]
  }
)
