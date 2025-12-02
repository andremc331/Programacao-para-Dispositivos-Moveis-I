import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Conexão BD
import { connectBD, sequelize } from "./database/connection";

// Models
import { Usuario } from "./models/usuario";
import { Aluno } from "./models/aluno";
import { Professor } from "./models/professor";
import { Disciplina } from "./models/disciplina";
import { Nota } from "./models/nota";

// Rotas
import authRoutes from "./routes/authRoutes";
import alunoRoutes from "./routes/alunoRoutes";
import professorRoutes from "./routes/professorRoutes";
import disciplinaRoutes from "./routes/disciplinaRoutes";
import boletimRoutes from "./routes/boletimRoutes";
import notaRoutes from "./routes/notaRoutes";

const app = express();

//Express
app.use(express.json());
app.use(cors({
  origin:
    "*",
  credentials: true
}));

//Rotas
app.use("/api/auth", authRoutes);
app.use("/api/alunos", alunoRoutes);
app.use("/api/professores", professorRoutes);
app.use("/api/disciplinas", disciplinaRoutes);
app.use("/api/boletim", boletimRoutes);
app.use("/api/nota", notaRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});


export const initializeDatabase = async () => {
  try {
    await connectBD();

    await sequelize.sync({ force: true });
    console.log("✅ Banco sincronizado.");

    const adminExists = await Usuario.findOne({
      where: { email: "admin@scholar.com" }
    });

    if (!adminExists) {
      const bcrypt = require("bcryptjs");
      const senhaHash = await bcrypt.hash("admin123", 10);

      await Usuario.create({
        nome: "Administrador",
        email: "admin@scholar.com",
        senha: senhaHash,
        perfil: "admin"
      });

      console.log("✅ Usuário admin criado.");
    } else {
      console.log("ℹ Usuário admin já existe.");
    }

    console.log("📘 Models carregados:");
    console.log("   - Usuario:", !!Usuario);
    console.log("   - Aluno:", !!Aluno);
    console.log("   - Professor:", !!Professor);
    console.log("   - Disciplina:", !!Disciplina);
    console.log("   - Nota:", !!Nota);

  } catch (error) {
    console.error("❌ Erro na inicialização do BD:", error);
    throw error;
  }
};


export const startServer = async () => {
  try {
    await initializeDatabase();

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
      console.log("📚 Endpoints:");
      console.log(`   http://localhost:${PORT}/api/health`);
      console.log(`   http://localhost:${PORT}/api/alunos`);
      console.log(`   http://localhost:${PORT}/api/professores`);
      console.log(`   http://localhost:${PORT}/api/disciplinas`);
      console.log(`   http://localhost:${PORT}/api/nota`);
      console.log(`   http://localhost:${PORT}/api/boletim/:matricula`);
    });

  } catch (error) {
    console.error("❌ Não foi possível iniciar o servidor");
    process.exit(1);
  }
};

export default app;

if (require.main === module) {
  startServer();
}