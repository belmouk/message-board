import { Client } from "pg";

const main = async () => {
  console.log("seeding...");

  const client = new Client({ connectionString: process.argv[2], ssl: true });
  await client.connect();
  await client.query(`
    CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR (255),
    added DATE,
    text VARCHAR (255)
    );
    `);

  await client.query(
    `
    INSERT INTO messages (username, added, text) 
    VALUES ('Amando', $1, 'Hello World'),('Charles', $1, 'Hello there');
    `,
    [new Date()],
  );

  await client.end();

  console.log("done");
};

main();
