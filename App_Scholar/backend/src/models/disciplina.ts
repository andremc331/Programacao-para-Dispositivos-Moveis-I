import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection";
import { Professor } from "./professor";

export const Disciplina = sequelize.define("Disciplina", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cargaHoraria: {
    type: DataTypes.INTEGER,
  },
});

// Associação: Uma Disciplina pertence a um Professor
Disciplina.belongsTo(Professor, { foreignKey: "professorId", as: "Professor" });
Professor.hasMany(Disciplina, { foreignKey: "professorId", as: "Disciplina" });