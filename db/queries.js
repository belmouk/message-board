import pool from "./pool.js";

export const getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

export const getMessage = async (id) => {
  const { rows } = await pool.query("SELECT * from messages WHERE id=$1", [id]);

  return rows[0];
};

export const addMessage = async (user, text) => {
  pool.query(
    "INSERT INTO messages (username, text, added) VALUES ($1, $2, $3)",
    [user, text, new Date()],
  );
};
