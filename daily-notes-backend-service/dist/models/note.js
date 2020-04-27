"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.sequelize = void 0;

var _sequelize = require("sequelize");

// import sequelize from '../server';
const sequelize = new _sequelize.Sequelize('postgres', 'root', 'root', {
  dialect: 'postgres'
});
exports.sequelize = sequelize;

class Note extends _sequelize.Model {}

Note.init({
  date: _sequelize.DataTypes.DATEONLY,
  text: _sequelize.DataTypes.STRING
}, {
  sequelize: sequelize,
  modelName: 'notes'
});
var _default = Note;
exports.default = _default;