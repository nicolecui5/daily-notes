import { Sequelize, Model, DataTypes } from 'sequelize';
// import sequelize from '../server';

export const sequelize = new Sequelize('postgres', 'root', 'root', {
  dialect: 'postgres',
});

class Note extends Model {}
Note.init(
  {
    date: DataTypes.DATEONLY,
    text: DataTypes.STRING,
  },

  { sequelize: sequelize, modelName: 'notes' }
);

export default Note;
