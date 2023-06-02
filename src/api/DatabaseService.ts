"use server";
import { Pool } from "pg";
import { FormEntity } from "../components/Form/Form";

const pool = new Pool({
  host: process.env.DB_HOST!,
  port: parseInt(process.env.DB_PORT!),
  database: process.env.DB!,
  user: process.env.USER!,
  password: process.env.PASSWORD!,
});

pool
  .connect()
  .then((client) => client)
  .catch((err: { stack: any }) => console.error("connection error", err.stack));

export const saveUserFromForm = async (value: FormEntity) => {
  const interestIds = value.interests;
  await pool.query(
    `INSERT INTO usuario (email, sexo_id, idade, escolaridade_id, profissao_id) VALUES ($1, $2, $3, $4, $5)`,
    [value.email, value.gender, value.age, value.education, value.profession]
  );
  const userId = await (
    await pool.query("SELECT u.id FROM usuario u WHERE u.email = $1", [
      value.email,
    ])
  ).rows[0].id;
  interestIds.forEach(async (name) => {
    const interestId = await (
      await pool.query("SELECT i.id FROM interesse i WHERE i.descricao = $1", [
        name,
      ])
    ).rows[0].id;
    await pool.query(
      "INSERT INTO usuario_interesse (usuario_id, interesse_id) VALUES ($1, $2)",
      [userId, interestId]
    );
  });
};
