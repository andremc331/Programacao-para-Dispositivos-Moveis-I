import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection";
import { Aluno } from "./aluno";
import { Disciplina } from "./disciplina";
import { NotaInstance, NotaAttributes } from "../types";

export const Nota = sequelize.define<NotaInstance>("Nota", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  alunoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Aluno,
      key: 'id'
    }
  },
  disciplinaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Disciplina,
      key: 'id'
    }
  },
  nota1: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  nota2: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  nota3: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  nota4: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  nota5: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  media: {
    type: DataTypes.FLOAT, 
    allowNull: false,
  },
  situacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Definindo relacionamentos
Aluno.hasMany(Nota, { foreignKey: "alunoId", as: "Nota" });
Nota.belongsTo(Aluno, { foreignKey: "alunoId", as: "Aluno" });

Disciplina.hasMany(Nota, { foreignKey: "disciplinaId", as: "Nota" });
Nota.belongsTo(Disciplina, { foreignKey: "disciplinaId", as: "Disciplina" });